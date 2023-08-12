"use client"

import Link from "next/link";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Box, Button, Container, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'


const LoginFrom = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };


  return (

    <Box height="18rem" sx={{ p: 4, m: 4, border: "4px solid black" }}>
      <Typography sx={{ position: "absolute", marginTop: "-3rem", px: 1 }} bgcolor="#fff" variant='h5' fontWeight={700}> Login</Typography>

      <form onSubmit={handleSubmit}>
        <Typography variant="h5">Email</Typography>
        <FormControl fullWidth sx={{ my: 1, px: 1, border: "4px solid black" }} variant="standard">
          <Input
            onChange={(e) => setEmail(e.target.value)}
            id="username" type='text' />
        </FormControl>

        <Typography variant="h5">Password</Typography>
        <FormControl fullWidth sx={{ my: 1, px: 1, border: "4px solid black" }} variant="standard">
          <Input
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type={'password'}
          />
        </FormControl>

        <Button sx={{
          my: 1,
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: 0,
          border: "4px solid black",
          ":hover": {
            border: "4px solid black",
            bgcolor: "lightblue",
            color: "darkblue"
          }
        }} fullWidth variant="outlined">Login</Button>

        {error && (
          <Box textAlign="center" width="12rem" sx={{ bgcolor: "red" }}>{error}</Box>
        )}
      </form>
    </Box>


  )
}

export default LoginFrom