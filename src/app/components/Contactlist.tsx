import React, { useState } from 'react'
import { Button } from "@/app/components/ui/button"

import { FaDiscord } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

const Contactlist = () => {
  return (
    <main>
    <div className="flex flex-col items-center m-3 gap-3">
      <h1 className="text-2xl font-bold mb-8 text-center">Contact List</h1>
        <Button asChild className="w-40">
            <a href="https://twitter.com/ryaaryu" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className="mr-2 h-4 w-4" />Twitter（X）
            </a>
        </Button>
        <Button asChild className="w-40">
            <a href="https://discord.com/users/147617894249922560" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="mr-2 h-4 w-4" />Discord
            </a>
        </Button>
    </div>
    </main>
  )
}

export default Contactlist