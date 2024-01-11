import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const {
  handlers: {GET, POST},
  auth,
  signIn
} = NextAuth({
  pages: {
    signIn: '/',
    newUser: '/accounts/emailsignup'
  },
  providers: [
    CredentialsProvider({
      // name: 'Credentials',
      async authorize(credentials, req) {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
            method: 'POST',
            body: JSON.stringify({
              id: credentials.userId,
              password: credentials.password,
            }),
          })
          const user = await res.json();

          if (res.ok && user) {
            console.log('user', user);
            return {
              email: user.id,
              name: user.nickname,
              image: user.image,
              ...user,
            };
          }
          return null;
        } catch (error) {
          console.error('로그인 에러', error);
        }
      }
    })
  ],
});


