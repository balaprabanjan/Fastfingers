'use client'
import { useState, useEffect } from 'react';
import { getRandomSentence } from '../utils/utils';
import RandomSentence from './RandomSentence';

const TypingTest = () => {
  const [textToType, setTextToType] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [inputDuration, setInputDuration] = useState(30); 

  useEffect(() => {
    setTextToType(getRandomSentence());
  }, []);

  useEffect(() => {
    if (userInput === textToType) {
      endTest();
    }
  }, [userInput]);

  useEffect(() => {
    let interval = null;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      endTest();
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const startTest = () => {
    setStartTime(new Date());
    setUserInput("");
    setTimer(inputDuration);
    setIsTimerActive(true);
    setIsCompleted(false);
  };

  const endTest = () => {
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 60000; 
    setWpm(Math.round((textToType.split(' ').length / timeTaken)));
    calculateAccuracy();
    setIsCompleted(true);
    setIsTimerActive(false);
  };

  const calculateAccuracy = () => {
    const correctChars = userInput.split('').filter((char, index) => char === textToType[index]).length;
    const totalChars = textToType.length;
    setAccuracy(((correctChars / totalChars) * 100).toFixed(2));
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleReset = () => {
    setTextToType(getRandomSentence());
    setUserInput("");
    setStartTime(null);
    setWpm(0);
    setAccuracy(0);
    setIsCompleted(false);
    setTimer(0);
    setIsTimerActive(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-lime-500">Typing Test</h2>
      <RandomSentence sentence={textToType} />
      <input
        type="number"
        value={inputDuration}
        onChange={(e) => setInputDuration(e.target.value)}
        className="mt-4 p-2 border border-lime-300 rounded"
        placeholder="Set timer (seconds)"
      />
      <button
        onClick={startTest}
        className="mt-2 px-4 py-2 text-black bg-lime-500 rounded hover:bg-lime-600"
      >
        Start Typing Test
      </button>
      <p className="mt-4 text-sky-400">Time Remaining: {timer} seconds</p>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        className="mt-4 p-2 border border-gray-300 rounded"
        placeholder="Start typing..."
        disabled={!isTimerActive}
      />
      {isCompleted && (
        <div className="mt-4 text-zinc-400">
          <h3 className="text-lg">Your Results:</h3>
          <p>Typing Speed: {wpm} WPM</p>
          <p>Accuracy: {accuracy}%</p>
          <button
            onClick={handleReset}
            className="mt-2 px-4 py-2 text-black bg-lime-500 rounded hover:bg-lime-600"
            >
            Try Another Sentence
          </button>
        </div>
      )}
    </div>
  );
};

export default TypingTest;