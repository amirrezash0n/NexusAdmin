import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uifdafteuepyxegkpdkv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpZmRhZnRldWVweXhlZ2twZGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzA5MDQsImV4cCI6MjA3MTEwNjkwNH0.i6hOO92Mb_FbRAFJMjhSmmyx5bp89A6KdA_BhIXCVys";
export const supabase = createClient(supabaseUrl, supabaseKey);
