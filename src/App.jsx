import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [numbers, setNumbers] = useState([])

  const addRandomNumbers = () => {
    const countToAdd = Math.floor(Math.random() * 10) + 1
    const newNumbers = []
    for (let i = 0; i < countToAdd; i++) {
      const randomNumber = Math.floor(Math.random() * 100) + 1
      newNumbers.push(randomNumber)
    }
    setNumbers([...numbers, ...newNumbers])
  }

  const shuffleNumbers = () => {
    const shuffled = [...numbers]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    setNumbers(shuffled)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
       
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className="app-container">
        <h1>Générateur de nombres aléatoires</h1>
        <div className="button-container">
          <button onClick={addRandomNumbers} className="action-button">
            Ajouter 1 à 10 nombres aléatoires
          </button>
          <button
            onClick={shuffleNumbers}
            className="action-button shuffle-button"
            disabled={numbers.length <= 1}
          >
            Mélanger la liste
          </button>
        </div>
        <div className="numbers-display">
          <h2>Liste des nombres ({numbers.length}):</h2>
          {numbers.length === 0 ? (
            <p className="empty-message">Aucun nombre ajouté</p>
          ) : (
            <ul className="numbers-list">
              {numbers.map((number, index) => (
                <li key={index} className="number-item">{number}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default App