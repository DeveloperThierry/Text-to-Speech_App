import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSpeechSynthesis } from "react-speech-kit";

function App() {
  const [count, setCount] = useState(0);
  const { speak, voices } = useSpeechSynthesis();
  const [inputText, setInputText] = useState("");
  const [voiceIndex, setVoiceIndex] = useState(0);
  const [rate, setRate] = useState(1);

  function handleSpeak() {
    speak({ text: inputText, rate: rate, voice: voices[voiceIndex] });
  }
  return (
    <>
      <h2>React Text to Speech App</h2>
      <textarea
        rows="5"
        cols="58"
        placeholder="Enter text"
        onChange={(e) => setInputText(e.target.value)}
      />
      <br />
      <select
        style={{ width: "108px" }}
        value={voiceIndex || ""}
        onChange={(e) => setVoiceIndex(e.target.value)}
      >
        <option value="">default</option>
        {voices.map((item, index) => (
          <option key={item.name} value={index}>
            {item.name}
          </option>
        ))}
      </select>
      <div>
        <input
          type="range"
          min="0.5"
          max="1.5"
          step="0.5"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <h3>Current Speech rate is {rate}</h3>
      <button onClick={() => handleSpeak()}>Speak</button>
    </>
  );
}

export default App;
