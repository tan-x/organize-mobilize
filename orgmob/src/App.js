import React from 'react';

import Header from './components/Header'
import Category from './components/Category'
import Link from './components/Link'
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind()
  }

  handleClick() {
    return (
      <Link title="ACLU" link="www.aclu.org"/>
    )
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Category title="Volunteer" onClick={this.handleClick} />
          <Category title="Donate" />
          <Category title="Petition" />
        </main>
      </div>
    );
  }
}

export default App;
