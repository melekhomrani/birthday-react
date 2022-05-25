import React, { useState } from 'react';
import data from './data';
import pep from './people';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  console.log(people);
  console.log(setPeople);
  return <main>

    <section className="container">
      <h3> {people.length} birthdays today</h3>
      <List people = {people} />
      <button onClick={() => {
        return setPeople(
        people.filter(person => person.age > 30)
        );
      }}>People older than 30yo</button>
    </section>

  </main>
}

export default App;
