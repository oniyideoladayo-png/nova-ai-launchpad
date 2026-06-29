import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://abjphilclsxtifvzpmap.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFianBoaWxjbHN4dGlmdnpwbWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1MDk3MjgsImV4cCI6MjA5ODA4NTcyOH0.u_Az1BxAc2BtiS7mQbJ5iqMrc0sVnwqp4xihhItMIt8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});
