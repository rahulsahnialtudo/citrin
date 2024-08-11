import Show from 'components/atoms/Show';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false });

type VideoPlayerProps = {
  url: string;
  isMounted: boolean;
};

const VideoPlayer = ({ url, isMounted }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  useEffect(() => {
    if (!isMounted) setIsPlaying(false);
  }, [isMounted]);

  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <Show when={!!url}>
      <ReactPlayer
        url={url}
        controls
        height="100%"
        width="100%"
        playing={isPlaying}
        onPlay={handlePlay}
      />
      ;
    </Show>
  );
};

export default VideoPlayer;
