export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b)
  },
}

export { ThemeProvider, useTheme, withTheme } from './core/theming'
export { Provider } from './core/Provider'
export { Button } from './components/Button'
export { DarkTheme } from './styles/DarkTheme'
export { DefaultTheme } from './styles/DefaultTheme'
export { configureFonts } from './styles/fonts'
