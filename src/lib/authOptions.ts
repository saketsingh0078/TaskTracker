import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/db/dbconnect";
import User, { IUser } from "@/model/User";

interface UserType {
  name?: string;
  id: string;
  email: string;
  password: string;
}

interface Credentials {
  email: string;
  password: string;
  name?: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text" },
      },

      async authorize(credentials: Credentials | undefined) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }

        await dbConnect();
        const { email, password, name } = credentials;

        const user: UserType | null = await User.findOne({ email });

        if (user) {
          const passwordValid = await bcrypt.compare(password, user.password);
          if (passwordValid) {
            return { id: user.id + "", email: user.email } as UserType;
          }
          return null;
        } else {
          const hashedPassword = await bcrypt.hash(password, 10);
          try {
            const newUser = await User.create({
              name,
              email,
              password: hashedPassword,
            });

            return { id: newUser._id + "", email: email } as UserType;
          } catch (e) {
            console.error("User not created", e);
            return null;
          }
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    jwt: async ({ token, user }: any) => {
      token.uid = token.sub;
      return token;
    },
    session: ({ session, token, user }: any) => {
      session.user.id = token.uid;
      return session;
    },
  },

  pages: {
    signIn: "/signup",
  },
};
