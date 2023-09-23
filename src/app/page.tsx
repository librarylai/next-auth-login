import GoogleLoginButton from '@/components/button/GoogleLoginButton'
import LogoutButton from '@/components/button/LogoutButton'
import { getSessionData } from '@/lib/loginAuth'
import Image from 'next/image'
export default async function Home() {
  const session = await getSessionData()
  return (
    <main className='flex min-h-screen flex-col items-center  p-24'>
      {session && (
        <>
          <Image width={60} height={60} alt={'profile'} src={session.user.image} />
          <div>{session.user.email}</div>
        </>
      )}
      <div className='flex gap-3 flex-col bg-white rounded-2xl  p-12'>
        <GoogleLoginButton />
        <LogoutButton />
      </div>
    </main>
  )
}
