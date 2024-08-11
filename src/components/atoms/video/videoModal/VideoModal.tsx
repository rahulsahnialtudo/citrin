import Modal from 'components/atoms/modal/Modal';
import VideoPlayer from '../videoPlayer/VideoPlayer';

type VideoModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  videoUrl: string;
};

const VideoModal = ({ closeModal, isOpen, videoUrl }: VideoModalProps) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <VideoPlayer url={videoUrl} isMounted={isOpen} />
    </Modal>
  );
};

export default VideoModal;
