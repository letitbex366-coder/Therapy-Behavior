import { useState } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import PrimaryButton from '../components/PrimaryButton';
import TextInput from '../components/TextInput';
import Header from '../components/Header';

export default function PartnerNames({ onContinue }) {
  const [partnerA, setPartnerA] = useState('');
  const [partnerB, setPartnerB] = useState('');

  // Validation function to allow only letters and spaces
  const handleNameChange = (setter) => (value) => {
    // Remove all characters that are not letters (including accented letters) or spaces
    const filteredValue = value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
    setter(filteredValue);
  };

  const handleContinue = () => {
    if (partnerA.trim() && partnerB.trim()) {
      onContinue(partnerA.trim(), partnerB.trim());
    }
  };

  return (
    <>
      <Header title="Partner Names" />
      <ScreenContainer>
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 animate-slide-up border border-gray-100 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#282a3e] mb-6 text-center">
            Enter Your Names
          </h2>
          
          <div className="space-y-5 mb-6">
            <div>
              <label className="block text-sm font-semibold text-[#282a3e] mb-2.5">
                Partner A Name
              </label>
              <TextInput
                value={partnerA}
                onChange={handleNameChange(setPartnerA)}
                placeholder="Enter Partner A's name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#282a3e] mb-2.5">
                Partner B Name
              </label>
              <TextInput
                value={partnerB}
                onChange={handleNameChange(setPartnerB)}
                placeholder="Enter Partner B's name"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#f1e4e8] to-[#f8f2f5] rounded-xl p-4 sm:p-5 mb-6 border border-[#ef6461]/30 shadow-sm">
            <p className="text-sm text-[#282a3e]">
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
