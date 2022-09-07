import styled from 'styled-components'
import Select from 'react-select'

export const SelectFiltered = styled(Select)`
  .Select__input-container {
    color: #fff;
  }

  .Select__single-value {
    color: #fff;
  }

  .Select__control {
    background-color: #000;
    width: 200px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 0.9rem;
    cursor: pointer;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    background-color: #000;
    color: #fff;
    border-radius: 5px;
  }

  .Select__placeholder {
    color: #fff;
  }

  .Select__option {
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: gray;
    }
  }

  .Select__placeholder {
    color: #fff;
  }
`