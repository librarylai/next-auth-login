'use client'
// 需單獨開一隻來封裝 SessionProvider 在 use client 中使用，因為 layout.tsx 是 server component
import { SessionProvider } from 'next-auth/react'

export default function SessionAuthProvider({ children, session }: { children: React.ReactNode; session: any }) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
