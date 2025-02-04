import ColorThief from 'colorthief'

export const getColorByIndex = (
  imgUrl: string,
  index: number
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = imgUrl
    img.crossOrigin = 'anonymous'

    img.onload = () => {
      const colorThief = new ColorThief()
      try {
        const palette = colorThief.getPalette(img)

        if (!palette || index < 1 || index > palette.length) {
          return reject('Invalid color index')
        }

        const color = `rgb(${palette[index - 1][0]}, ${
          palette[index - 1][1]
        }, ${palette[index - 1][2]})`
        resolve(color)
      } catch (error) {
        reject('Unable to extract color from image')
      }
    }

    img.onerror = () => {
      reject('Image failed to load')
    }
  })
}
