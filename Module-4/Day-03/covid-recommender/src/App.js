import { useState } from 'react';
import YesNoRadioInput from './components/YesNoRadioInput';

function App() {
  const [answer, setAnswer] = useState(false);
  const handleChange = (e) => setAnswer(e.target.value === 'yes');
  return (
    <div className="App">
      <form>
        <YesNoRadioInput
          labelText="Have you tested postive for COVID-19?"
          name="self-test"
          handleChange={handleChange}
        />

        {answer ? (
          <YesNoRadioInput
            labelText="Do you have symptoms?"
            name="symptoms"
            handleChange={handleChange}
          />
        ) : (
          <YesNoRadioInput
            labelText="Have you come into close contact with someone who tested postive for COVID-19?"
            name="close-contact"
            handleChange={handleChange}
          />
        )}
      </form>
    </div>
  );
}

export default App;
// if (someCondition) {
//    foo
// } else {
//   bar
// }

// someCondition ? foo : bar
