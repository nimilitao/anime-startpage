import AnimePicker from './components/animepicker'
import Bookmarks from './components/bookmarks'
import Clock from './components/clock'
import Gif from './assets/main-image.gif'
import Search from './components/search'
import { sections } from './data/sections'
import { ThemeProvider } from './components/themeprovider'
import { getImageOnLocalStorage } from './utils/localStorage'
import { getColorByIndex } from './utils/getColorByIndex'
import { useState, useEffect } from 'react'
import './global.css'

let image = getImageOnLocalStorage() || Gif

const defaultVariant = {
  img: image,
  primary: 'hsl(261, 81%, 43%)',
}

function Startpage() {
  const [primaryColor, setPrimaryColor] = useState(defaultVariant.primary)
  const [img, setImg] = useState(image)

  useEffect(() => {
    async function fetchPrimaryColor() {
      const color = await getColorByIndex(img, 1)
      setPrimaryColor(color)
    }

    fetchPrimaryColor()
  }, [img])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="flex flex-col items-center justify-center">
        <h1
          style={{
            fontSize: '2.8rem',
            textShadow: `2px 0px 0px ${primaryColor}`,
            marginTop: '2rem',
          }}
        >
          こんにちは
        </h1>
        <div>
          <AnimePicker
            variant={{ ...defaultVariant, img, primary: primaryColor }}
            onColorExtract={setPrimaryColor}
            onImageChange={setImg}
          />
          <Clock />
          <Search borderColor={primaryColor} />
          <Bookmarks sections={sections} />
        </div>
      </main>
    </ThemeProvider>
  )
}

export default Startpage
