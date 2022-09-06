import { allCharactersID } from "../../allCharactersID"
import { useFetch } from "../../hooks/useFetch"
import { CharacterCard } from "../CharacterCard"
import { SearchInput } from "../SearchInput"
import { Container, DisplayCardsContainer, SearchFieldsContainer } from "./style"

// LOOPS AFFECTING PERFORMANCE | Loops afetando performance
// Created an array with all ID | Criei um array com todos ID | 

// const allCharactersID = []
// let counter = 1

// while (allCharacterID.length < 826) {
//   allCharacterID.push(counter)
//   counter++
//   console.log("renderizei")
// }
// function addCharactersID() {
//   for (let i = 1; i <= 826; i++) {
//     allCharactersID.push(i)
//     console.log("entrei no loop")
//   }
// }

// addCharactersID()

export const CharacterContainer = () => {
  const { allCharacters, isLoading, errorMessage } = useFetch(allCharactersID)
  const { renderInput, searchName } = SearchInput()

  const filteredCharacters = searchName.length > 2 ? allCharacters.filter((character)=> {
    return character.name.toLowerCase().includes(searchName.toLowerCase())
  }) : allCharacters;

  return (
    <Container>
      {isLoading && <h1 style={{ display: "flex", justifyContent: "center" }}>Loading...</h1>}
      {errorMessage && <h2>{errorMessage}</h2>}
      {!isLoading &&
        <>
          <SearchFieldsContainer>
            {renderInput}
          </SearchFieldsContainer>
          <DisplayCardsContainer>
            {filteredCharacters?.map((character) => {
              const { id, image, name, status } = character;
              return <CharacterCard key={id} id={id} image={image} name={name} status={status} />
            })
            }
          </DisplayCardsContainer>
        </>
      }
    </Container>
  )
}