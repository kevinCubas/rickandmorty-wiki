import { Link } from "react-router-dom"
import { Error, MainErrorPage, Text } from "./style"

export const NotFoundComponent = () => {
  return (
    <MainErrorPage>
      <Error>404</Error>
      <h2>Page Not Found</h2>
      <Text>
        <p>Oops... you seems lost!</p>
        <p>There's a lesson here, and I'm not going to be the one to figure it out.</p>
        <p>Just click the Button to be redirected.</p>
      </Text>
      <Link to="/"><button>Go back</button></Link>
    </MainErrorPage>
  )
}