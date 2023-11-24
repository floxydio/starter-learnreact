import React from "react" // Berfungsi untuk mengimport library React
import Button from "./components/Button"

export default function App() {
  const nilai = 5
  const nilaiB = 5
  const myName = "Dio"
  const templateH2 = <h2>Hello World dari H2</h2> // Berfungsi untuk membuat template HTML

  return (
    <div>
      <h1>Hello World</h1>
      {templateH2} {/* Berfungsi untuk memanggil template HTML */}
      {nilai + nilaiB} {/* Berfungsi untuk menjumlahkan nilai */}
      <p>My name is: {myName}</p> {/* Berfungsi untuk memanggil variabel */}
      <Button bColor={'red'} colorText={'white'} myText={'Click Me'} onFunction={() => { console.log("Test") }} /> {/* Berfungsi untuk memanggil komponen Button dengan props */}
    </div>
  )
}