import { CORE_CONCEPTS , EXAMPLES} from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import {useState} from 'react'






function App() {
  
  let [selectedTopic, setSelectedTopic] = useState("components")
  function handleSelect(selectedButton) {
    // console.log(selectedButton)

    setSelectedTopic(selectedButton)
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
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>

        </section>
          
      </main>
    </div>
  );
}

export default App;
