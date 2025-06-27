import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native"
import { flags } from "../data/flagsData"

// Obtenir les dimensions de l'écran
const { width: screenWidth, height: screenHeight } = Dimensions.get("window")

// Fonction pour mélanger un tableau
const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Fonction pour sélectionner 10 drapeaux aléatoires
const selectRandomFlags = (allFlags, count = 10) => {
  const shuffled = shuffleArray(allFlags)
  return shuffled.slice(0, Math.min(count, allFlags.length))
}

// Fonction pour vérifier si la réponse est correcte
const checkAnswer = (selectedAnswer, correctAnswer) => {
  return selectedAnswer === correctAnswer
}

// Fonction pour afficher le résultat
const showResult = (isCorrect, correctCountry, selectedAnswer) => {
  if (isCorrect) {
    Alert.alert(
      "Correct! 🎉",
      `Well done! This is the flag of ${correctCountry}`
    )
  } else {
    Alert.alert(
      "Wrong ❌",
      `Oops! This is the flag of ${correctCountry}, not ${selectedAnswer}`
    )
  }
}

// Fonction pour obtenir le drapeau actuel de manière sécurisée
const getCurrentFlag = (gameFlags, index) => {
  if (!gameFlags || gameFlags.length === 0 || index >= gameFlags.length) {
    return null
  }
  return gameFlags[index]
}

