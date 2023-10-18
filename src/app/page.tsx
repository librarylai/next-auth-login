import ThirdPartyLoginButton from '@/components/button/ThirdPartyLoginButton'
import LogoutButton from '@/components/button/LogoutButton'
import { getSessionData } from '@/lib/loginAuth'
import Image from 'next/image'
export default async function Home() {
  const session = await getSessionData()
  console.log(session)
  return (
    <main className='flex min-h-screen flex-col items-center  p-24'>
      {session && (
        <div className='mb-4 flex flex-col  items-center'>
          <Image width={60} height={60} alt={'profile'} src={session.user.image} />
          <div className='font-momo'>{session.user.email}</div>
        </div>
      )}
      <div className='flex gap-3 flex-col bg-white rounded-2xl  p-12'>
        <ThirdPartyLoginButton type={'google'} icon={'/icon-google.svg'} buttonText={'Continue with Google'} />
        <ThirdPartyLoginButton type={'line'} icon={'/icon-line.svg'} buttonText={'Continue with LINE'} />
        <LogoutButton />
      </div>
    </main>
  )
}
