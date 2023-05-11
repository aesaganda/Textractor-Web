import { useState } from "react";
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

function LanguageSelector() {
    const [selectedOption, setSelectedOption] = useState("none");

    const handleTypeSelect = (e) => {
        setSelectedOption(e.value);
        console.log(selectedOption);
      };

  return (
    <>
      <Select
        options={options}
        onChange={handleTypeSelect}
        value={options.filter(function (option) {
          return option.value === selectedOption;
        })}
        label="Select Language"
      />
    </>
  )
}

export default LanguageSelector
