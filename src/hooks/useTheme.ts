import { useTheme as useNextTheme } from 'next-themes'

type Theme = 'system' | 'dark' | 'light'

const useTheme = () => {
  const { theme, setTheme: setNextTheme } = useNextTheme()

  // 包装setTheme函数，确保类型安全
  const setTheme = (newTheme: Theme) => {
    setNextTheme(newTheme)
  }

  return {
    theme,
    setTheme
  }
}

export { useTheme }
