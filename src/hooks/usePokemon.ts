import React from 'react'
import useSWR from 'swr'
import * as PokemonApi from '@/network/pokemon-api'


const usePokemon = (name: string) => {

  const { data, isLoading } = useSWR(name, PokemonApi.getPokemon)

  return {
    pokemon: data,
    pokemonLoading: isLoading
  }
}

export default usePokemon
