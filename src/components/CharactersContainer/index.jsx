import { useEffect, useRef, useState } from "react"
import { CharacterCard } from "../CharacterCard"
import { SearchInput } from "../SearchInput"
import { Container, DisplayCardsContainer, SearchFieldsContainer } from "./style"

export const CharacterContainer = ({ allCharacters }) => {
  const [refElementIsVisible, setRefElementIsVisible] = useState()
  const [charactersCount, setCharactersCount] = useState(26)
  const { renderInput, searchName } = SearchInput();

  const referer = useRef()

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    setRefElementIsVisible(entry.isIntersecting)
  })

  const filteredCharacters = searchName.length >= 2 ? allCharacters.filter((character) => {
    return character.name.toLowerCase().includes(searchName.toLowerCase())
  }) : allCharacters;
  
  const charactersSliced = filteredCharacters.slice(0, charactersCount);
  
  useEffect(() => {
    observer.observe(referer.current)

    if (refElementIsVisible && charactersCount < filteredCharacters.length) {
      setCharactersCount(prev => prev + 20)
      console.log(charactersCount)
    }
  }, [refElementIsVisible])

  return (
    <Container>
      <SearchFieldsContainer>
        {renderInput}
      </SearchFieldsContainer>
      <DisplayCardsContainer>
        {charactersSliced?.map((character) => {
          const { id, image, name, status } = character;
          return <CharacterCard key={id} id={id} image={image} name={name} status={status} />
        })
        }
      </DisplayCardsContainer>
      <div id="referenceDiv" ref={referer}></div>
    </Container>
  )
}