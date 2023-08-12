import { Container } from '@mui/material'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LoginForm from '../componenets/LoginForm'

export default async function Home() {
  // const session = await getServerSession(authOptions);
  // if (session) redirect("/dashboard");
  return (

    <LoginForm />

  )
}
