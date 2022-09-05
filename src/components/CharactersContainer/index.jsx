import { useFetch } from "../../hooks/useFetch"
import { CharacterCard } from "../CharacterCard"
import { Container, DisplayCardsContainer } from "./style"

const allCharacterID = []

let counter = 1

while (allCharacterID.length < 826) {
  allCharacterID.push(counter)
  counter++
}

export const CharacterContainer = () => {
  const { allCharacters, isLoading, errorMessage } = useFetch(allCharacterID)

  return (
    <Container>
      <DisplayCardsContainer>
        {isLoading && <h1 style={{ display: "flex", justifyContent: "center" }}>Loading...</h1>}
        {errorMessage && <h2>{errorMessage}</h2>}
        {!isLoading && allCharacters.map((character) => {
          const { id, image, name } = character;
          return <CharacterCard key={id} id={id} image={image} name={name} />
        })
        }
      </DisplayCardsContainer>
    </Container>
  )
}