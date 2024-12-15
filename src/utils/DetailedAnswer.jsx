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
  
  const renderSentence = (text) => {
    if (text.includes("•") && text.includes(":")) {
      const bulletIndex = text.indexOf("•");
      const colonIndex = text.indexOf(":");

      const bullet = text.substring(0, bulletIndex + 1); // Includes "•"
      const boldText = text.substring(bulletIndex + 1, colonIndex).trim(); // Text between "•" and ":"
      const remainingText = text.substring(colonIndex + 1).trim(); // After ":"

      return (
        <>
          {bullet} {/* Render bullet */}
          <span className="text-base font-black font-serif">{boldText}</span> {/* Render bold part */}
          : {remainingText} {/* Render remaining part */}
        </>
      );
    }
    return text; // Return plain text if conditions not met
  };

  return (
    <div>
      {sentences.map((sentence, index) => (
        <div key={index}>
          <div className="font-mono">
            {renderSentence(FirstCapital(sentence.trim()))}
            {detailedAnswerText.includes("#") ? null : "."}
            </div>
        </div>
      ))}
    </div>
  );
}
