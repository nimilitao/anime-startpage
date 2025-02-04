import { useState, useEffect } from 'react'
import {
  getImageOnLocalStorage,
  addImageOnLocalStorage,
} from '../utils/localStorage'
import gif from '../assets/main-image.gif'

type Variant = {
  img: string
  primary: string
}

type AnimePickerProps = {
  variant: Variant
  onColorExtract: (color: string) => void
  onImageChange: (image: string) => void
}

function AnimePicker({
  variant,
  onColorExtract,
  onImageChange,
}: AnimePickerProps) {
  const savedImage = getImageOnLocalStorage() || gif
  const [image, setImage] = useState(savedImage)
  const [hovered, setHovered] = useState(false)

  function extractPrimaryColor(imageSrc: string) {
    const extractedColor = '#FFA500'
    onColorExtract(extractedColor)
  }

  useEffect(() => {
    extractPrimaryColor(image)
  }, [image])

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setImage(result)
        addImageOnLocalStorage(result)
        onImageChange(result)
        extractPrimaryColor(result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div
      className="relative inline-block p-[5px]"
      style={{ border: `5px solid ${variant.primary}` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={image}
        alt="anime-image"
        className="w-[550px] h-[285px] block transition-opacity duration-300"
        style={{ opacity: hovered ? 0.6 : 1 }}
      />
      {hovered && (
        <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <span className="px-4 py-2 border-2 border-white text-white rounded-lg">
            Upload Image/GIF
          </span>
        </label>
      )}
    </div>
  )
}

export default AnimePicker
