import React, { useState, useEffect } from 'react';
import Theme from './models/Theme';
import ThemeContext from './core/context/ThemeContext';
import DropdownOption from './models/DropdownOption';
import Dropdown from './components/Dropdown';
import Clock from './components/Clock';
import './css/App.css';

const APP_THEMES = {
  'light': new Theme('#000', '#fff'),
  'dark': new Theme('#fff', '#000'),
  'funky': new Theme('#f00', '#00f'),
  'clown': new Theme('#f00', '#fff')
};

function App(props) {
  const [themeName, setThemeName] = useState(localStorage.getItem('themeName') || 'light');
  const appTheme = APP_THEMES[themeName];

  useEffect(() => {
    // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //   // dark mode init
    //   setThemeName('dark');
    // }
    // if (window.matchMedia('(prefers-color-scheme: dark)').addEventListener) {
    //   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    //     const newColorScheme = e.matches ? 'dark' : 'light';
    //     setThemeName(newColorScheme);
    //   });
    // }

    document.body.style.backgroundColor = appTheme.background;
    localStorage.setItem('themeName', themeName);
  }, [themeName, appTheme]);

  let themeOptions = Object.keys(APP_THEMES).map(name => new DropdownOption(name));

  return (
    <ThemeContext.Provider value={themeName}>
      <main className="app-main">
        <ThemedColorArea>
          <h1>Zane's Clock</h1>
          <p>Demo of some clocks I made in React as an exercise in practicing with props and state and in learning hooks and context. The first clock is just a regular Clock component, and the second is "themed." I didn't use too much styling/CSS in making this because I made this with the goal of furthering my knowledge of React.</p>
        </ThemedColorArea>
        <Dropdown
          options={themeOptions}
          className="theme-select"
          onChange={name => setThemeName(name)}
          value={themeName}
        />
        <Clock
          displayText={true}
          textSize="25px"
        />
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
      borderColor={theme.foreground}
      hourHandColor={theme.foreground}
      minuteHandColor={theme.foreground}
    />;
  }
}

// this might be super silly
class ThemedColorArea extends React.Component {
  static contextType = ThemeContext;
  render() {
    const theme = APP_THEMES[this.context];
    return (
      <div style={{ color: theme.foreground }}>
        {this.props.children}
      </div>
    );
  }
}

export default App;