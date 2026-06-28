import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
  //title: "PineNest",
  title: {
    template: "%s / PineNest",
    default: "Welcome / PineNest",
  },
  description:
    "Luxurious cabin hotel nestled in the forested hills of the Dandenong Ranges, just outside Melbourne, Australia, surrounded by towering mountain ash and misty fern gullies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-gray-100 min-h-screen flex flex-col`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7x mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
        <footer>Copyright by PineNest</footer>
      </body>
    </html>
  );
}
