import styled from 'styled-components'

export const Nav = styled.nav`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  padding: 1rem 3rem;
  position: sticky;
  top: 0;
  z-index: 1;
  background: linear-gradient(to right, #010e00, #152c15, #234b22, #336d2e, #459039) fixed;
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
