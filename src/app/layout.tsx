import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import { FitLogProvider } from "@/context/FitLogContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          <Navbar />

          {children}

          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            theme="dark"
          />
        </FitLogProvider>
      </body>
    </html>
  );
}