import React from 'react'
import './App.scss'
import { Game } from './views'

function App(): JSX.Element {
  return (
    <div className="app">
      <header className="header bg-maroon orange">
        <span className="icon-scissors orange" />
        <p>Rock-paper-scissors</p>
      </header>
      <section className="content">
        <Game />
      </section>
      <footer className="footer bg-silver">
        <p>
          Rock-paper-scissors, created by{' '}
          <a href="https://github.com/adrserr">adrserr</a>
        </p>
      </footer>
    </div>
  )
}

export default App
