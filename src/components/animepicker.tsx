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
    onColorExtract(imageSrc)
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
        extractPrimaryColor(result)
        onImageChange(result)
        addImageOnLocalStorage(result)
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
        <label
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            padding: '10px 20px',
            border: '2px solid white',
            cursor: 'pointer',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          Upload Image/GIF
        </label>
      )}
    </div>
  )
}

export default AnimePicker
