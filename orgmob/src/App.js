import React from 'react';

import Header from './components/Header'
import Category from './components/Category'
import Link from './components/Link'
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      showCategory: true,
      showLinks: {
        volunteer: false,
        donate: false,
        petition: false
      }
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleBackClick = this.handleBackClick.bind(this)
  }

  handleClick(event) {
    let inputTitle = event.currentTarget.title;
    let statusCopy = Object.assign({}, this.state)
    statusCopy.showCategory = !this.state.showCategory
    statusCopy.showLinks[inputTitle] = !this.state.showLinks[inputTitle]
    this.setState(statusCopy)
  }

  handleBackClick() {
    let statusCopy = Object.assign({}, this.state)
    statusCopy.showCategory = !this.state.showCategory
    for (const prop in statusCopy.showLinks) {
      statusCopy.showLinks[prop] = false
    }
    this.setState(statusCopy)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          {this.state.showCategory &&
          <>
            <Category title="volunteer" text="Volunteer" onClick={this.handleClick} />
            <Category title="donate" text="Donate" onClick={this.handleClick} />
            <Category title="petition" text="Petition" onClick={this.handleClick}/>
          </>
          }
          
        </main>
        <main>
          {this.state.showLinks.volunteer && <Link title="ACLU" link="www.aclu.org"/>}
          {this.state.showLinks.donate && <Link title="Donate Now" link="www.aclu.org"/>}
          {this.state.showLinks.petition && <Link title="Sign Petition" link="www.aclu.org"/>}
          {!this.state.showCategory && <Link title="Back" onClick={this.handleBackClick}/>}
        </main>
      </div>
    )
  }
}

export default App;
