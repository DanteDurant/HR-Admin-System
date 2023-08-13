"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, FormControl, Input, Stack, Typography } from "@mui/material";
import MainHeading from "./Heading";
import MenuNav from "./MenuNav";

export default function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [manager, setManager] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !surname || !telephone || !email || !manager || !status) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          surname,
          telephone,
          email,
          manager,
          status
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/employees");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <Box>
      <MainHeading />

      <Box display="flex" >

        <MenuNav />


        <Box pl={2} pt={1} mb={4} mr={30} width="100%">
          <Typography py={1} display="flex" variant='h4' fontWeight="500">
            Create / Edit Employee
          </Typography>

          <form>

            <Stack direction={"row"} justifyContent="space-between">
              <Typography mt={1.5} variant="h6">*Name</Typography>
              <FormControl sx={{ my: 1, border: "4px solid black", width: "25rem" }} variant="standard">
                <Input
                  onChange={(e) => setName(e.target.value)}
                  id="name" type='text' />
              </FormControl>
            </Stack>

            <Stack direction={"row"} justifyContent="space-between">
              <Typography mt={1.5} variant="h6">*Surname</Typography>
              <FormControl sx={{ my: 1, border: "4px solid black", width: "25rem" }} variant="standard">
                <Input
                  onChange={(e) => setSurname(e.target.value)}
                  id="surname" type='text' />
              </FormControl>
            </Stack>

            <Stack direction={"row"} justifyContent="space-between">
              <Typography mt={1.5} variant="h6">*Telephone Number</Typography>
              <FormControl sx={{ my: 1, border: "4px solid black", width: "25rem" }} variant="standard">
                <Input
                  onChange={(e) => setTelephone(e.target.value)}
                  id="telephone" type='number' />
              </FormControl>
            </Stack>

            <Stack direction={"row"} justifyContent="space-between">
              <Typography mt={1.5} variant="h6">*Email Address</Typography>
              <FormControl sx={{ my: 1, border: "4px solid black", width: "25rem" }} variant="standard">
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email" type='text' />
              </FormControl>
            </Stack>

            <Stack direction={"row"} justifyContent="space-between">
              <Typography mt={1.5} variant="h6">*Manager</Typography>
              <FormControl sx={{ my: 1, border: "4px solid black", width: "25rem" }} variant="standard">
                <Input
                  onChange={(e) => setManager(e.target.value)}
                  id="manager" type='text' />
              </FormControl>
            </Stack>

            <Stack direction={"row"} justifyContent="space-between">
              <Typography mt={1.5} variant="h6">*Status</Typography>
              <FormControl sx={{ my: 1, border: "4px solid black", width: "25rem" }} variant="standard">
                <Input
                  onChange={(e) => setStatus(e.target.value)}
                  id="status" type='text' />
              </FormControl>
            </Stack>

            <Button onClick={handleSubmit} sx={{
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
            }} variant="outlined">Save</Button>
            {/* <Button sx={{
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
            }} variant="outlined">cancel</Button> */}

            {error && (
              <Box textAlign="center" width="12rem" sx={{ bgcolor: "red" }}>{error}</Box>
            )}
          </form>

        </Box>
      </Box>
    </Box>
  );
}

