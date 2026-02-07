import { useNavigate } from 'react-router-dom'
import { Avatar } from '@/components/retroui/Avatar'
import { Card } from '@/components/retroui/Card'
import { Button } from '@/components/retroui/Button'

const Detail = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 font-[var(--font-head)]">详情页</h1>
      <div className="space-y-8 max-w-md w-full">
        <Card className="p-6 border-2">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-32 h-32 border-2">
              <Avatar.Image src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=friendly%20retro%20style%20avatar%20illustration&image_size=square" alt="用户头像" />
            </Avatar>
            <h2 className="text-2xl font-bold font-[var(--font-head)]">用户信息</h2>
            <p className="text-center">这是一个使用 RetroUI 组件的详情页示例。</p>
          </div>
        </Card>
        <Button onClick={() => navigate('/')} className="w-full text-lg px-8 py-4">
          返回首页
        </Button>
      </div>
    </div>
  )
}

export default Detail