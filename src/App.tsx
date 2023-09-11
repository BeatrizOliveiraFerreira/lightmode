import React, {useState} from 'react';
import Header from './components/Header';
import Global from './styles/global'
import {ThemeProvider} from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';


function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    if (theme.title === 'light') {
      
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };



  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        
        <Global />
        <Header toggleTheme={toggleTheme}/>

        
      </div>
    </ThemeProvider>
    
  );
}

export default App;
