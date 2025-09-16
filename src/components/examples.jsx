import { useState } from "react"
import { EXAMPLES } from "../data.js"
import TabButton from "./TabButton.jsx"
import Section from "./Section.jsx"
export default function Examples(){
    
      let [selectedTopic, setSelectedTopic] = useState()
      function handleSelect(selectedButton) {
        // console.log(selectedButton)
    
        setSelectedTopic(selectedButton)
      }
    return(
        
        <Section title="Examples" id="Examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() =>handleSelect('components')} label="Components"></TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() =>handleSelect('jsx')} label="JSX"></TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() =>handleSelect('props')} label="Props"></TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() =>handleSelect('state')} label="State"></TabButton>
          </menu>
          
            {!selectedTopic ? <p>Wybierz</p> : null}  {/*!selectedTopic - sprawdza czy warunek jest fałszywy, jeśli jest prawdziwy */}
            {selectedTopic ? <div id="tab-content"> {/* to pokazuje wybierz, jeżeli fałszywy zwraca :null */}
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
            : null}
          
        
          </Section>
    )
}

