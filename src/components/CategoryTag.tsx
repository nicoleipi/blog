import { useRouter } from "next/router"
import React from "react"

type Props = {
  children: string
  tag_id: number
}

const Cat_Tag: React.FC<Props> = ({ children, tag_id }) => {
  const router = useRouter()
  const handleClick = (value: string) => {
    router.push(`/?tag=${value}`)
  }

  let arrayOfDarkerColors = [
    "bg-red-400",
    "bg-yellow-400",
    "bg-green-400",
    "bg-zinc-700-400",
    "bg-indigo-400",
    "bg-purple-400",
    "bg-pink-400",
  ]

  return (
    <div
      onClick={() => handleClick(children)}
      className={`text-xs text-gray-800 font-normal rounded-full ${
        arrayOfDarkerColors[tag_id % arrayOfDarkerColors.length]
      } px-2 py-1 cursor-pointer`}
    >
      {children}
    </div>
  )
}

export default Cat_Tag