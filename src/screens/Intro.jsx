import ScreenContainer from '../components/ScreenContainer';
import PrimaryButton from '../components/PrimaryButton';
import Header from '../components/Header';

export default function Intro({ onStart }) {
  return (
    <>
      <Header title="Behavior Exchange" />
      <ScreenContainer>
        <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 lg:p-10 animate-slide-up border border-gray-100">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#282a3e] mb-3 sm:mb-4 bg-gradient-to-r from-[#282a3e] to-[#ef6461] bg-clip-text text-transparent pb-1 leading-tight">
              Behavior Exchange
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#ef6461] to-[#e04d4a] mx-auto rounded-full"></div>
          </div>
          
          <div className="prose prose-sm max-w-none mb-6 sm:mb-8 text-[#282a3e] leading-relaxed">
            <p className="text-sm sm:text-base mb-3 sm:mb-4 text-gray-700">
              Through this exercise you will be able to deepen your understanding of what are those specific behaviours/actions that each would like from the other in the relationship, so that you feel loved, valued and more connected with each other.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#f1e4e8] to-[#f8f2f5] rounded-xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 border border-[#ef6461]/30 shadow-sm">
            <h2 className="text-base sm:text-lg font-semibold text-[#282a3e] mb-2 sm:mb-3">Goals and Benefits</h2>
            <p className="text-xs sm:text-sm text-[#282a3e] mb-2 sm:mb-3">
              It will help in strengthening your emotional bank account.
            </p>
            <p className="text-xs sm:text-sm text-[#282a3e] mb-2 sm:mb-3">
              When you build up positive interactions (quality time; giving compliments; helping with chores, etc) with your partner, you are making a deposit in your Emotional Bank Account.
            </p>
            <p className="text-xs sm:text-sm text-[#282a3e] mb-2 sm:mb-3">
              And when you have negative interactions (criticism, attacking in arguments, ignoring needs, etc) you are making a withdrawal.
            </p>
            <p className="text-xs sm:text-sm text-[#282a3e] mb-2 sm:mb-3">
              When the positive interactions are more than the negative ones, the emotional bank account is flourishing and you feel relaxed and safe in the relationship. Even if you have a fight, it doesn&apos;t feel too bad.
            </p>
            <p className="text-xs sm:text-sm text-[#282a3e] mb-2 sm:mb-3">
              When there are more negative interactions than the positive ones, partners tend to question each other&apos;s intentions and feel disconnected or even lonely.
            </p>
            <p className="text-xs sm:text-sm text-[#282a3e]">
              This exercise will help you in making more deposits in your emotional bank account.
            </p>
            <p className="text-xs sm:text-sm text-[#282a3e] mt-2 sm:mt-3">
              This behaviour exchange exercise is a form of 'turning towards each other'. Turning towards your partner means paying attention, understanding and responding to their needs and it's an important part of building a deeper connection.
            </p>
          </div>

          <div className="text-center">
            <PrimaryButton onClick={onStart} className="px-8 py-3.5 text-base shadow-lg hover:shadow-xl">
              Start Exercise →
            </PrimaryButton>
          </div>
        </div>
      </ScreenContainer>
    </>
  );
}

