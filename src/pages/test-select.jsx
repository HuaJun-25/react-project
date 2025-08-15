import Select from "react-select"
import { useState } from "react";


// function FruitSelect({ name = "selectedFruit", value, onChange }) {
//   return (
//     <select name={name} value={value} onChange={(e) => onChange(e.target.value)}>
//       <option value="" disabled>選擇</option>
//       <option value="apple">Apple</option>
//       <option value="banana">Banana</option>
//       <option value="orange">Orange</option>
//     </select>
//     );
// }

function MapMonth({ name = "selectedmonth", value, onChange }) {
  return (
    <select name={name} value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="" disabled>選擇</option>
      <option value="1月">1月</option>
      <option value="2月">2月</option>
      <option value="3月">3月</option>
      <option value="4月">4月</option>
      <option value="5月">5月</option>
      <option value="6月">6月</option>
      <option value="7月">7月</option>
      <option value="8月">8月</option>
      <option value="9月">9月</option>
      <option value="10月">10月</option>
      <option value="11月">11月</option>
      <option value="21月">12月</option>
    </select>
    );
}

function App() {
  const options = [
    { value: "apple", label: "Apple" },
    { value: "pineapple", label: "Pineapple" },
    { value: "watermelon", label: "Watermelon" },
  ]


//const [selectedFruit, setSelectedFruit] = useState("");
const [selectedmonth, setSelectedMonth] = useState("");

  return (
    <>
    <div>
      {/* <Select options={options} /> */}
    </div>
     {/* <FruitSelect value={selectedFruit} onChange={setSelectedFruit} /> */}
     <MapMonth value={selectedmonth} onChange={setSelectedMonth} />
    </>
  )
}

export default App