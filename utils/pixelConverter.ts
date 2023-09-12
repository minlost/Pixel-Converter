export const pixelConverter = (
  file: File,
  num: number,
  callback: (dataUrl: string) => void
) => {
  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")
  const img = new Image()

  img.onload = () => {
    const w = img.width
    const h = img.height

    canvas.width = w
    canvas.height = h
    ctx!.drawImage(img, 0, 0)

    const pixelArr = ctx!.getImageData(0, 0, w, h).data

    for (let y = 0; y < h; y += num) {
      for (let x = 0; x < w; x += num) {
        const p = (x + y * w) * 4

        const r = Math.floor(pixelArr[p] / 64) * 64
        const g = Math.floor(pixelArr[p + 1] / 64) * 64
        const b = Math.floor(pixelArr[p + 2] / 64) * 64

        ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, ${pixelArr[p + 3]})`
        ctx!.fillRect(x, y, num, num)
      }
    }

    const dataUrl = canvas.toDataURL("image/jpeg")
    callback(dataUrl)
  }

  img.src = URL.createObjectURL(file)
}
