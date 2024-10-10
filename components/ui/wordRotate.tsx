import React from 'react';
import WordRotate from '../magicui/word-rotate';

const WordRotateEffect = () => {
  return (
    <div>
      <WordRotate
        words={[
          'Chartered Engineers',
          'Structural Engineers',
          'Architects',
          'Govt. Reg. Valuers',
          'Industrial Consultants',
          'Arbitrators',
          'Auctioneers',
        ]}
      />
    </div>
  );
};

export default WordRotateEffect;
