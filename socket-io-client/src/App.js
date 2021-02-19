import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {

  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <p className="">
          It's <time dateTime={response}>{response}</time>
        </p>
        <p>
          Real time clock using socketIo
        </p>
      </header>
    </div>
  );
}

export default App;
