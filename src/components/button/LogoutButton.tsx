'use client'
import { useSession, signOut } from 'next-auth/react'

export default function LogoutButton() {
  const handleLogin = () => {
    signOut()
  }
  return (
    <button
      onClick={handleLogin}
      className='w-60 bg-white border-2 text-center font-bold flex justify-center items-center gap-3 rounded-full border-slate-950 py-2'
    >
      <p className='text-slate-950'>Logout</p>
    </button>
  )
}
