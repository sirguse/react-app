import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import {useState} from 'react'






function App() {
  
  let [selectedTopic, setSelectedTopic] = useState("Wybierz mnie")
  function handleSelect(selectedButton) {
    // console.log(selectedButton)

    tabContent = selectedButton;
    console.log(tabContent);
  }
  return (
    <div>
      <main>
        <h2>Time to get started!</h2>
        <section id='core-concepts'>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() =>handleSelect('components')} label="Components"></TabButton>
            <TabButton onSelect={() =>handleSelect('jsx')} label="JSX"></TabButton>
            <TabButton onSelect={() =>handleSelect('props')} label="Props"></TabButton>
            <TabButton onSelect={() =>handleSelect('state')} label="State"></TabButton>
          </menu>
          {tabContent}

        </section>
          
      </main>
    </div>
  );
}

export default App;
