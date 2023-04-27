export const ImageGalleryItem = ({ picture: { webformatURL, largeImageURL, tags } }) => {
  return (
    <img src={webformatURL} alt={tags} />
  )
}