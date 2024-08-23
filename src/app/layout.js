import { Banner } from './components/Banner'
import { Nav } from './components/Nav'
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profolios",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner />
        <Nav />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
