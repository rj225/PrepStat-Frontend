import React from 'react';
import FirstCapital from './FirstCapital';

export default function DetailedAnswer({ item }) {
  const detailedAnswerText = item.explanation || item.solution;
  const sentences = detailedAnswerText.split('.').filter(sentence => sentence.trim() !== '');

  return (
    <div>
      {sentences.map((sentence, index) => (
        <>
        <p key={index} className="font-mono">{FirstCapital(sentence.trim()) + '.'}</p> <br />
        </>
      ))}
    </div>
  );
}
