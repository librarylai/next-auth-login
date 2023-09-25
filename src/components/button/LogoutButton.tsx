'use client'
import { signOut } from 'next-auth/react'

export default function LogoutButton() {
  const handleLogin = () => {
    signOut()
  }
  return (
    <button
      onClick={handleLogin}
      className='w-60 bg-white hover:bg-slate-200 duration-300 border-2 text-center font-bold flex justify-center items-center gap-3 rounded-full border-slate-950 hover:border-cyan-300 py-2'
    >
      <p className='text-slate-950'>Logout</p>
    </button>
  )
}
