import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import InstagramProvider from "next-auth/providers/instagram"

const handler = NextAuth({
    // Configure authentication providers
    providers : [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        InstagramProvider({
            clientId: process.env.INSTAGRAM_CLIENT_ID,
            clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
          })

        // EmailProvider({
        //     server: {
        //       host: process.env.EMAIL_SERVER_HOST,
        //       port: process.env.EMAIL_SERVER_PORT,
        //       auth: {
        //         user: process.env.EMAIL_SERVER_USER,
        //         pass: process.env.EMAIL_SERVER_PASSWORD
        //       }
        //     },
        //     from: process.env.EMAIL_FROM
        //   }),

    ]
  
    //     providers: [
//     // Example: Google provider
//     {
//       id: 'google',
//       name: 'Google',
//       type: 'oauth',
//       version: '2.0',
//       scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
//       accessTokenUrl: 'https://oauth2.googleapis.com/token',
//       authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code',
//       profileUrl: 'https://www.googleapis.com/oauth2/v3/userinfo',
//       profile: (profile) => {
//         return {
//           id: profile.sub,
//           name: profile.name,
//           email: profile.email,
//           image: profile.picture,
//         };
//       },
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     },
//     // Add more providers here
//   ], 

})

export { handler as GET, handler as POST }

