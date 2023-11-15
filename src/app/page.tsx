'use client'
import PokemonEntry from "@/components/PokemonEntry";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import useSWR from "swr";
import * as PokemonApi from "@/network/pokemon-api"
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useCallback } from "react";

export default function Home() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()


  const page = parseInt((searchParams.get('page') ?? 1).toString())

  const { data, isLoading } = useSWR(["getPokemonPage", page], ([key, page]) => PokemonApi.getPokemonPage(page))


  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )


  if (isLoading) return <Spinner animation="border" className="d-block m-auto" />

  return (
    <div>
      <h1 className="text-center mb-4">
        Gotta cache &apos;em all
      </h1>
      <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
        {data?.results.map(pokemonEntry => (
          <Col key={PokemonEntry.name}>
            <PokemonEntry name={pokemonEntry.name} />
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center gap-2 mt-4">
        {data?.previous &&
          <Button onClick={() => {
            router.push(pathname + '?' + createQueryString('page', (page - 1).toString()))
          }}>
            Previous page
          </Button>
        }
        {data?.next &&
          <Button onClick={() => {
            router.push(pathname + '?' + createQueryString('page', (page + 1).toString()))
          }}>
            Next page
          </Button>
        }
      </div>
    </div>
  )
}
