import React from 'react';
import Theme from './models/Theme';
import Clock from './components/clock/Clock';
import './css/App.css';

const ThemeContext = React.createContext('light');
const APP_THEMES = {
  'light': new Theme('#000', '#fff'),
  'dark': new Theme('#fff', '#000'),
  // 'funky': new Theme('#ff0', '#0f0')
};

function App(props) {
  return (
    <ThemeContext.Provider value="light">
      <main className="app-main">
        <h1>Zane's Clock</h1>
        <ThemedClock
          displayText={true}
          textSize="25px"
        />
      </main>
    </ThemeContext.Provider>
  );
}

class ThemedClock extends React.Component {
  static contextType = ThemeContext;
  render() {
    const theme = APP_THEMES[this.context];
    return <Clock
      backgroundColor={theme.background}
      displayText={this.props.displayText}
      textSize={this.props.textSize}
      textColor={theme.foreground}
    />
  }
}

export default App;