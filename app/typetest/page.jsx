import Head from 'next/head';
import TypingTest from './components/TypingTest';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-lime-300 via-black to-lime-300">
      <Head>
        <title>Typing Test</title>
        <meta name="description" content="Test your typing speed!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center p-4 bg-black border border-lime-400 shadow-lime-400 rounded-lg shadow-md">
        <TypingTest />
      </main>
    </div>
  );
}