import posthog from 'posthog-js'
import { createClient } from '@supabase/supabase-js'

posthog.init('phc_rjon7Uyj3QI6ZQKrTdN8jeOWlV0QoZzJkUxftAtEzqv', {
  api_host: 'https://us.posthog.com'
})

const supabaseUrl = 'https://fwomfhavhinjaomrcqfv.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

function sendTestEvent() {
  posthog.capture('test_event', {
    property1: 'value1',
    property2: 'value2'
  })
}

document
  .getElementById('login-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault()
    const email = this.my.email
    const password = this.my.password

    try {
      const { user, session, error } = await supabase.auth.signIn({
        email: email,
        password: password
      })

      if (error) throw error
      alert('Login successful!')
      // Redirect or update UI as needed
    } catch (error) {
      alert(error.error_description || error.message)
    }
  })
