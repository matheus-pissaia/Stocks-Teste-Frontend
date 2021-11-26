export const randomImg = (images: Array<string>) => {
  return images[Math.floor(Math.random() * images.length)]
}