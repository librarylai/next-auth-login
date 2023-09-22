'use client'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function GoogleLoginButton() {
  const handleLogin = () => {
    signIn('google')
  }
  return (
    <button
      onClick={handleLogin}
      className='w-60 bg-white border-2 text-center font-bold flex justify-center items-center gap-3 rounded-full border-slate-950 py-2'
    >
      <Image src='/icon-google.svg' alt='Google Logo' width={24} height={24} priority />
      <p className='text-slate-950'>Continue with Google</p>
    </button>
  )
}
