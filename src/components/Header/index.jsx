import { Nav} from "./style";
import {Link} from "react-router-dom"

export const NavigationHeader = () => {
  return (
    <Nav>
      <Link to={"/"}><img src="/iconrickandmorty.png" alt="Rick and Morty"/></Link>
    </Nav>
  )
}