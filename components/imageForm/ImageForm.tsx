"use client"

import { useEffect, useState } from "react"
import { pixelConverter } from "@/utils/pixelConverter"

const ImageForm = () => {
  const [file, setFile] = useState<File | null>(null)
  const [num, setNum] = useState<number>(15)
  const [processedImage, setProcessedImage] = useState<string | null>(null)

  useEffect(() => {
    if (file) {
      pixelConverter(file, num, (image) => {
        setProcessedImage(image)
      })
    }
  }, [file, num])

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mt-20">
          <div className="flex flex-col justify-center items-center  gap-2">
            <label className="flex items-center px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 mx-auto">
              {file ? file.name : "Choose File"}
              <div>
                <input
                  type="file"
                  className="opacity-0 absolute w-0 h-0"
                  onChange={(e) => {
                    if (e.target.files) {
                      const selectedFile = e.target.files[0]

                      if (
                        selectedFile.type === "image/jpeg" ||
                        selectedFile.type === "image/png"
                      ) {
                        setFile(selectedFile)
                      } else {
                        alert("Please upload either a .jpg or .png file")
                      }
                    }
                  }}
                />
              </div>
            </label>
            <label htmlFor="pixelVal"> Pixel value</label>
            <select
              name="pixelVal"
              className="mx-auto border rounded-md p-1"
              onChange={(e) => setNum(Number(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>60</option>
              <option value={20}>15</option>
              <option value={30}>30</option>
              <option value={60}>60</option>
              <option value={120}>120</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 mt-5">
          <div>
            {processedImage && file && (
              <>
                <h2>Original</h2>
                <img
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="max-w-[350px]"
                />
              </>
            )}
          </div>
          <div>
            {processedImage && (
              <>
                <h2>Preview</h2>
                <img
                  src={processedImage}
                  alt="preview"
                  className="max-w-[350px]"
                />
              </>
            )}
          </div>
        </div>

        {processedImage && (
          <a
            href={processedImage}
            download="processed_image.jpeg"
            className="mt-4 inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            Save Image
          </a>
        )}
        {!processedImage && (
          <div className="mt-4 inline-block px-4 py-2  text-black rounded">
            Waiting for your image...
          </div>
        )}
      </div>
    </>
  )
}

export default ImageForm
