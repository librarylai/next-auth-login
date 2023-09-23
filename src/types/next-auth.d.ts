import NextAuth, { NextAuthOptions } from 'next-auth'
import { Session } from 'next-auth'
import Providers from 'next-auth/providers'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface Session {
    user: {
      /** The user's postal address. */
      id: number
      email: string
      name: string
      image: string
    }
    accessToken: string
  }
  declare module 'next-auth/providers' {
    interface providers {
      provider: provider[]
    }
    interface provider {
      id?: string
      name?: string
    }
  }
}
