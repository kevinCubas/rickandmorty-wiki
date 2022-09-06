import { memo } from "react";
import { CharacterInfo, CharacterName, CharacterStatus, CharacterWrapper, ImageContainer } from "./style";

const CharacterCardComponent = (props) => {
  const { id, image, name, status } = props;
  return (
    <CharacterWrapper key={id}>
      <ImageContainer>
        <img src={image} alt={name + "Image"} />
      </ImageContainer>
      <CharacterInfo>
        <CharacterName>{name}</CharacterName>
        <CharacterStatus theme={status}>{status}</CharacterStatus>
      </CharacterInfo>
    </CharacterWrapper >
  )
}

export const CharacterCard = memo(CharacterCardComponent)