const GamePage = ({ onGameFinish, onBackToWelcome }) => {
  const [gameFlags, setGameFlags] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResults, setShowResults] = useState(false)

  // Initialiser une nouvelle partie
  const startNewGame = () => {
    const newGameFlags = selectRandomFlags(flags, 10)
    setGameFlags(newGameFlags)
    setCurrentIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResults(false)
  }

  // Démarrer le jeu au chargement
  useEffect(() => {
    startNewGame()
  }, [])

  const currentFlag = getCurrentFlag(gameFlags, currentIndex)

  // Vérification de sécurité
  if (!currentFlag) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
        <View style={styles.backgroundDecoration}>
          <View style={styles.circle1} />
          <View style={styles.circle2} />
        </View>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>🌍 Loading...</Text>
        </View>
      </SafeAreaView>
    )
  }

  const handleAnswer = (answer) => {
    // Afficher immédiatement la coloration
    setSelectedAnswer(answer)
    setShowResults(true)

    const isCorrect = checkAnswer(answer, currentFlag.country)
    const newScore = isCorrect ? score + 1 : score
    setScore(newScore)

    // Délai pour voir la coloration avant de passer à la question suivante
    setTimeout(() => {
      showResult(isCorrect, currentFlag.country, answer)

      // Vérifier si c'est la dernière question
      if (currentIndex + 1 >= gameFlags.length) {
        onGameFinish(newScore)
      } else {
        // Passer au drapeau suivant
        setCurrentIndex(currentIndex + 1)
        setSelectedAnswer(null)
        setShowResults(false)
      }
    }, 1000)
  }

  // Fonction pour obtenir la couleur du bouton
  const getButtonStyle = (option) => {
    if (!showResults) {
      return styles.button
    }

    if (option === currentFlag.country) {
      return [styles.button, styles.correctButton]
    } else if (option === selectedAnswer) {
      return [styles.button, styles.wrongButton]
    } else {
      return [styles.button, styles.neutralButton]
    }
  }

  // Fonction pour rendre les boutons d'options
  const renderOptionButtons = (options) => {
    return options.map((option, index) => (
      <TouchableOpacity
        key={option}
        style={[styles.buttonContainer, getButtonStyle(option)]}
        onPress={() => handleAnswer(option)}
        disabled={showResults}
        activeOpacity={0.8}
      >
        <View style={styles.optionContent}>
          <Text style={styles.optionNumber}>
            {String.fromCharCode(65 + index)}
          </Text>
          <Text style={styles.buttonText} numberOfLines={2}>
            {option}
          </Text>
        </View>
      </TouchableOpacity>
    ))
  }

  // Fonction pour rendre l'image du drapeau
  const renderFlagImage = (imageUrl) => {
    return (
      <View style={styles.flagContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.flag}
          resizeMode="cover"
          onError={() => console.log("Erreur de chargement image:", imageUrl)}
        />
        <View style={styles.flagShadow} />
      </View>
    )
  }

  const progress = ((currentIndex + 1) / 10) * 100

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />

      <View style={styles.backgroundDecoration}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
        <View style={styles.circle3} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.gameHeader}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={onBackToWelcome}
            activeOpacity={0.8}
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>

          <View style={styles.headerStats}>
            <View style={styles.progressContainer}>
              <View style={styles.progressBackground}>
                <View style={[styles.progressBar, { width: `${progress}%` }]} />
              </View>
              <Text style={styles.progressText}>{currentIndex + 1}/10</Text>
            </View>

            <View style={styles.scoreContainer}>
              <Text style={styles.scoreLabel}>Score</Text>
              <Text style={styles.scoreValue}>{score}</Text>
            </View>
          </View>
        </View>

        <View style={styles.gameContent}>
          {renderFlagImage(currentFlag.image)}

          <View style={styles.questionContainer}>
            <Text style={styles.questionIcon}>🤔</Text>
            <Text style={styles.question}>
              What country does this flag belong to?
            </Text>
          </View>

          <View style={styles.optionsContainer}>
            {renderOptionButtons(currentFlag.options)}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    minHeight: screenHeight,
  },
  backgroundDecoration: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  circle1: {
    position: "absolute",
    width: screenWidth * 0.5,
    height: screenWidth * 0.5,
    borderRadius: screenWidth * 0.25,
    backgroundColor: "#3b82f6",
    opacity: 0.08,
    top: screenHeight * 0.1,
    left: -screenWidth * 0.15,
  },
  circle2: {
    position: "absolute",
    width: screenWidth * 0.4,
    height: screenWidth * 0.4,
    borderRadius: screenWidth * 0.2,
    backgroundColor: "#06b6d4",
    opacity: 0.1,
    bottom: screenHeight * 0.2,
    right: -screenWidth * 0.1,
  },
  circle3: {
    position: "absolute",
    width: screenWidth * 0.3,
    height: screenWidth * 0.3,
    borderRadius: screenWidth * 0.15,
    backgroundColor: "#8b5cf6",
    opacity: 0.06,
    top: screenHeight * 0.45,
    right: screenWidth * 0.05,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    marginHorizontal: 20,
    marginVertical: screenHeight * 0.2,
    borderRadius: 25,
  },
  loadingText: {
    fontSize: Math.min(24, screenWidth * 0.06),
    fontWeight: "700",
    color: "#0f172a",
    textAlign: "center",
  },
  gameHeader: {
    paddingTop: Platform.OS === "ios" ? 10 : 20,
    paddingHorizontal: Math.max(16, screenWidth * 0.04),
    paddingBottom: 15,
  },
  backButton: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  backButtonText: {
    color: "white",
    fontSize: Math.min(16, screenWidth * 0.04),
    fontWeight: "700",
  },
  headerStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressContainer: {
    flex: 1,
    marginRight: 15,
  },
  progressBackground: {
    height: 6,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 3,
    overflow: "hidden",
    marginBottom: 6,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#3b82f6",
    borderRadius: 3,
  },
  progressText: {
    color: "white",
    fontSize: Math.min(14, screenWidth * 0.035),
    fontWeight: "600",
    textAlign: "center",
  },
  scoreContainer: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    minWidth: 60,
  },
  scoreLabel: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: Math.min(11, screenWidth * 0.028),
    fontWeight: "600",
    marginBottom: 2,
  },
  scoreValue: {
    color: "white",
    fontSize: Math.min(18, screenWidth * 0.045),
    fontWeight: "900",
  },
  gameContent: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: Math.max(16, screenWidth * 0.04),
    paddingBottom: 20,
  },
  flagContainer: {
    position: "relative",
    marginBottom: 25,
    marginTop: 10,
  },
  flag: {
    width: Math.min(280, screenWidth * 0.8),
    height: Math.min(180, screenWidth * 0.52),
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.3)",
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
      },
      android: {
        elevation: 12,
      },
    }),
  },
  flagShadow: {
    position: "absolute",
    top: 6,
    left: 3,
    right: 3,
    bottom: -3,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 12,
    zIndex: -1,
  },
  questionContainer: {
    alignItems: "center",
    marginBottom: 30,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    width: "100%",
    maxWidth: 350,
  },
  questionIcon: {
    fontSize: Math.min(22, screenWidth * 0.055),
    marginBottom: 8,
  },
  question: {
    fontSize: Math.min(18, screenWidth * 0.045),
    textAlign: "center",
    color: "#0f172a",
    fontWeight: "700",
    lineHeight: Math.min(26, screenWidth * 0.065),
  },
  optionsContainer: {
    width: "100%",
    maxWidth: 350,
  },
  buttonContainer: {
    marginBottom: 10,
    borderRadius: 16,
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderWidth: 1.5,
    borderColor: "rgba(59, 130, 246, 0.3)",
  },
  correctButton: {
    backgroundColor: "#059669",
    borderColor: "#065f46",
  },
  wrongButton: {
    backgroundColor: "#dc2626",
    borderColor: "#991b1b",
  },
  neutralButton: {
    backgroundColor: "rgba(100, 116, 139, 0.8)",
    borderColor: "rgba(71, 85, 105, 0.5)",
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Math.max(14, screenHeight * 0.018),
    paddingHorizontal: 16,
    minHeight: 60,
  },
  optionNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "rgba(59, 130, 246, 0.15)",
    color: "#3b82f6",
    fontSize: Math.min(14, screenWidth * 0.035),
    fontWeight: "800",
    textAlign: "center",
    lineHeight: Platform.OS === "ios" ? 28 : 30,
    marginRight: 12,
    flexShrink: 0,
  },
  buttonText: {
    color: "#0f172a",
    fontSize: Math.min(16, screenWidth * 0.04),
    fontWeight: "600",
    flex: 1,
    textAlign: "left",
  },
})

export default GamePage
