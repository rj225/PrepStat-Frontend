import React from 'react';
import FirstCapital from './FirstCapital';

export default function DetailedAnswer({ item }) {
  const detailedAnswerText = item.explanation || item.solution || item.answer;
  const sentences = detailedAnswerText.split('.').filter(sentence => sentence.trim() !== '');

  return (
    <div>
      {sentences.map((sentence, index) => (
        <div key={index}>
          <div className="font-mono">{FirstCapital(sentence.trim()) + '.'}</div> <br />
        </div>
      ))}
    </div>
  );
}
