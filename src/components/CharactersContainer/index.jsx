import { useEffect, useRef, useState } from "react"
import { CharacterCard } from "../CharacterCard"
import { FilterOption } from "../FilterOption"
import { SearchInput } from "../SearchInput"
import { Container, DisplayCardsContainer, SearchFieldsContainer } from "./style"

export const CharacterContainer = ({ allCharacters }) => {
  const [refElementIsVisible, setRefElementIsVisible] = useState()
  const [charactersCount, setCharactersCount] = useState(26)

  // Components and their states respectively | componentes e seus estados respectivamente
  const { renderInput, searchName } = SearchInput();
  const { renderFilterOption, selectedFilter } = FilterOption();

  const referer = useRef()

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    setRefElementIsVisible(entry.isIntersecting)
  })


  // Filter possibilities
  const sortedByName = allCharacters.slice(0).sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 :
      a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0
  });

  const charactersSorted = selectedFilter === "Default" ? allCharacters :
    selectedFilter === "By Name" ? sortedByName : allCharacters.filter((character) => {
      return character.status.includes(selectedFilter)
    });

  const filteredCharacters = searchName.length >= 2 ? charactersSorted.filter((character) => {
    return character.name.toLowerCase().includes(searchName.toLowerCase())
  }) : charactersSorted;

  const charactersSliced = filteredCharacters.slice(0, charactersCount);

  // Infinite scroll hook observer | hook para rolagem "infinita"
  useEffect(() => {
    observer.observe(referer.current)

    // show more characters | mostrar mais personagens
    if (refElementIsVisible && charactersCount < filteredCharacters.length) {
      setCharactersCount(prev => prev + 20)
    }
  }, [refElementIsVisible])

  return (
    <Container>
      <SearchFieldsContainer>
        {renderInput}
        {renderFilterOption}
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