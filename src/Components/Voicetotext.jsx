import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Voicetotext = ({ setQuestion }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  // If the browser doesn't support speech recognition
  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser doesn't support speech recognition.</span>;
  }

  // Update the question with the transcript from speech recognition
  React.useEffect(() => {
    setQuestion(transcript);
  }, [transcript, setQuestion]);

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

export default Voicetotext;
