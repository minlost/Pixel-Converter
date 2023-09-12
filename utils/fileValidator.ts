import { z } from "zod"

export const fileSchema = z.object({
  fileToUpload: z
    .union([
      z.string().refine((value) => value.includes("image/"), {
        message: "Soubor musí být obrázek.",
      }),
      z.undefined(),
    ])
    .optional(),
})

export type CommentRequest = z.infer<typeof fileSchema>
