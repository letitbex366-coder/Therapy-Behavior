import { useState } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import PrimaryButton from '../components/PrimaryButton';
import Header from '../components/Header';

export default function FinalLists({ partnerAName, partnerBName, partnerAList, partnerBList, onContinue }) {
  const [selectedA, setSelectedA] = useState('');
  const [selectedB, setSelectedB] = useState('');

  const handleContinue = () => {
    if (selectedA && selectedB) {
      onContinue(selectedA, selectedB);
    }
  };

  return (
    <>
      <Header title="Final Lists Review" />
      <ScreenContainer>
        <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 md:p-8 lg:p-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#282a3e] mb-4 sm:mb-6 text-center">
            Final Lists Review
          </h2>
          <p className="text-[#282a3e] text-center mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm">
            Step 7: Each partner picks one action from their list to commit to doing next week.
          </p>

          <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-6">
            <div className="bg-[#f1e4e8] rounded-xl p-4 sm:p-5 border border-[#ef6461]/30">
              <h3 className="text-base sm:text-lg font-semibold text-[#282a3e] mb-3 sm:mb-4 break-words">
                {partnerAName}&apos;s list of 5:
              </h3>
              <div className="space-y-2 mb-3 sm:mb-4">
                {partnerAList.map((item, index) => (
                  <div key={index} className="text-xs sm:text-sm text-[#282a3e] bg-white rounded-lg p-2 sm:p-3 border border-gray-200 break-words">
                    {index + 1}. {item}
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#282a3e] mb-2 break-words">
                  {partnerAName}, choose one to commit to:
                </label>
                <select
                  value={selectedA}
                  onChange={(e) => setSelectedA(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:border-[#ef6461] focus:ring-2 focus:ring-[#ef6461]/20 focus:outline-none transition-all bg-white text-[#282a3e] text-sm sm:text-base"
                >
                  <option value="">Select an action...</option>
                  {partnerAList.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="bg-[#f1e4e8] rounded-xl p-4 sm:p-5 border border-[#ef6461]/30">
              <h3 className="text-base sm:text-lg font-semibold text-[#282a3e] mb-3 sm:mb-4 break-words">
                {partnerBName}&apos;s list of 5:
              </h3>
              <div className="space-y-2 mb-3 sm:mb-4">
                {partnerBList.map((item, index) => (
                  <div key={index} className="text-xs sm:text-sm text-[#282a3e] bg-white rounded-lg p-2 sm:p-3 border border-gray-200 break-words">
                    {index + 1}. {item}
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-[#282a3e] mb-2 break-words">
                  {partnerBName}, choose one to commit to:
                </label>
                <select
                  value={selectedB}
                  onChange={(e) => setSelectedB(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:border-[#ef6461] focus:ring-2 focus:ring-[#ef6461]/20 focus:outline-none transition-all bg-white text-[#282a3e] text-sm sm:text-base"
                >
                  <option value="">Select an action...</option>
                  {partnerBList.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

        <PrimaryButton
          onClick={handleContinue}
          disabled={!selectedA || !selectedB}
          className="w-full"
        >
          Show Summary
        </PrimaryButton>
      </div>
    </ScreenContainer>
    </>
  );
}
