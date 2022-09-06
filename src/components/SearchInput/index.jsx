import { useState } from "react";
import { InputContainer, InputSearch } from "./style";

export const SearchInput = () => {
  const [searchName, setSearchName] = useState("")

  return {
    searchName,
    renderInput:(
    <InputContainer>
      <i className="material-symbols-outlined">search</i>
      <InputSearch onChange={(e) => setSearchName(e.target.value)} value={searchName}/>
    </InputContainer>
  )}
}