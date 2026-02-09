import { useEffect, useState } from 'react'
import { Select } from '@/components/retroui/Select'

const ThemeSelect = () => {
  const [theme, setTheme] = useState<'system' | 'dark' | 'light'>('system')

  useEffect(() => {
    // 从localStorage加载主题偏好
    const savedTheme = localStorage.getItem('theme') as 'system' | 'dark' | 'light' | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // 检查系统主题偏好
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme('system')
      // 应用系统主题偏好
      document.documentElement.classList.remove('dark', 'light')
      if (systemPrefersDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.add('light')
      }
    }
  }, [])

  useEffect(() => {
    // 应用主题
    if (theme === 'system') {
      // 检查系统主题偏好
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      // 应用系统主题偏好
      document.documentElement.classList.remove('dark', 'light')
      if (systemPrefersDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.add('light')
      }
      localStorage.removeItem('theme')
    } else {
      // 应用选择的主题
      document.documentElement.classList.remove('dark', 'light')
      document.documentElement.classList.add(theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  useEffect(() => {
    // 监听系统主题变化
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        document.documentElement.classList.remove('dark', 'light')
        if (e.matches) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.add('light')
        }
      }
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [theme])

  return (
    <Select value={theme} onValueChange={(value) => setTheme(value as 'system' | 'dark' | 'light')}>
      <Select.Trigger className="w-[200px]">
        <Select.Value placeholder="选择主题" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="system">跟随系统</Select.Item>
        <Select.Item value="dark">暗黑主题</Select.Item>
        <Select.Item value="light">明亮主题</Select.Item>
      </Select.Content>
    </Select>
  )
}

export { ThemeSelect }
