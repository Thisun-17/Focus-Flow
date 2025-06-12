# Focus-Flow

Focus-Flow is a small Next.js application for tracking focus sessions along with notes, goals, and reflections. The app stores session data in Supabase and demonstrates basic CRUD operations using the Supabase JavaScript client.

## Setup

1. Install dependencies:
   ```bash
   cd my-app
   npm install
   ```
2. Create a `.env.local` file inside `my-app` with your Supabase credentials:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
   ```

## Development

Run the development server with:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the app.

## Production

Create a production build and start the server:
```bash
npm run build
npm start
```

## Supabase Usage

The app uses Supabase to persist focus session data. The `supabaseClient` in `app/lib/supabaseClient.js` creates a client using the environment variables above. Pages like `app/sessions/page.jsx` interact with the `focus_sessions` table, demonstrating how to fetch and insert session notes.

