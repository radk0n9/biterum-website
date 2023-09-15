import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Biterum",
  description: "Oficjalna strona Biterum w Poznaniu",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={poppins.className}>
      <body className="antialiased">
        <Navbar />
        <main className="max-w-6xl mx-auto my-0 mt-8 md:mb-32 mb-20 px-2 md:px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
