import styled from 'styled-components'

export const Container = styled.section`
  padding: 0 3rem;
`

export const DisplayCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`

export const SearchFieldsContainer = styled.div`
  padding: 3rem 3.5rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`