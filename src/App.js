import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

// This week:
// 1. Fake the db and the db call for now.
// Focus on what the data looks like and setting up the redux store for the app.
//  * keep in mind what it should look like for real db.
// 2. Work on the UI / Routing (pages)

// Weekend or following week
// 3. Connect to real database
// 4. Setup authentication.
// 5. deploy app (should be free).
// 6. need to keep track of app to maintain it unlike prev. projects.
import Home from './containers/Home';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
