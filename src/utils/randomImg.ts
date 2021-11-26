// Função que escolhe uma imagem aleatória a partir de um Array de imagens.

export const randomImg = (images: Array<string>) => {
  return images[Math.floor(Math.random() * images.length)]
}