import { useState, useCallback } from 'react'
import { ThemeProvider } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { darkMode, lightMode } from '../styles/theme'

import { Container, Content, Ball, IconMoon, IconSun } from './styles'

const Home = () => {
  const [theme, setTheme] = useState('dark')
  const isLight = theme === 'light'

  const handleClickBall = useCallback(() => {
    setTheme(state => state === 'dark' ? 'light' : 'dark')
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkMode : lightMode}>
      <Container>
        <IconMoon isLight={isLight} icon={faMoon} size="10x" />
        <IconSun isLight={isLight} icon={faSun} size="10x" />
        <Content>
          <FontAwesomeIcon icon={faMoon} color="#f0f0f0" />
          <FontAwesomeIcon icon={faSun} color="#F5B512" />
          <Ball isLight={isLight} onClick={handleClickBall} />
        </Content>
      </Container>
    </ThemeProvider>
  )
}

export default Home