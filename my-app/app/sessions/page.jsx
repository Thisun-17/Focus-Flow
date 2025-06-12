'use client';

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function SessionsPage() {
  const [sessions, setSessions] = useState([]);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    fetchSessions();
  }, []);

  async function fetchSessions() {
    let { data } = await supabase
      .from('focus_sessions')
      .select('*')
      .order('started_at', { ascending: false });
    setSessions(data);
  }

  async function addSession() {
    await supabase
      .from('focus_sessions')
      .insert({ notes });
    setNotes('');
    fetchSessions();
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Focus Sessions</h1>
      <textarea
        className="w-full p-2 border rounded mb-2"
        value={notes}
        onChange={e => setNotes(e.target.value)}
        placeholder="What did you focus on?"
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded mb-4"
        onClick={addSession}
      >Add Session</button>

      <ul>
        {sessions.map(s => (
          <li key={s.id} className="mb-2">
            <div className="text-gray-600 text-sm">
              {new Date(s.started_at).toLocaleString()}:
            </div>
            <div>{s.notes}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
