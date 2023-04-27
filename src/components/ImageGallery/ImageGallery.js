import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({ pictures }) => {
  return (
    <ul>
      {pictures.map(picture => (
        <li key={picture.id}>
          <ImageGalleryItem picture={picture} />
        </li>
      ))}
  </ul>
  )
}