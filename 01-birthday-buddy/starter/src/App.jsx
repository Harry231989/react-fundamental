import { useState } from "react";
import data from "./data"
import List from "./List";

const App = () => {
 const [people, setPeople] = useState(data);

 const handleBtn = () => {
  setPeople([])
 }

 const resetBtn = () => {
  setPeople(data)
 }

  return (
    <main>
      <section className='container'>
        <h3> {people.length} birthdays today </h3>
        <List people={people} />
        <button onClick={handleBtn}  type="button" className="btn btn-block">Clear Button</button>
        <button onClick={resetBtn}>Reset Btn</button>
      </section>
    </main>
  );
  
  
};
export default App;
