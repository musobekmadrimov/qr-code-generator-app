import React, { useEffect, useState } from "react";

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [qrCode, setQrCode] = useState(" ");
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size${""}&bgcolor=${bgColor}`
    );
  }, [word, bgColor]);

  function handleGenerator() {
    setWord(temp);
  }

  return (
    <>
      <h1 className="themeText">React QR Code Generator</h1>
      <div className="inputSec">
        <input
          type="text"
          placeholder="Enter Anything You Want..."
          className="placeInput"
          onChange={(e) => setTemp(e.target.value)}
        />
      </div>
      {!qrCode ? (
        <div className="result">
        
      </div>
      ) : (
        <div className="result">
          <img src={qrCode} alt="" />
        </div>
      )}

      <div className="buttonsArea">
        <button className="generateBtn" onClick={handleGenerator}>
          Generate
        </button>
        <a href={qrCode} download className="downloadBtn">
          Download
        </a>
        <input
          type="color"
          onChange={(e) => setBgColor(e.target.value.substring(1))}
        />
      </div>
    </>
  );
}

export default App;
