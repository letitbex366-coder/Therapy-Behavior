import { useState } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import PrimaryButton from '../components/PrimaryButton';
import Header from '../components/Header';

export default function CardSelection({ partnerAName, partnerBName, onContinue }) {
  const [cardA, setCardA] = useState(null);
  const [cardB, setCardB] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const generateRandomCard = () => {
    return Math.floor(Math.random() * 10) + 1; // 1-10
  };

  const getCardName = (value) => {
    return value.toString();
  };

  const handlePickCards = () => {
    setIsFlipping(true);
    setShowResult(false);
    
    setTimeout(() => {
      let newCardA, newCardB;
      // Keep picking until we get different cards (avoid ties)
      do {
        newCardA = generateRandomCard();
        newCardB = generateRandomCard();
      } while (newCardA === newCardB);
      
      setCardA(newCardA);
      setCardB(newCardB);
      setIsFlipping(false);
      setShowResult(true);
    }, 800);
  };

  const handleContinue = () => {
    if (cardA !== null && cardB !== null) {
      // Determine who goes first based on cards
      let firstPartner = partnerAName;
      let secondPartner = partnerBName;
      
      if (cardB > cardA) {
        // Partner B has higher card, so they go first
        firstPartner = partnerBName;
        secondPartner = partnerAName;
      }
      
      onContinue(firstPartner, secondPartner);
    }
  };

  return (
    <>
      <Header title="Pick Your Cards" />
      <ScreenContainer>
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 animate-slide-up border border-gray-100 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#282a3e] mb-3 text-center">
            Who Goes First?
          </h2>
          <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
            Pick random cards — higher card starts!
          </p>

          <div className="bg-gradient-to-br from-[#f1e4e8] to-[#f8f2f5] rounded-xl p-5 sm:p-6 mb-6 border border-[#ef6461]/30 shadow-sm">
            <p className="text-sm text-[#282a3e] mb-6 text-center leading-relaxed">
              <strong>Decide who would go first.</strong> A fun way to decide could be by picking a card from a deck of playing cards. Whoever gets a higher number card goes first!
            </p>
            
            <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-6 flex-wrap items-center">
              {/* Partner A Card */}
              <div className="flex flex-col items-center w-full sm:w-auto">
                {cardA ? (
                  <div className={`w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-44 rounded-xl shadow-2xl flex flex-col items-center justify-center transition-all duration-500 transform bg-gradient-to-br from-white to-gray-50 border-2 sm:border-4 ${
                    isFlipping 
                      ? 'scale-95 border-gray-300' 
                      : cardA > cardB 
                      ? 'border-[#ef6461] scale-105 shadow-[#ef6461]/30' 
                      : 'border-gray-400 scale-100'
                  }`}>
                    {isFlipping ? (
                      <div className="w-full h-full bg-gradient-to-br from-[#282a3e] to-[#1a1c2e] rounded-lg flex items-center justify-center">
                        <div className="text-white text-4xl sm:text-5xl font-bold animate-pulse">?</div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full w-full px-2">
                        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#282a3e] mb-1 sm:mb-2">
                          {getCardName(cardA)}
                        </div>
                        <div className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-gray-500">
                          Card #{cardA}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-44 rounded-xl shadow-lg flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 border-2 sm:border-4 border-gray-300">
                    <span className="text-4xl sm:text-5xl text-gray-500">?</span>
                  </div>
                )}
                <p className="text-sm font-semibold text-[#282a3e] mt-3 text-center break-words">{partnerAName}</p>
              </div>

              {/* VS */}
              <div className="flex items-center w-full sm:w-auto justify-center my-2 sm:my-0">
                <div className="bg-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-md border-2 border-[#ef6461]">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#ef6461]">VS</span>
                </div>
              </div>

              {/* Partner B Card */}
              <div className="flex flex-col items-center w-full sm:w-auto">
                {cardB ? (
                  <div className={`w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-44 rounded-xl shadow-2xl flex flex-col items-center justify-center transition-all duration-500 transform bg-gradient-to-br from-white to-gray-50 border-2 sm:border-4 ${
                    isFlipping 
                      ? 'scale-95 border-gray-300' 
                      : cardB > cardA 
                      ? 'border-[#ef6461] scale-105 shadow-[#ef6461]/30' 
                      : 'border-gray-400 scale-100'
                  }`}>
                    {isFlipping ? (
                      <div className="w-full h-full bg-gradient-to-br from-[#282a3e] to-[#1a1c2e] rounded-lg flex items-center justify-center">
                        <div className="text-white text-4xl sm:text-5xl font-bold animate-pulse">?</div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full w-full px-2">
                        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#282a3e] mb-1 sm:mb-2">
                          {getCardName(cardB)}
                        </div>
                        <div className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-gray-500">
                          Card #{cardB}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-44 rounded-xl shadow-lg flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 border-2 sm:border-4 border-gray-300">
                    <span className="text-4xl sm:text-5xl text-gray-500">?</span>
                  </div>
                )}
                <p className="text-sm font-semibold text-[#282a3e] mt-3 text-center break-words">{partnerBName}</p>
              </div>
            </div>

            {!showResult && !isFlipping && (
              <div className="text-center">
                <PrimaryButton onClick={handlePickCards} className="w-full sm:w-auto px-8">
                  Pick Random Cards
                </PrimaryButton>
              </div>
            )}

            {showResult && (
              <div className="bg-white rounded-xl p-5 sm:p-6 border-2 border-[#ef6461] shadow-lg">
                <div className="text-center mb-5">
                  <div className="bg-gradient-to-br from-[#f1e4e8] to-[#f8f2f5] rounded-lg p-4 mb-4 border border-[#ef6461]/30">
                    <p className="text-sm font-semibold text-[#282a3e] mb-2 break-words">
                      {partnerAName}&apos;s card: <span className="text-[#ef6461] font-bold text-base">Card #{getCardName(cardA)}</span>
                    </p>
                    <p className="text-sm font-semibold text-[#282a3e] break-words">
                      {partnerBName}&apos;s card: <span className="text-[#ef6461] font-bold text-base">Card #{getCardName(cardB)}</span>
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#ef6461] to-[#e04d4a] rounded-lg p-4 mb-4">
                    <p className="text-base sm:text-lg font-bold text-white break-words">
                      {cardA > cardB 
                        ? `🎯 ${partnerAName} goes first!` 
                        : `🎯 ${partnerBName} goes first!`}
                    </p>
                  </div>
                </div>
                <PrimaryButton 
                  onClick={handleContinue} 
                  className="w-full text-base py-3"
                >
                  Begin Exercise
                </PrimaryButton>
              </div>
            )}

            {isFlipping && (
              <div className="text-center">
                <p className="text-sm text-gray-600 animate-pulse">Picking cards...</p>
              </div>
            )}
          </div>
        </div>
      </ScreenContainer>
    </>
  );
}

