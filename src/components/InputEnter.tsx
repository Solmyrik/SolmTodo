import React from 'react';

interface InputEntersProps {
  onHandlerInput: (e: string) => void;
  setCurrentString: (e: string) => void;
  currentString: string;
}

const InputEnter: React.FC<InputEntersProps> = ({
  onHandlerInput,
  setCurrentString,
  currentString,
}) => {
  return (
    <div className="InputEnter">
      <input
        value={currentString}
        onChange={(e) => setCurrentString(e.target.value)}
        className="InputEnter__input"
        type="text"
      />
      <button onClick={() => onHandlerInput(currentString)} className="InputEnter__add">
        Добавить
      </button>
    </div>
  );
};

export default InputEnter;
