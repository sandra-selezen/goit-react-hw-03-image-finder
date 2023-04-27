import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({ pictures }) => {
  return (
    <ul>
    {pictures.map(({ id }) => (
      <li key={id}>
        <ImageGalleryItem /> 
      </li>
    ))}
  </ul>
  )
}