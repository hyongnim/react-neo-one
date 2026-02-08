import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/retroui/Button'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 font-[var(--font-head)]">RetroUI 示例项目</h1>
      <div className="space-y-4 flex flex-col items-center">
        <Button onClick={() => navigate('/detail')} className="text-lg px-8 py-4">
          跳转到详情页
        </Button>
        <a href="https://github.com/hyongnim/react-neo-one" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-blue-600 hover:underline mt-6">
          Github
        </a>
      </div>
    </div>
  )
}

export default Home