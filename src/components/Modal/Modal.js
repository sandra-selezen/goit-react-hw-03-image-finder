import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ image, isOpen, onClose }) => {
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Image Modal"
    >
      <div className="overlay">
        <div className="modal">
          <img src={image} alt="hru hru" width="640" />
        </div>
      </div>
      </Modal>
  )
}