import React, { useState } from 'react';
import { motion } from 'framer-motion';

const chapters = [
  {
    title: "The Day We Met",
    content: "It all started with that one look, that one smile. A moment that changed everything."
  },
  {
    title: "First Adventure",
    content: "Our first adventure together felt like a movie scene, filled with laughter and excitement."
  },
  {
    title: "Growing Together",
    content: "Step by step, day by day, we learned each other’s worlds and built our own little universe."
  }
];

function App() {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < chapters.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 relative overflow-hidden">
      {/* Floating doodles */}
      <motion.div
        className="absolute text-pink-200 text-6xl top-10 left-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        ♥
      </motion.div>
      <motion.div
        className="absolute text-pink-200 text-5xl bottom-20 right-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        ✿
      </motion.div>

      {/* Story container */}
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-11/12 text-center z-10"
      >
        <h1 className="text-2xl font-bold text-pink-600 mb-4">{chapters[index].title}</h1>
        <p className="text-gray-700 mb-6">{chapters[index].content}</p>

        <div className="flex justify-between">
          <button
            onClick={prev}
            className="px-4 py-2 bg-pink-200 text-pink-800 rounded-lg disabled:opacity-50"
            disabled={index === 0}
          >
            Previous
          </button>
          <button
            onClick={next}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg disabled:opacity-50"
            disabled={index === chapters.length - 1}
          >
            Next
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
