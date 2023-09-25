import GoogleProvider from 'next-auth/providers/google'
import LineProvider from 'next-auth/providers/line'
import { NextAuthOptions } from 'next-auth'
import { getServerSession } from 'next-auth/next'

export const authConfigs: NextAuthOptions = {
  // 設定 secret 讓 session cookie 加密
  secret: process.env.NEXTAUTH_SECRET,
  // 存放各種要使用的 第三方登入 或是 客製化自己的登入方式（ex. email, password）
  providers: [
    GoogleProvider({
      // 填上 Google OAuth 建立的 client id & secret
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    LineProvider({
      // 填上 Line login 的 Channel id & secret
      clientId: process.env.LINE_CHANNEL_ID as string,
      clientSecret: process.env.LINE_CHANNEL_SECRET as string,
      // 如果要取得 email 則需要重新定義 scope 選項，預設只有`openid`、`profile`，因此要再加上 `email`
      // 且也需在 LINE Developer 中將 OpenID Connect 裡的 Email address permission  打開
      authorization: { params: { scope: 'openid email profile' } },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // 這邊可以將，我們從第三方登入取得的資料存入 token，並且讓 token 帶入 session 給前端存取
      // 可以依照自己的需求，例如透過 email, name, 去建立一個該專案的 access_token 與 refresh_token 給前端存取，且將第三方取得的資料存到 ＤＢ 中
      // 舉例：將 access_token 存入 token 中 （該 access_token 是透過第三方登入取得的）
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      // 一般預設 session 只會存放 user 資料（ex. name , email , image），如果要存放其他資料，可以透過這邊存入
      // 舉例：將 token 中的 access_token 存入 session 中
      session.accessToken = token.accessToken as string
      return session
    },
  },
}

export const getSessionData = async () => await getServerSession(authConfigs)
