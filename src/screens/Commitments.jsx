import ScreenContainer from '../components/ScreenContainer';
import PrimaryButton from '../components/PrimaryButton';
import Header from '../components/Header';

export default function Commitments({
  partnerAName,
  partnerBName,
  commitmentA,
  commitmentB,
  onRestart
}) {
  return (
    <>
      <Header title="Final Commitment" />
      <ScreenContainer>
        <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 md:p-8 lg:p-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#282a3e] mb-4 sm:mb-6 text-center">
            Final Commitment
          </h2>

          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            <div className="bg-[#f1e4e8] rounded-xl p-4 sm:p-5 md:p-6 border border-[#ef6461]/30">
              <h3 className="text-base sm:text-lg font-semibold text-[#282a3e] mb-2 sm:mb-3 break-words">
                What {partnerAName} commits to:
              </h3>
              <p className="text-sm sm:text-base text-[#282a3e] italic bg-white rounded-lg p-3 sm:p-4 border border-gray-200 break-words">
                &quot;{commitmentA}&quot;
              </p>
            </div>

            <div className="bg-[#f1e4e8] rounded-xl p-4 sm:p-5 md:p-6 border border-[#ef6461]/30">
              <h3 className="text-base sm:text-lg font-semibold text-[#282a3e] mb-2 sm:mb-3 break-words">
                What {partnerBName} commits to:
              </h3>
              <p className="text-sm sm:text-base text-[#282a3e] italic bg-white rounded-lg p-3 sm:p-4 border border-gray-200 break-words">
                &quot;{commitmentB}&quot;
              </p>
            </div>
          </div>

          <div className="text-center">
            <PrimaryButton onClick={onRestart} variant="secondary" className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
              Restart Exercise
            </PrimaryButton>
          </div>
        </div>
      </ScreenContainer>
    </>
  );
}
