import styled from 'styled-components'

export const Nav = styled.nav`
  width: 100%;
  height: 4rem;
  display: flex;
  padding: 1rem 3rem;
  position: sticky;
  top: 0;
  z-index: 1;
  background: linear-gradient(to right top, #002505, #003d0d, #00560f, #00710c, #138c00) fixed;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -15px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 375px) {
    padding: 1rem;
  }
`
