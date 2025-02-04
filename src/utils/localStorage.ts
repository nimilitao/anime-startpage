const LOCAL_STORAGE_KEY = 'anime_picker_image'
import gif from '../assets/main-image.gif'

const DEFAULT_IMAGE_PATH = gif

export function getImageOnLocalStorage(): string {
  const storedImage = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (!storedImage) {
    return DEFAULT_IMAGE_PATH
  }
  return storedImage
}

export function addImageOnLocalStorage(image: string) {
  localStorage.clear()
  localStorage.setItem(LOCAL_STORAGE_KEY, image)
}
