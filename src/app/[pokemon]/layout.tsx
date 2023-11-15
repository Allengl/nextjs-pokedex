
import { Metadata } from 'next';
import React from 'react'


type Props = {
  params: { pokemon: string }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const pokemonName = params.pokemon?.toString();
  if (!pokemonName) return { title: 'NextJS PokéDex' };
  return { title: `${pokemonName} - NextJS PokéDex` };
}


export default function pokemonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div >
  )
}
