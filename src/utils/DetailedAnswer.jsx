import React from 'react';
import FirstCapital from './FirstCapital';

export default function DetailedAnswer({ item }) {
  const detailedAnswerText = item.explanation || item.solution || item.answer;
  let sentences = detailedAnswerText;
  if (detailedAnswerText.includes("#")) {
    sentences = detailedAnswerText.split('#').filter(sentence => sentence.trim() !== '')
  }
  else{
    sentences = detailedAnswerText.split('.').filter(sentence => sentence.trim() !== '');
  }
  
  

  return (
    <div>
      {sentences.map((sentence, index) => (
        <div key={index}>
          <div className="font-mono">{detailedAnswerText.includes('#') ? FirstCapital(sentence.trim()) : FirstCapital(sentence.trim()) + "."}</div>
        </div>
      ))}
    </div>
  );
}
