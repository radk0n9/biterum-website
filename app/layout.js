import './globals.css';
import Navbar from '@/components/navbar';

export const metadata = {
  title: 'Biterum',
  description: 'Oficjalna strona Biterum w Poznaniu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="antialiased">
        <Navbar/>
        <main className="">
          {children}
        </main>
      </body>
    </html>
  )
}
