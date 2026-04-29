import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lnrnbtoiclgfkwjcqhab.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxucm5idG9pY2xnZmt3amNxaGFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczOTQzNTMsImV4cCI6MjA5Mjk3MDM1M30.CylQ42AYZyiBVwiB3M0B5kszW4cRArHGFYwsVxYafLk'

const supabase = createClient(supabaseUrl, supabaseKey)

async function obtenerEstudiantes() {
    const { data, error } = await supabase
        .from('estudiantes')
        .select('*')

    if (error) {
        console.log('Error:', error)
    } else {
        console.log('Datos:', data)
    }
}

obtenerEstudiantes()