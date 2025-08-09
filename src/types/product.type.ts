import { StaticImageData } from "next/image"

export interface IProduct {
  id: number
  name: string 
  image: string | StaticImageData
  rating: number
  isFavorited: boolean
  category: 'laptop' | 'watch'
}