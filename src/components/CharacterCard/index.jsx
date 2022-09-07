import { memo } from "react";
import { Link } from "react-router-dom";
import { CharacterInfo, CharacterName, CharacterStatus, CharacterWrapper, ImageContainer } from "./style";

const CharacterCardComponent = (props) => {
  const { id, image, name, status } = props;
  return (
    <Link to={`/${id}`}>
      <CharacterWrapper key={id}>
        <ImageContainer>
          <img src={image} alt={name + "Image"} />
        </ImageContainer>
        <CharacterInfo>
          <CharacterName>{name}</CharacterName>
          <CharacterStatus theme={status}>{status}</CharacterStatus>
        </CharacterInfo>
      </CharacterWrapper >
    </Link>
  )
}

export const CharacterCard = memo(CharacterCardComponent)