import { useState } from 'react';
import Intro from './screens/Intro';
import PartnerNames from './screens/PartnerNames';
import CardSelection from './screens/CardSelection';
import GuessRound from './screens/GuessRound';
import FinalLists from './screens/FinalLists';
import Commitments from './screens/Commitments';

function App() {
  const [step, setStep] = useState('intro');
  const [partnerAName, setPartnerAName] = useState('');
  const [partnerBName, setPartnerBName] = useState('');
  const [partnerAList, setPartnerAList] = useState([]);
  const [partnerBList, setPartnerBList] = useState([]);
  const [commitmentA, setCommitmentA] = useState('');
  const [commitmentB, setCommitmentB] = useState('');

  const handleStart = () => {
    setStep('names');
  };

  const handleNamesSubmit = (nameA, nameB) => {
    setPartnerAName(nameA);
    setPartnerBName(nameB);
    setStep('cards');
  };

  const handleCardSelectionComplete = (firstPartner, secondPartner) => {
    // firstPartner is the one who goes first (higher card)
    setPartnerAName(firstPartner);
    setPartnerBName(secondPartner);
    setStep('guessA');
  };

  const handlePartnerAComplete = (guesses) => {
    setPartnerAList(guesses);
    setStep('guessB');
  };

  const handlePartnerBComplete = (guesses) => {
    setPartnerBList(guesses);
    setStep('finalLists');
  };

  const handleCommitmentsSelected = (selectedA, selectedB) => {
    setCommitmentA(selectedA);
    setCommitmentB(selectedB);
    setStep('commitments');
  };

  const handleRestart = () => {
    setStep('intro');
    setPartnerAName('');
    setPartnerBName('');
    setPartnerAList([]);
    setPartnerBList([]);
    setCommitmentA('');
    setCommitmentB('');
  };

  return (
    <>
      {step === 'intro' && <Intro onStart={handleStart} />}
      {step === 'names' && <PartnerNames onContinue={handleNamesSubmit} />}
      {step === 'cards' && (
        <CardSelection
          partnerAName={partnerAName}
          partnerBName={partnerBName}
          onContinue={handleCardSelectionComplete}
        />
      )}
      {step === 'guessA' && (
        <GuessRound
          guessingPartner={partnerAName}
          receivingPartner={partnerBName}
          onComplete={handlePartnerAComplete}
          isPartnerA={true}
        />
      )}
      {step === 'guessB' && (
        <GuessRound
          guessingPartner={partnerBName}
          receivingPartner={partnerAName}
          onComplete={handlePartnerBComplete}
          isPartnerA={false}
        />
      )}
      {step === 'finalLists' && (
        <FinalLists
          partnerAName={partnerAName}
          partnerBName={partnerBName}
          partnerAList={partnerAList}
          partnerBList={partnerBList}
          onContinue={handleCommitmentsSelected}
        />
      )}
      {step === 'commitments' && (
        <Commitments
          partnerAName={partnerAName}
          partnerBName={partnerBName}
          commitmentA={commitmentA}
          commitmentB={commitmentB}
          onRestart={handleRestart}
        />
      )}
    </>
  );
}

export default App;
