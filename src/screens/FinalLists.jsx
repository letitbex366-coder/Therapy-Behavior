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
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 animate-slide-up border border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#282a3e] mb-3 text-center">
            Final Lists Review
          </h2>
          <p className="text-sm text-[#282a3e] text-center mb-6 leading-relaxed">
            Each partner picks one action from their list to commit to doing next week.
          </p>

          <div className="space-y-5 mb-6">
            <div className="bg-gradient-to-br from-[#f1e4e8] to-[#f8f2f5] rounded-xl p-5 sm:p-6 border border-[#ef6461]/30 shadow-sm">
              <h3 className="text-base font-semibold text-[#282a3e] mb-4 break-words">
                {partnerAName}&apos;s list of 5:
              </h3>
              <div className="space-y-2.5 mb-4">
                {partnerAList.map((item, index) => (
                  <div key={index} className="text-sm text-[#282a3e] bg-white rounded-lg p-3 border border-gray-200 break-words shadow-sm">
                    {index + 1}. {item}
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-[#ef6461] shadow-md">
                <label className="flex items-center gap-2 text-sm font-bold text-[#ef6461] mb-3 break-words">
                  <span className="text-lg">✨</span>
                  <span>{partnerAName}, choose one to commit to:</span>
                </label>
                <select
                  value={selectedA}
                  onChange={(e) => setSelectedA(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#ef6461] focus:border-[#ef6461] focus:ring-2 focus:ring-[#ef6461]/30 focus:outline-none transition-all bg-white text-[#282a3e] text-sm shadow-sm hover:shadow-md focus:shadow-md font-medium"
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

            <div className="bg-gradient-to-br from-[#f1e4e8] to-[#f8f2f5] rounded-xl p-5 sm:p-6 border border-[#ef6461]/30 shadow-sm">
              <h3 className="text-base font-semibold text-[#282a3e] mb-4 break-words">
                {partnerBName}&apos;s list of 5:
              </h3>
              <div className="space-y-2.5 mb-4">
                {partnerBList.map((item, index) => (
                  <div key={index} className="text-sm text-[#282a3e] bg-white rounded-lg p-3 border border-gray-200 break-words shadow-sm">
                    {index + 1}. {item}
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-[#ef6461] shadow-md">
                <label className="flex items-center gap-2 text-sm font-bold text-[#ef6461] mb-3 break-words">
                  <span className="text-lg">✨</span>
                  <span>{partnerBName}, choose one to commit to:</span>
                </label>
                <select
                  value={selectedB}
                  onChange={(e) => setSelectedB(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#ef6461] focus:border-[#ef6461] focus:ring-2 focus:ring-[#ef6461]/30 focus:outline-none transition-all bg-white text-[#282a3e] text-sm shadow-sm hover:shadow-md focus:shadow-md font-medium"
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
          className="w-full text-base py-3"
        >
          Show Summary
        </PrimaryButton>
      </div>
    </ScreenContainer>
    </>
  );
}
