import { GalleryImage } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ picture: { webformatURL, largeImageURL, tags } }) => {
  return (
    <GalleryImage src={webformatURL} alt={tags} />
  )
}