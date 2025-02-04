import { useRef } from "react";

const useAudio = (audioFile: string) => {
  const audioContext = useRef<AudioContext | null>(null);
  const bufferRef = useRef<AudioBuffer | null>(null);

  const setupAudioEffect = () => {
    audioContext.current = new AudioContext();
    fetch(audioFile)
      .then((res) => res.arrayBuffer())
      .then((data) => audioContext.current!.decodeAudioData(data))
      .then((buffer) => {
        bufferRef.current = buffer;
      });
  };

  const playSoundEffect = () => {
    if (audioContext.current && bufferRef.current) {
      const source = audioContext.current.createBufferSource();
      source.buffer = bufferRef.current;
      source.connect(audioContext.current.destination);
      source.start(0);
    }
  };

  return { setupAudioEffect, playSoundEffect };
};

export default useAudio;
