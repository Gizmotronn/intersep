'use client'

// TODO: Duplicate or move this file outside the `_examples` folder to make it a route

import { useEffect, useState } from 'react'

export default function ClientComponent() {
  const [todos, setTodos] = useState<any[]>([])

  // Create a Supabase client configured to use cookies

  return <pre>{JSON.stringify(todos, null, 2)}</pre>
}
