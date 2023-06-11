import Circle from "./Circle";
import Circle2 from "./Circle2";
import Header from "./Header";
import Input from "./Input";
import { useState } from "react";


function App() {

  const [colorValue, setColorValue] = useState('');
  const [colorRandomValue, setColorRandomValue] = useState('');
  const [hexValue, setHexValue] = useState('');


  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; //24-bit hexadecimal color code
    setColorRandomValue(randomColor);
  };

  return (
    <div className="App">
      <Header />
      <Circle
        colorRandomValue={colorRandomValue}
        setColorRandomValue={setColorRandomValue}
        generateRandomColor={generateRandomColor}
      />
      <Circle2
        colorValue={colorValue}
        setColorValue={setColorValue}
        colorRandomValue={colorRandomValue}
        generateRandomColor={generateRandomColor}
        hexValue={hexValue}

      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
      />
      <footer> {"@tanggoma"}</footer>
    </div>
  );
}

export default App;
