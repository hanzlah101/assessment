import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// simulate network delay
export function sleep(s: number) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000))
}

export function randomColor(index: number) {
  const hue = (index * 137.508) % 360
  const saturation = 60 + (index % 20)
  const lightness = 75 + (index % 15)

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

export function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}
