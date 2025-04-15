
import { useState } from 'react'
import './App.css'

function App() {
  const [letters, setLetters] = useState([])
  const [inputLetter, setInputLetter] = useState('')
  const [error, setError] = useState('')

  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase()
   
    const singleLetter = value.length > 0 ? value[0] : ''
    setInputLetter(singleLetter)
    setError('')
  }
  const addLetter = () => {
  
    if (!inputLetter) {
      setError('Veuillez saisir une lettre.')
      return
    }

    if (!/^[A-Z]$/.test(inputLetter)) {
      setError('Veuillez saisir une lettre majuscule uniquement.')
      return
    }
   
    if (letters.includes(inputLetter)) {
      setError(`La lettre "${inputLetter}" est déjà dans la liste.`)
      return
    }
    setLetters([...letters, inputLetter])
    setInputLetter('')
    setError('')
  }

  const shuffleLetters = () => {
    const shuffled = [...letters]
    
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    setLetters(shuffled)
  }

  return (
    <div className="app-container">
      <h1>Gestionnaire de Lettres</h1>
      
      <div className="input-container">
        <input
          type="text"
          value={inputLetter}
          onChange={handleInputChange}
          placeholder="Entrez une lettre"
          maxLength={1}
          className="letter-input"
        />
        
        <button 
          onClick={addLetter} 
          disabled={!inputLetter}
          className="action-button"
        >
          Ajouter la lettre
        </button>
        
        <button 
          onClick={shuffleLetters} 
          disabled={letters.length <= 1}
          className="action-button shuffle-button"
        >
          Mélanger les lettres
        </button>
      </div>
      
      {error && <p className="error-message">{error}</p>}
      
      <div className="letters-display">
        <h2>Liste des lettres:</h2>
        {letters.length === 0 ? (
          <p className="empty-message">Aucune lettre ajoutée</p>
        ) : (
          <ul className="letters-list">
            {letters.map((letter, index) => (
              <li key={index} className="letter-item">{letter}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App