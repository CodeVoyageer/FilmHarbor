import { createClient } from "@supabase/supabase-js"
const supabaseUrl = "https://tmjiqmfknjjmvayqgwxt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtamlxbWZrbmpqbXZheXFnd3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0NzY0MTEsImV4cCI6MjAxODA1MjQxMX0.nNIfIoTGZuSg0APdgDIRYBAxkpPNhlXXf2a-7O50Sd8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;