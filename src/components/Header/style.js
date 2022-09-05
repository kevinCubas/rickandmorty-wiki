import styled from 'styled-components'

export const Nav = styled.nav`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -15px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  img {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 375px) {
    padding: 1rem;
  }
`
