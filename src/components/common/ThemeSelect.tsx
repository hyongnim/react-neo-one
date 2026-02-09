import { Select } from '@/components/retroui/Select'
import { useTheme } from '@/hooks/useTheme'

const ThemeSelect = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Select value={theme} onValueChange={setTheme}>
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
