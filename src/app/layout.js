import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Classroom",
  description: "Welcome to your personalized online classroom! Similar to Google Classroom & D2L Brightspace!",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
