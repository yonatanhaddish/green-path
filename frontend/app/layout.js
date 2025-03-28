import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";

export const metadata = {
  title: "Green Path",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="root-body">
        <NavBar />
        <Box sx={{ backgroundColor: "#F5F5F5", height: "100%" }}>
          {children}
        </Box>
        <Footer />
      </body>
    </html>
  );
}
