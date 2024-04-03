import React from 'react'
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Button } from "@/app/components/ui/button"
import { buttonVariants } from "@/app/components/ui/button"
import { Mail } from "lucide-react"
import { FaDiscord } from 'react-icons/fa';

const Cardlist = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/icons/GItv8NcaIAA9cSZ.jpg" />
            <AvatarFallback>logo</AvatarFallback>
          </Avatar>
            起床確認ボット
          </CardTitle>
          <CardDescription>
            スラッシュコマンドを使用できるボットです<br />
            ユーザーのステータスを取得し返却してくれるボットです<br />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="ml-3">コマンド</p>
          <code className="bg-gray-800 text-white px-2 py-1 rounded">/niero &#123;UserID&#125;</code>
        </CardContent>
        <CardFooter className="flex justify-center">
        <Button asChild>
          <a href="https://discord.com/oauth2/authorize?client_id=1212355277723144273&permissions=8&scope=bot+applications.commands" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="mr-2 h-4 w-4" /> Invite DiscordBot
          </a>
        </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/icons/setT.jpg" />
            <AvatarFallback>logo</AvatarFallback>
          </Avatar>
            翻訳ボット
          </CardTitle>
          <CardDescription>
          翻訳したいチャンネルでコマンドを実施<br />
          チャンネルに投稿された日本語をセットされた言語へ翻訳してくれるボットです<br />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="ml-3">コマンド</p>
          <code className="bg-gray-800 text-white px-2 py-1 rounded">!set &#123;language&#125;</code>
        </CardContent>
        <CardFooter className="flex justify-center">
        <Button asChild>
          <a href="https://discord.com/oauth2/authorize?client_id=1212391258543104051&permissions=8&scope=bot+applications.commands" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="mr-2 h-4 w-4" /> Invite DiscordBot
          </a>
        </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Cardlist