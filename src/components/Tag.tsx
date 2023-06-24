import { useRouter } from "next/router"
import React from "react"

type Props = {
  children: string
  tag_id: number
  category_id: number
}

const Tag: React.FC<Props> = ({ children, tag_id, category_id }) => {
  const router = useRouter()
  const handleClick = (value: string) => {
    router.push(`/?tag=${value}`)
  }

  let arrayOfColors = [
    "bg-red-200",
    "bg-yellow-200",
    "bg-green-200",
    "bg-zinc-700-200",
    "bg-indigo-200",
    "bg-purple-200",
    "bg-pink-200",
  ]

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
        arrayOfColors[tag_id % arrayOfColors.length]
        arrayOfDarkerColors[category_id % arrayOfDarkerColors.length]
      } px-2 py-1 cursor-pointer`}
    >
      {children}
    </div>
  )
}

export default Tag