import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {Poppins} from "next/font/google";

export const metadata = {
  title: 'Biterum',
  description: 'Oficjalna strona Biterum w Poznaniu',
}

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
})

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={poppins.className}>
      <body className="antialiased">
        <Navbar/>
        <div className="max-w-6xl mx-4 mt-8 mb-40 flex flex-col md:flex-row lg:mx-auto">
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            {children} 
          </main>
        </div>
      <Footer/>
      </body>
    </html>
  )
}
