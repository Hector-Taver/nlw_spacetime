import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as RobotoFlex,
} from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const robotoFlex = RobotoFlex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
})
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Cápsula do tempo',
  description: 'Cápsula do tempo para guardar memórias numa timeline.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
