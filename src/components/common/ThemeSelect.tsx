import { Select } from '@/components/retroui/Select'
import { Button } from '@/components/retroui/Button'
import { Sun, Moon } from 'lucide-react'
import { useTheme as useNextTheme } from 'next-themes'

const ThemeSelect = () => {
  const { theme, setTheme, resolvedTheme, systemTheme } = useNextTheme()

  const handleIconClick = () => {
    if (theme === 'system' || systemTheme === theme) {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }
    else {
      setTheme('system')
    }
  }

  const getIcon = () => {
    return resolvedTheme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
  }

  return (
    <div className="flex items-center gap-2">
      <Select value={theme} onValueChange={setTheme}>
        <Select.Trigger className="w-[200px]">
          <Select.Value />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="system">跟随系统</Select.Item>
          <Select.Item value="dark">暗黑主题</Select.Item>
          <Select.Item value="light">明亮主题</Select.Item>
        </Select.Content>
      </Select>
      <Button
        onClick={handleIconClick}
        variant="ghost"
        size="icon"
        className="rounded-full"
      >
        {getIcon()}
      </Button>
    </div>
  )
}

export { ThemeSelect }
