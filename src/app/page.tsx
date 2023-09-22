import GoogleLoginButton from '@/components/button/GoogleLoginButton'
import LogoutButton from '@/components/button/LogoutButton'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center  p-24'>
      <div className='flex gap-3 flex-col bg-white rounded-2xl  p-12'>
        <GoogleLoginButton />
        <LogoutButton />
      </div>
    </main>
  )
}
