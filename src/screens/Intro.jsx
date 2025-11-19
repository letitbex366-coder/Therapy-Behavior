import ScreenContainer from '../components/ScreenContainer';
import PrimaryButton from '../components/PrimaryButton';
import Header from '../components/Header';

export default function Intro({ onStart }) {
  return (
    <>
      <Header title="Behavior Exchange" />
      <ScreenContainer>
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 animate-slide-up border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#282a3e] mb-4 bg-gradient-to-r from-[#282a3e] to-[#ef6461] bg-clip-text text-transparent pb-1 leading-normal">
              Behavior Exchange
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#ef6461] to-[#e04d4a] mx-auto rounded-full"></div>
          </div>
          
          <div className="mb-8">
            <p className="text-sm leading-relaxed text-gray-700 text-center">
              Through this exercise you will be able to deepen your understanding of what are those specific behaviours/actions that each would like from the other in the relationship, so that you feel loved, valued and more connected with each other.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#f1e4e8] to-[#f8f2f5] rounded-xl p-5 sm:p-6 mb-8 border border-[#ef6461]/30 shadow-sm">
            <h2 className="text-base sm:text-lg font-semibold text-[#282a3e] mb-3">Goals and Benefits</h2>
            <p className="text-sm text-[#282a3e] mb-3">
              It will help in strengthening your emotional bank account.
            </p>
            <p className="text-sm text-[#282a3e] mb-3">
              When you build up positive interactions (quality time; giving compliments; helping with chores, etc) with your partner, you are making a deposit in your Emotional Bank Account.
            </p>
            <p className="text-sm text-[#282a3e] mb-3">
              And when you have negative interactions (criticism, attacking in arguments, ignoring needs, etc) you are making a withdrawal.
            </p>
            <p className="text-sm text-[#282a3e] mb-3">
              When the positive interactions are more than the negative ones, the emotional bank account is flourishing and you feel relaxed and safe in the relationship. Even if you have a fight, it doesn&apos;t feel too bad.
            </p>
            <p className="text-sm text-[#282a3e] mb-3">
              When there are more negative interactions than the positive ones, partners tend to question each other&apos;s intentions and feel disconnected or even lonely.
            </p>
            <p className="text-sm text-[#282a3e] mb-3">
              This exercise will help you in making more deposits in your emotional bank account.
            </p>
            <p className="text-sm text-[#282a3e] mt-3">
              This behaviour exchange exercise is a form of &apos;turning towards each other&apos;. Turning towards your partner means paying attention, understanding and responding to their needs and it&apos;s an important part of building a deeper connection.
            </p>
          </div>

          <div className="text-center relative">
            <div className="group relative inline-block">
              <PrimaryButton onClick={onStart} className="px-8 py-3 text-base shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
                <span className="text-xl animate-bounce">👆</span>
                <span>Start Exercise</span>
                <span className="text-lg">→</span>
              </PrimaryButton>
              
              {/* Tooltip/Popover */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                <div className="bg-[#282a3e] text-white text-sm px-4 py-2.5 rounded-lg shadow-xl whitespace-nowrap relative">
                  <div className="flex items-center gap-2">
                    <span className="text-base">👆</span>
                    <span>Click here to start the exercise</span>
                  </div>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                    <div className="border-4 border-transparent border-t-[#282a3e]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScreenContainer>
    </>
  );
}

