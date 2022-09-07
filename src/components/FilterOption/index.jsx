import { useState } from "react"
import { SelectFiltered } from "./style"

const options = [
  { value: 'Default', label: 'Default' },
  { value: 'By Name', label: 'By Name' },
  { value: 'Alive', label: 'Alive' },
  { value: 'Dead', label: 'Dead' },
  { value: 'unknown', label: 'unknown' }
]

export const FilterOption = () => {
  const [selectedFilter, setSelectedFilter] = useState("")
  return {
    selectedFilter,
    renderFilterOption: (
      <SelectFiltered classNamePrefix="Select" placeholder={"Filter Characters"} options={options} onChange={(e) => setSelectedFilter(e.value)} />
    )
  }
}