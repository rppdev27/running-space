'use client'

import React, { useState, useEffect, useRef } from 'react';

const TextToSpeech: React.FC = () => {
    const [text, setText] = useState<string>("Halo, selamat datang di demo text-to-speech menggunakan Web Speech API.");
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentWord, setCurrentWord] = useState<number>(0);
    const [language, setLanguage] = useState<string>('id-ID');
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  
    useEffect(() => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        utteranceRef.current = new SpeechSynthesisUtterance();
      }
    }, []);
  
    const handlePlay = () => {
      if (!utteranceRef.current) return;
  
      utteranceRef.current.text = text;
      utteranceRef.current.rate = 0.8;
      utteranceRef.current.lang = language; // Set the language here
  
      utteranceRef.current.onboundary = (event) => {
        if (event.name === 'word') {
          setCurrentWord(event.charIndex);
        }
      };
  
      utteranceRef.current.onend = () => {
        setIsPlaying(false);
        setCurrentWord(0);
      };
  
      setIsPlaying(true);
      window.speechSynthesis.speak(utteranceRef.current);
    };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setCurrentWord(0);
  };

  const highlightText = () => {
    const words = text.split(' ');
    return words.map((word, index) => {
      const start = text.indexOf(word);
      const end = start + word.length;
      return (
        <span
          key={index}
          className={`${
            currentWord >= start && currentWord < end ? 'bg-yellow-300' : ''
          }`}
        >
          {word}{' '}
        </span>
      );
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Demo Text-to-Speech</h1>
      <div className="mb-4">
        <label htmlFor="text-input" className="block mb-2">Teks:</label>
        <textarea
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border rounded"
          rows={4}
        />
      </div>
      <div className="mb-4 p-4 border rounded-lg bg-gray-100">
        {highlightText()}
      </div>
      <div className="mb-4">
        <label htmlFor="language-select" className="block mb-2">Pilih Bahasa:</label>
        <select
          id="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="id-ID">Bahasa Indonesia</option>
          <option value="en-US">English (US)</option>
          <option value="ms-MY">Bahasa Melayu</option>
          <option value="jv-ID">Basa Jawa</option>
          <option value="su-ID">Basa Sunda</option>
        </select>
      </div>
      <button
        onClick={isPlaying ? handleStop : handlePlay}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isPlaying ? 'Berhenti' : 'Putar'}
      </button>
    </div>
  );
};

export default TextToSpeech;
