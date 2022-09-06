import styled from "styled-components";

export const CharacterWrapper = styled.div`
  cursor: pointer;
  max-width: 250px;
  background: rgba(225, 225, 225, .2);
  border-radius: 1em;
  border: 1px solid rgba(225, 225, 225, 0.2);
  color: #fff;
  overflow: hidden;
  position: relative;
  font-family: sans-serif;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  
  @media (max-width: 580px) {
    width: 300px;
  }
  @media (max-width: 375px) {
    width: 200px;
    font-size: 12px;
  }
`

export const ImageContainer = styled.div`
 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CharacterStatus = styled.span`
  position: absolute;
  top: .5rem;
  right: .5rem;
  padding: .25em .4em;
  text-transform: capitalize;
  font-weight: 700;
  background-color: ${props => props.theme === "Alive" ? '#017522' : props.theme === "Dead" ? "#DE0000" : "#7a8288" };
  border-radius: .5em;
  color: #fff;
`

export const CharacterInfo = styled.div`
  padding: 1rem .5rem;
  text-align: center;
`

export const CharacterName = styled.h2`
  font-size: 1rem;
`
