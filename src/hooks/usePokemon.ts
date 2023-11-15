'use client'
import useSWR from 'swr'
import * as PokemonApi from '@/network/pokemon-api'
import { AxiosError } from 'axios'


const usePokemon = (name: string) => {

  const { data, isLoading } = useSWR(name, async () => {
    try {
      return await PokemonApi.getPokemon(name)
    } catch (error) {
      if(error instanceof AxiosError && error.response?.status === 404) {
        return null
      }
    }
  })

  return {
    pokemon: data,
    pokemonLoading: isLoading
  }
}

export default usePokemon
