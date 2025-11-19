import { useState } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import PrimaryButton from '../components/PrimaryButton';
import TextInput from '../components/TextInput';
import Header from '../components/Header';

export default function PartnerNames({ onContinue }) {
  const [partnerA, setPartnerA] = useState('');
  const [partnerB, setPartnerB] = useState('');

  const handleContinue = () => {
    if (partnerA.trim() && partnerB.trim()) {
      onContinue(partnerA.trim(), partnerB.trim());
    }
  };

  return (
    <>
      <Header title="Partner Names" />
      <ScreenContainer>
        <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 md:p-8 lg:p-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#282a3e] mb-4 sm:mb-6 text-center">
            Enter Your Names
          </h2>
          
          <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-6">
            <div>
              <label className="block text-sm font-medium text-[#282a3e] mb-2">
                Partner A Name
              </label>
              <TextInput
                value={partnerA}
                onChange={setPartnerA}
                placeholder="Enter Partner A's name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#282a3e] mb-2">
                Partner B Name
              </label>
              <TextInput
                value={partnerB}
                onChange={setPartnerB}
                placeholder="Enter Partner B's name"
              />
            </div>
          </div>

          <div className="bg-[#f1e4e8] rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-[#ef6461]/30">
            <p className="text-xs sm:text-sm text-[#282a3e]">
              You&apos;ll pick cards next to decide who goes first!
            </p>
          </div>

          <PrimaryButton
            onClick={handleContinue}
            disabled={!partnerA.trim() || !partnerB.trim()}
            className="w-full"
          >
            Continue
          </PrimaryButton>
        </div>
      </ScreenContainer>
    </>
  );
}
