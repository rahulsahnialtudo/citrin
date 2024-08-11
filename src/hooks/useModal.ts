import { useEffect, useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // close the modal when clicking outside
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (!(event.target instanceof Node) || !isOpen) return;
      const target = event.target as HTMLElement;
      if (!target.closest('#modal') && !target.closest('.trigger')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [isOpen]);

  // close the modal when clicking escape key
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!isOpen || keyCode !== 27) return;
      setIsOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
