import type { Metadata, ResolvingMetadata } from 'next'
import { Anton } from 'next/font/google'
import './globals.css'
import { Container } from 'react-bootstrap'
import * as PokemonApi from '@/network/pokemon-api'


const inter = Anton({ subsets: ['latin'], weight: ["400"] })

export const metadata: Metadata = {
  title: 'NextJS PokéDex',
  description: 'NextJS PokéDex app by Allengl',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container className='py-4'>
          {children}
        </Container>
      </body>
    </html >
  )
}
