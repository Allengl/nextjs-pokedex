import { Pokemon, PokemonPage } from '@/models/Pokemon';
import api from './axiosInstance';

export async function getPokemon(name: string) {
  const delay = Math.random() * 2000
  await new Promise(resolve => setTimeout(resolve, delay))
  const response = await api.get<Pokemon>(`/pokemon/${name}`);
  return response.data;
}

export async function getPokemonPage(page: number) {
  const pageSize = 12;
  const response = await api.get<PokemonPage>(`/pokemon`, {
    params: {
      offset: (page - 1) * pageSize,
      limit: pageSize,
    },
  });
  return response.data;
}
