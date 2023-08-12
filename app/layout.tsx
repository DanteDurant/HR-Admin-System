import ThemeRegistry from "@/theme/ThemeRegistry";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "./Providers";
import { Container } from "@mui/material";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={inter.className}>

          <Container sx={{ pt: 2, height: "100vh" }}>
            {/* <AuthProvider> */}
            {children}
            {/* </AuthProvider> */}
          </Container>
        </body>
      </ThemeRegistry>
    </html>
  );
}