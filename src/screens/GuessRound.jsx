import { useState } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import PrimaryButton from '../components/PrimaryButton';
import TextInput from '../components/TextInput';
import GuessList from '../components/GuessList';
import Header from '../components/Header';

export default function GuessRound({ guessingPartner, receivingPartner, onComplete, isPartnerA }) {
  const [currentGuess, setCurrentGuess] = useState('');
  const [correctGuesses, setCorrectGuesses] = useState([]);

  const handleCorrect = () => {
    if (currentGuess.trim()) {
      const newGuesses = [...correctGuesses, currentGuess.trim()];
      setCorrectGuesses(newGuesses);
      setCurrentGuess('');

      if (newGuesses.length === 5) {
        setTimeout(() => {
          onComplete(newGuesses);
        }, 500);
      }
    }
  };

  const handleIncorrect = () => {
    setCurrentGuess('');
  };

  const remainingGuesses = 5 - correctGuesses.length;

  return (
    <>
      <Header title={`${guessingPartner} Guessing`} />
      <ScreenContainer>
        <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 lg:p-10 animate-slide-up border border-gray-100">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#282a3e] mb-2 text-center break-words">
              {guessingPartner} guessing for {receivingPartner}
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 bg-gray-200 rounded-full flex-1 max-w-xs">
                <div 
                  className="h-full bg-gradient-to-r from-[#ef6461] to-[#e04d4a] rounded-full transition-all duration-500"
                  style={{ width: `${(correctGuesses.length / 5) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#282a3e] min-w-[60px] text-center">
                {correctGuesses.length}/5
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 text-center">
              {isPartnerA ? 'Steps 1-3' : 'Steps 4-6'}
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#f1e4e8] to-[#f8f2f5] rounded-xl p-4 sm:p-5 mb-4 sm:mb-6 border border-[#ef6461]/30 shadow-sm">
            <h3 className="font-semibold text-[#282a3e] mb-3 sm:mb-4 text-xs sm:text-sm flex items-center gap-2">
              <span className="text-lg">📋</span>
              <span>Steps & Guidelines</span>
            </h3>
            <ol className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-[#282a3e]">
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[20px]">Step 1:</span>
              <span><strong>{guessingPartner}</strong> guesses what <strong>{receivingPartner}</strong> would like them to do in the coming week.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[20px]">Step 2:</span>
              <span><strong>{receivingPartner}</strong> responds &quot;Yes, that would be great!&quot; or &quot;No, not really. But good try&quot;.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 min-w-[20px]">Step 3:</span>
              <span><strong>{guessingPartner}</strong> keeps guessing until they have 5 correct guesses.</span>
            </li>
          </ol>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-[#282a3e] mb-2.5">
              Your guess:
            </label>
            <TextInput
              value={currentGuess}
              onChange={setCurrentGuess}
              placeholder="Type your guess here..."
              onKeyDown={(e) => {
                if (e.key === 'Enter' && currentGuess.trim()) {
                  // Don't auto-submit, let user choose Correct/Incorrect
                }
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <PrimaryButton
              onClick={handleCorrect}
              disabled={!currentGuess.trim() || correctGuesses.length >= 5}
              variant="success"
              className="flex-1 text-sm sm:text-base py-3.5"
            >
              ✓ Yes, that would be great!
            </PrimaryButton>
            <PrimaryButton
              onClick={handleIncorrect}
              disabled={!currentGuess.trim() || correctGuesses.length >= 5}
              variant="danger"
              className="flex-1 text-sm sm:text-base py-3.5"
            >
              ✗ No, not really. But good try
            </PrimaryButton>
          </div>

          {remainingGuesses > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <p className="text-sm font-medium text-blue-800">
                {remainingGuesses} more correct {remainingGuesses === 1 ? 'guess' : 'guesses'} needed
              </p>
            </div>
          )}
          
          {correctGuesses.length === 5 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center animate-fade-in">
              <p className="text-sm font-semibold text-green-800">
                🎉 Great! You&apos;ve collected all 5 correct guesses!
              </p>
            </div>
          )}
        </div>

        <GuessList 
          guesses={correctGuesses} 
          title="Correct guesses"
        />
      </div>
    </ScreenContainer>
    </>
  );
}
