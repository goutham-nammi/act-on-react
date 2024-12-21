import UserInput from "./components/UserInput"
import { useState } from "react"
import Header from "./components/Header";

function App() {

const [inputData, setInputData] = useState({investment: '', annualInvest: '', expReturn: '', duration: ''});

function handleInputData(inputName, inputValue) {
console.log('inputName: ' + inputName +'intputvalue: '+inputValue);
  setInputData((prevInputData) => {
    const copyPrevInputData = {... prevInputData}
    copyPrevInputData[inputName] = inputValue;
//Added comment here
    return copyPrevInputData;
  });
}

  return (
    <>    
      <Header/>
      <UserInput handleInputData={handleInputData} data={inputData}/>
    </>
  )
}

export default App
