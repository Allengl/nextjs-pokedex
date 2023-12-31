'use client'
import usePokemon from '@/hooks/usePokemon'
import Link from 'next/link'
import React from 'react'
import styles from '@/styles/PokemonEntry.module.css';
import { Spinner } from 'react-bootstrap';
import Image from 'next/image'
import loaderProp from '@/lib/utils'


const PokemonEntry = ({ name }: { name: string }) => {
  const { pokemon, pokemonLoading } = usePokemon(name)

  return (
    <Link href={"/" + name}>
      <div className={styles.entry}>
        {pokemonLoading && <Spinner animation="grow" />}
        {pokemon &&
          <div className={styles.card}>
            <h1 className='text-center text-capitalize'>
              {pokemon.name}
            </h1>
            <Image
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={"Pkemoon：" + pokemon.name}
              width={200}
              height={200}
              loader={loaderProp}
            />
          </div>
        }
      </div>
    </Link>
  )
}

export default PokemonEntry
