import './globals.scss'
import { Inter } from 'next/font/google'
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PanomArt | Website',
  description: 'PanomArt Main Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <body className={inter.className}>
             <Header/>
                {children}
             <Footer/>   
          </body>

    </html>
  )
}