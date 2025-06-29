# 🏁 Flag Quiz Game

An immersive and beautifully designed quiz game where users test their knowledge of world flags! Challenge yourself to become a geography master with this engaging mobile experience.

![Flag Quiz Game](https://img.shields.io/badge/React%20Native-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

### 🎮 Game Experience

- **Welcome Screen**: Engaging introduction with game rules and beautiful animations
- **10 Random Flags**: Each game session presents 10 carefully selected random flags
- **Multiple Choice**: Choose from 4 country options for each flag
- **Real-time Feedback**: Instant visual feedback with color-coded answers:
  - 🟢 **Green** for correct answers
  - 🔴 **Red** for wrong answers
  - ⚪ **Gray** for neutral options
- **Smart Scoring**: Track your progress with a comprehensive scoring system
- **Results Summary**: Detailed performance analysis at the end of each game

### 🎨 User Interface

- **Modern Design**: Sleek dark theme with glassmorphism effects
- **Responsive Layout**: Optimized for all screen sizes and orientations
- **Smooth Animations**: Fluid transitions and interactive elements
- **Progress Tracking**: Visual progress bar and question counter
- **Accessibility**: High contrast colors and readable typography

### 🏆 Performance Features

- **Motivational Messages**: Personalized feedback based on your score:
  - 90%+: "Outstanding! You're a geography master!" 🏆
  - 70%+: "Great job! You know your flags well!" 🌟
  - 50%+: "Good effort! Keep exploring the world!" 👍
  - <50%: "Keep practicing! Every expert was once a beginner!" 💪

## 🛠️ Technologies

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **JavaScript ES6+** - Modern JavaScript features
- **React Hooks** - State management (useState, useEffect)
- **StyleSheet API** - Advanced styling with responsive design
- **Platform-specific APIs** - iOS and Android optimizations

## 📱 App Structure

```
flag-quizz-react-native/
├── screens/
│   ├── WelcomePage.js     # Landing screen with game introduction
│   ├── GamePage.js        # Main game interface
│   └── ResultsPage.js     # Score summary and replay options
├── data/
│   └── flagsData.js       # Flag database with countries and options

```

## 🚀 Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/marc-awad/flag-quizz-react-native.git
   cd flag-quizz-react-native
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**:

   ```bash
   npx expo start
   ```

4. **Run on device**:
   - **iOS**: Press `i` in the terminal or scan QR code with Camera app
   - **Android**: Press `a` in the terminal or scan QR code with Expo Go app
   - **Web**: Press `w` to open in browser

## 🎯 How to Play

1. **Start**: Tap "🚀 Start Your Journey" on the welcome screen
2. **Identify**: Look at the flag displayed on screen
3. **Choose**: Select the correct country from 4 options (A, B, C, D)
4. **Learn**: Get instant feedback with the correct answer
5. **Progress**: Complete all 10 questions to see your final score
6. **Replay**: Challenge yourself to beat your previous score!

## 🎨 Design Highlights

- **Dark Theme**: Modern slate background (#0f172a) with subtle gradients
- **Glassmorphism**: Semi-transparent elements with backdrop blur effects
- **Interactive Elements**: Hover states and touch feedback
- **Floating Circles**: Animated background decorations for visual appeal
- **Typography**: Carefully chosen font weights and sizes for readability
- **Shadow Effects**: Depth and dimension with platform-specific shadows

## 📊 Game Mechanics

- **Random Selection**: Flags are shuffled using Fisher-Yates algorithm
- **Answer Validation**: Immediate comparison with correct country names
- **Score Calculation**: Points awarded only for correct answers
- **Progress Tracking**: Real-time updates of current question and score
- **Results Analysis**: Percentage calculation and performance categorization

## 🌟 Key Components

### WelcomePage

- Animated introduction screen
- Game rules explanation
- Call-to-action button with engaging design

### GamePage

- Flag display with high-quality images
- Multiple choice interface
- Progress indicators and scoring
- Navigation controls

### ResultsPage

- Score presentation with visual hierarchy
- Performance-based messaging
- Replay and navigation options

## 🔧 Customization

The app is designed to be easily customizable:

- **Flag Database**: Add new flags in `flagsData.js`
- **Styling**: Modify colors and layouts in component StyleSheets
- **Game Logic**: Adjust scoring and question count in game functions
- **Messages**: Update feedback messages for different score ranges

## 🎯 Learning Outcomes

Perfect for:

- **Geography Education**: Learn world flags and countries
- **Memory Training**: Improve visual recognition skills
- **Cultural Awareness**: Discover flags from different continents
- **Challenge**: Test and improve your knowledge over time

## 🤝 Contributing

We welcome contributions! Feel free to:

- Report bugs or suggest features
- Submit pull requests
- Share your high scores
- Suggest new flags or countries

---

**Ready to become a flag expert?** 🌍 Download the app and start your geography adventure today!

_"Every expert was once a beginner. Every pro was once an amateur. Every icon was once an unknown."_
