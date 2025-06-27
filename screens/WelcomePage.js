import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const WelcomePage = ({ onStartGame }) => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundDecoration}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
        <View style={styles.circle3} />
      </View>

      <View style={styles.welcomeContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.welcomeTitle}>🏁 Flag Quiz Game</Text>
          <View style={styles.titleUnderline} />
        </View>

        <Text style={styles.welcomeSubtitle}>
          Test your knowledge of world flags and become a geography master!
        </Text>

        <View style={styles.rulesContainer}>
          <Text style={styles.rulesTitle}>✨ How to play</Text>

          <View style={styles.ruleItem}>
            <View style={styles.ruleIconContainer}>
              <Text style={styles.ruleIcon}>🏴</Text>
            </View>
            <Text style={styles.rulesText}>
              You will see 10 random flags from around the world
            </Text>
          </View>

          <View style={styles.ruleItem}>
            <View style={styles.ruleIconContainer}>
              <Text style={styles.ruleIcon}>🌍</Text>
            </View>
            <Text style={styles.rulesText}>
              Choose the correct country for each flag
            </Text>
          </View>

          <View style={styles.ruleItem}>
            <View style={styles.ruleIconContainer}>
              <Text style={styles.ruleIcon}>🏆</Text>
            </View>
            <Text style={styles.rulesText}>
              Try to get the perfect score and challenge yourself!
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.startButton} onPress={onStartGame}>
          <View style={styles.buttonGradient}>
            <Text style={styles.startButtonText}>🚀 Start Your Journey</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.footerText}>Good luck, explorer! 🌟</Text>
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
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#1e40af",
    opacity: 0.1,
    top: 50,
    left: -50,
  },
  circle2: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#7c3aed",
    opacity: 0.08,
    bottom: 100,
    right: -30,
  },
  circle3: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#06b6d4",
    opacity: 0.12,
    top: "50%",
    right: 20,
  },
  welcomeContainer: {
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
  titleContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  welcomeTitle: {
    fontSize: 36,
    fontWeight: "900",
    color: "#0f172a",
    textAlign: "center",
    letterSpacing: -1,
    marginBottom: 8,
  },
  titleUnderline: {
    width: 60,
    height: 4,
    backgroundColor: "#3b82f6",
    borderRadius: 2,
  },
  welcomeSubtitle: {
    fontSize: 18,
    color: "#64748b",
    marginBottom: 40,
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 26,
    paddingHorizontal: 10,
  },
  rulesContainer: {
    alignSelf: "stretch",
    marginBottom: 40,
  },
  rulesTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1e293b",
    marginBottom: 25,
    textAlign: "center",
  },
  ruleItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 18,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "rgba(59, 130, 246, 0.05)",
    borderRadius: 15,
    borderLeftWidth: 3,
    borderLeftColor: "#3b82f6",
  },
  ruleIconContainer: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginTop: 2,
  },
  ruleIcon: {
    fontSize: 18,
  },
  rulesText: {
    fontSize: 16,
    color: "#475569",
    lineHeight: 24,
    flex: 1,
    fontWeight: "500",
  },
  startButton: {
    borderRadius: 35,
    elevation: 8,
    shadowColor: "#3b82f6",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    marginBottom: 20,
  },
  buttonGradient: {
    backgroundColor: "#3b82f6",
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  startButtonText: {
    color: "white",
    fontSize: 19,
    fontWeight: "800",
    letterSpacing: 0.5,
    textAlign: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#94a3b8",
    fontWeight: "600",
    fontStyle: "italic",
  },
})

export default WelcomePage
