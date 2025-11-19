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
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 animate-slide-up border border-gray-100 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#282a3e] mb-5 text-center">
            Final Commitment
          </h2>

          <div className="space-y-5 mb-6">
            <div className="bg-gradient-to-br from-[#f1e4e8] to-[#f8f2f5] rounded-xl p-5 sm:p-6 border border-[#ef6461]/30 shadow-sm">
              <h3 className="text-base font-bold text-[#ef6461] mb-3 break-words flex items-center gap-2">
                <span className="text-base">✨</span>
                <span>What {partnerAName} commits to:</span>
              </h3>
              <p className="text-sm text-[#282a3e] bg-white rounded-lg p-4 border border-gray-200 break-words shadow-sm leading-relaxed">
                {commitmentA}
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#f1e4e8] to-[#f8f2f5] rounded-xl p-5 sm:p-6 border border-[#ef6461]/30 shadow-sm">
              <h3 className="text-base font-bold text-[#ef6461] mb-3 break-words flex items-center gap-2">
                <span className="text-base">✨</span>
                <span>What {partnerBName} commits to:</span>
              </h3>
              <p className="text-sm text-[#282a3e] bg-white rounded-lg p-4 border border-gray-200 break-words shadow-sm leading-relaxed">
                {commitmentB}
              </p>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5 sm:p-6 mb-6 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="text-2xl sm:text-3xl">💚</span>
              <p className="text-sm text-green-800 leading-relaxed flex-1">
                <strong>Remember:</strong> Small, consistent actions can make a big difference in your relationship. Try to practice these behaviors regularly and check in with each other about your progress.
              </p>
            </div>
          </div>

          <div className="text-center">
            <PrimaryButton onClick={onRestart} variant="secondary" className="w-full sm:w-auto px-8 py-3 text-base">
              Restart Exercise
            </PrimaryButton>
          </div>
        </div>
      </ScreenContainer>
    </>
  );
}
