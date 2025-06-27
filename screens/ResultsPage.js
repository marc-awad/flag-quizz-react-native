import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const ResultsPage = ({ score, onPlayAgain, onBackToWelcome }) => {
  const percentage = Math.round((score / 10) * 100)
  let message = ""
  let emoji = ""
  let scoreColor = ""

  if (percentage >= 90) {
    message = "Outstanding! You're a geography master!"
    emoji = "🏆"
    scoreColor = "#059669"
  } else if (percentage >= 70) {
    message = "Great job! You know your flags well!"
    emoji = "🌟"
    scoreColor = "#0891b2"
  } else if (percentage >= 50) {
    message = "Good effort! Keep exploring the world!"
    emoji = "👍"
    scoreColor = "#ca8a04"
  } else {
    message = "Keep practicing! Every expert was once a beginner!"
    emoji = "💪"
    scoreColor = "#dc2626"
  }

  return (
    <View style={styles.container}>
      <View style={styles.backgroundDecoration}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
        <View style={styles.circle3} />
        <View style={styles.circle4} />
      </View>

      <View style={styles.gameOverContainer}>
        <View style={styles.emojiContainer}>
          <Text style={styles.bigEmoji}>{emoji}</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.gameOverTitle}>🎯 Challenge Complete!</Text>
          <View style={styles.titleUnderline} />
        </View>

        <View style={styles.scoreContainer}>
          <Text style={styles.scoreLabel}>Your Score</Text>
          <View style={styles.scoreCircle}>
            <Text style={[styles.finalScore, { color: scoreColor }]}>
              {score}
            </Text>
            <Text style={styles.scoreDivider}>/</Text>
            <Text style={styles.totalScore}>10</Text>
          </View>
          <Text style={[styles.percentage, { color: scoreColor }]}>
            {percentage}%
          </Text>
        </View>

        <View style={styles.messageContainer}>
          <Text style={styles.message}>{message}</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.playAgainButton}
            onPress={onPlayAgain}
          >
            <View style={styles.buttonGradient}>
              <Text style={styles.playAgainText}>🎮 Play Again</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.homeButton} onPress={onBackToWelcome}>
            <Text style={styles.homeButtonText}>🏠 Back to Home</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>Thanks for playing! 🌍</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#0f172a",
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
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#059669",
    opacity: 0.1,
    top: 80,
    left: -40,
  },
  circle2: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#7c3aed",
    opacity: 0.08,
    bottom: 120,
    right: -20,
  },
  circle3: {
    position: "absolute",
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#06b6d4",
    opacity: 0.12,
    top: "40%",
    right: 30,
  },
  circle4: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#f59e0b",
    opacity: 0.06,
    bottom: "60%",
    left: 10,
  },
  gameOverContainer: {
    alignItems: "center",
    padding: 40,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 25,
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    maxWidth: 400,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
  },
  emojiContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "rgba(59, 130, 246, 0.2)",
  },
  bigEmoji: {
    fontSize: 40,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  gameOverTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#0f172a",
    textAlign: "center",
    letterSpacing: -1,
    marginBottom: 8,
  },
  titleUnderline: {
    width: 80,
    height: 4,
    backgroundColor: "#3b82f6",
    borderRadius: 2,
  },
  scoreContainer: {
    alignItems: "center",
    marginBottom: 30,
    padding: 25,
    backgroundColor: "rgba(59, 130, 246, 0.05)",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "rgba(59, 130, 246, 0.1)",
  },
  scoreLabel: {
    fontSize: 16,
    color: "#64748b",
    fontWeight: "600",
    marginBottom: 15,
    letterSpacing: 1,
  },
  scoreCircle: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
    marginBottom: 10,
  },
  finalScore: {
    fontSize: 48,
    fontWeight: "900",
    letterSpacing: -2,
  },
  scoreDivider: {
    fontSize: 32,
    color: "#94a3b8",
    fontWeight: "300",
    marginHorizontal: 5,
  },
  totalScore: {
    fontSize: 32,
    color: "#94a3b8",
    fontWeight: "600",
  },
  percentage: {
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 1,
  },
  messageContainer: {
    padding: 20,
    backgroundColor: "rgba(248, 250, 252, 0.8)",
    borderRadius: 15,
    marginBottom: 35,
    borderLeftWidth: 4,
    borderLeftColor: "#3b82f6",
  },
  message: {
    fontSize: 18,
    color: "#475569",
    textAlign: "center",
    fontWeight: "600",
    lineHeight: 26,
  },
  buttonsContainer: {
    alignItems: "center",
    gap: 15,
    marginBottom: 20,
  },
  playAgainButton: {
    borderRadius: 35,
    elevation: 8,
    shadowColor: "#3b82f6",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  buttonGradient: {
    backgroundColor: "#3b82f6",
    paddingVertical: 18,
    paddingHorizontal: 45,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  playAgainText: {
    color: "white",
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 0.5,
    textAlign: "center",
  },
  homeButton: {
    backgroundColor: "rgba(100, 116, 139, 0.1)",
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "rgba(100, 116, 139, 0.2)",
  },
  homeButtonText: {
    color: "#64748b",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  footerText: {
    fontSize: 14,
    color: "#94a3b8",
    fontWeight: "600",
    fontStyle: "italic",
  },
})

export default ResultsPage
