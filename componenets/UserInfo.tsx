"use client";

import { Container } from "@mui/material";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div >
      <Container sx={{ textAlign: "center" }} >
        <div>
          Name: <span >{session?.user?.name}</span>
        </div>
        <div>
          Email: <span >{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}

        >
          Log Out
        </button>
      </Container>
    </div>
  );
}
