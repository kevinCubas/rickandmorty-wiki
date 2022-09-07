import { CharacterDetailCard, CharacterDetailInfo, LocationWrapper, StatusSpeciesWrapper } from "./style"

export const CharacterDetails = ({name, image, origin, gender, status, species, location}) => {
  return (
    <CharacterDetailCard>
    <div>
      <img src={image} alt={name + "Image"} />
    </div>
    <CharacterDetailInfo>
      <h2>
        {name}
      </h2>
      <StatusSpeciesWrapper theme={status}>
        <span className="status">{status}</span>
        <span className="species">{species}</span>
      </StatusSpeciesWrapper>
      <span>Gender: <span className="gender">{gender}</span></span>
      <LocationWrapper>
        <span className="origin">Origin: <br /><span className="location">{origin.name}</span></span>
        <span className="lastknown">Last known location: <br /><span className="location">{location.name}</span></span>
      </LocationWrapper>
    </CharacterDetailInfo>
  </CharacterDetailCard>
  )
}