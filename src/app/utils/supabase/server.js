import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export const createClient = () => {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookieOptions: {
        name: "sb",
        lifetime: 60 * 60 * 24 * 7, // one week
        domain: "",
        path: "/",
        sameSite: "lax",
      },
      cookies: {
        getAll: () => (cookieStore && typeof cookieStore.getAll === 'function' ? cookieStore.getAll() : []),
        setAll: (cookies) => {
          if (cookieStore && typeof cookieStore.set === 'function') {
            cookies.forEach((cookie) =>
              cookieStore.set(cookie.name, cookie.value, cookie.options)
            );
          }
        },
      },
    }
  );

  return supabase;
};