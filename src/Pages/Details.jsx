import { useParams } from "react-router-dom"
import { CharacterDetails } from "../components/CharacterDetails"
import { MainDetailContainer } from "../components/CharacterDetails/style"
import { useFetch } from "../hooks/useFetch"

export const Details = () => {
  const {id} = useParams()
  const { apiDataResponse, isLoading, errorMessage } = useFetch(id)
  const { name, image, origin, species, gender, status, location } = apiDataResponse;

  return (
    <MainDetailContainer>
      {isLoading && <h1 style={{ display: "flex", justifyContent: "center" }}>Loading...</h1> }
      {!isLoading && 
      <CharacterDetails 
        name={name} 
        image={image} 
        origin={origin} 
        gender={gender} 
        status={status} 
        location={location}
        species={species} />}
    </MainDetailContainer>
    )
}