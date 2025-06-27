import React, { useState } from "react"
import WelcomePage from "./screens/WelcomePage"
import GamePage from "./screens/GamePage"
import ResultsPage from "./screens/ResultsPage"

export default function App() {
  const [currentPage, setCurrentPage] = useState("welcome") // 'welcome', 'game', 'results'
  const [finalScore, setFinalScore] = useState(0)

  // Navigation vers la page de jeu
  const handleStartGame = () => {
    setCurrentPage("game")
  }

  // Navigation vers la page de résultats avec le score final
  const handleGameFinish = (score) => {
    setFinalScore(score)
    setCurrentPage("results")
  }

  // Navigation pour rejouer (retour à la page de jeu)
  const handlePlayAgain = () => {
    setCurrentPage("game")
  }

  // Navigation de retour à la page d'accueil
  const handleBackToWelcome = () => {
    setCurrentPage("welcome")
  }

  // Rendu conditionnel selon la page active
  switch (currentPage) {
    case "welcome":
      return <WelcomePage onStartGame={handleStartGame} />

    case "game":
      return (
        <GamePage
          onGameFinish={handleGameFinish}
          onBackToWelcome={handleBackToWelcome}
        />
      )

    case "results":
      return (
        <ResultsPage
          score={finalScore}
          onPlayAgain={handlePlayAgain}
          onBackToWelcome={handleBackToWelcome}
        />
      )

    default:
      return <WelcomePage onStartGame={handleStartGame} />
  }
}
