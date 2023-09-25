'use client'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

type Props = {
  type: 'google' | 'line'
  icon: string
  buttonText: string
}

export default function ThirdPartyLoginButton({ type, icon, buttonText }: Props) {
  const handleLogin = () => {
    signIn(type)
  }
  return (
    <button
      onClick={handleLogin}
      className='w-60 bg-white  hover:bg-slate-200 duration-300 border-2 text-center font-bold flex  items-center gap-3 rounded-full border-slate-950 hover:border-cyan-300 px-3 py-2 '
    >
      <Image src={icon} alt='Logo' width={24} height={24} priority />
      <p className='text-slate-950'>{buttonText}</p>
    </button>
  )
}
