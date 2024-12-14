'use client'
import { useState, useEffect } from 'react';

export default function FlashType() {
  const [sentence, setSentence] = useState('');
  const [input, setInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds timer
  const [isRunning, setIsRunning] = useState(false);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  const fetchSentence = async () => {
    const response = await fetch(
      'https://api.quotable.io/random?minLength=50&maxLength=100'
    );
    const data = await response.json();
    setSentence(data.content);
  };

  useEffect(() => {
    fetchSentence();
  }, []);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      endGame();
    }
  }, [isRunning, timeLeft]);

  const startGame = () => {
    setIsRunning(true);
    setTimeLeft(30);
    setInput('');
    fetchSentence();
    setWordsPerMinute(0);
    setAccuracy(0);
  };

  const endGame = () => {
    setIsRunning(false);
    const wordsTyped = input.trim().split(' ').length;
    setWordsPerMinute(Math.round((wordsTyped / 30) * 60));

    const correctChars = input.split('').reduce((acc, char, idx) => {
      return char === sentence[idx] ? acc + 1 : acc;
    }, 0);

    setAccuracy(Math.round((correctChars / sentence.length) * 100));
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Fast Fingers Typing Test</h1>
        <p className="mt-4 text-lg text-gray-700">{sentence}</p>
        <textarea
          className="w-full p-4 mt-4 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          value={input}
          onChange={handleInputChange}
          placeholder="Start typing here..."
          disabled={!isRunning}
        ></textarea>
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={startGame}
            className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            {isRunning ? 'Restart' : 'Start'}
          </button>
          <div className="text-gray-700">
            <p>Time Left: <span className="font-bold">{timeLeft}s</span></p>
            {timeLeft === 0 && (
              <>
                <p>WPM: <span className="font-bold">{wordsPerMinute}</span></p>
                <p>Accuracy: <span className="font-bold">{accuracy}%</span></p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
