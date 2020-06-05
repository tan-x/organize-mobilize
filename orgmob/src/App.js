import React from 'react';

import Header from './components/Header'
import Category from './components/Category'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Category category="Volunteer" />
        <Category category="Donate" />
        <Category category="Petition" />
      </main>
    </div>
  );
}

export default App;
