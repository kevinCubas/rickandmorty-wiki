import styled from "styled-components";

export const MainDetailContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 4rem);
  overflow: hidden;
  background-image: url("/rick&morty.png");
  background-position: right;
  background-repeat: no-repeat;

  @media (max-width: 590px) { 
    background-size: cover;
    background-position: center;

  }
`

export const CharacterDetailCard = styled.div`
  display: flex;
  border-radius: 1em;
  overflow: hidden;
  background: rgba(225, 225, 225, .2);
  border: 1px solid rgba(225, 225, 225, 0.2);
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 590px) { 
    flex-direction: column;
    max-width: 300px;
  }
`

export const CharacterDetailInfo = styled.div `
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: .5rem;
  color: #001B2B;

  h2 {
    font-size: 2rem;
    color: #000;
  }

  .gender {
    color: #000;
    font-weight: 700;
  }
`

export const StatusSpeciesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  .status,
  .species {
    padding: .5em;
    font-weight: 700;
    border-radius: .5em;
  }

  .status {
    background-color: ${props => props.theme === "Alive" ? '#017522' : props.theme === "Dead" ? "#DE0000" : "#7a8288" };
    color: #fff;
  }

  .species {
    background-color: #B3B3B3;
    color: currentColor;
  }
`

export const LocationWrapper = styled.div`
  .origin,
  .lastknown {
    font-size: 1rem;
    color: #484848;
    display: block;
  }

  .location {
    color: #000;
    font-weight: 700;
    font-size: 1rem;
  }
`