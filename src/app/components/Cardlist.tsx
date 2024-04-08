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
            NNSS
          </CardTitle>
          <CardDescription>
            スラッシュコマンドを使用できるボットです<br />
            ユーザーのステータスを取得し返却してくれるボットです<br />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="ml-3">コマンド一覧</p>
          <div className="mt-2">
            <code className="bg-gray-800 text-white px-2 py-1 rounded">/status &#123;UserID&#125;</code>
          </div>
          <div className="mt-2">
            <code className="bg-gray-800 text-white px-2 py-1 rounded">/setlang &#123;lang&#125;</code>
          </div>
          <div className="mt-2">
            <code className="bg-gray-800 text-white px-2 py-1 rounded">/deletelang &#123;lang&#125;</code>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <a href="https://discord.com/oauth2/authorize?client_id=1225778303844225077&permissions=19456&scope=bot+applications.commands" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="mr-2 h-4 w-4" /> Invite DiscordBot
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Cardlist