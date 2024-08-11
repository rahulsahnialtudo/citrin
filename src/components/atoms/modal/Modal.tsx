import Image from 'next/image';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  closeModal?: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, closeModal }) => {
  return (
    <div className={`modal-overlay ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-wrapper" id="modal">
        <div className="modal-close-button" onClick={closeModal}>
          <Image src="/icons/close.svg" alt="Close icon" width={22} height={25} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
