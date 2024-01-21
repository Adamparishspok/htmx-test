import posthog from "posthog-js";
import { createClient } from '@supabase/supabase-js'

posthog.init("phc_rjon7Uyj3QI6ZQKrTdN8jeOWlV0QoZzJkUxftAtEzqv", {
  api_host: "https://us.posthog.com",
});

const supabaseUrl = 'https://fwomfhavhinjaomrcqfv.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)