const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "A journey of a thousand miles begins with a single step.",
  "To be or not to be, that is the question.",
  "All that glitters is not gold.",
  "In the middle of difficulty lies opportunity.",
  "Life is what happens when you're busy making other plans.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "You miss 100% of the shots you don't take.",
  "The best way to predict the future is to create it."
];

export const getRandomSentence = () => {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex];
};