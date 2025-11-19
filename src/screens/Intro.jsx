import ScreenContainer from '../components/ScreenContainer';
import PrimaryButton from '../components/PrimaryButton';
import Header from '../components/Header';

export default function Intro({ onStart }) {
  return (
    <>
      <Header title="Behavior Exchange" />
      <ScreenContainer>
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 animate-slide-up border border-gray-100 w-full max-w-5xl mx-auto">
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

          <div className="text-center relative mb-8">
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

          <div className="bg-gradient-to-br from-[#f1e4e8] to-[#f8f2f5] rounded-xl p-5 sm:p-6 mb-8 border border-[#ef6461]/30 shadow-sm">
            <h2 className="text-base sm:text-lg font-semibold text-[#282a3e] mb-4">How This Exercise Works</h2>
            
            <div className="space-y-4 text-sm text-[#282a3e] leading-relaxed">
              <p className="mb-4">
                <strong>Decide who would go first.</strong> The app will help you pick random cards - whoever gets a higher number card goes first!
              </p>

              <ol className="space-y-3 mb-4">
                <li className="flex items-start">
                  <span className="font-semibold mr-2 min-w-[80px] flex-shrink-0">Step 1:</span>
                  <span><strong>Enter your names</strong> - Both partners enter their names to get started.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2 min-w-[80px] flex-shrink-0">Step 2:</span>
                  <span><strong>Pick cards</strong> - The app will randomly pick cards for each partner. Higher card goes first!</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2 min-w-[80px] flex-shrink-0">Step 3:</span>
                  <span><strong>First partner guesses</strong> - The partner who goes first guesses what their partner would like them to do. The receiving partner responds &quot;Yes, that would be great!&quot; or &quot;No, not really. But good try&quot;.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2 min-w-[80px] flex-shrink-0">Step 4:</span>
                  <span><strong>Collect 5 correct guesses</strong> - The guessing partner continues until they have 5 correct guesses. The app automatically saves all correct guesses.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2 min-w-[80px] flex-shrink-0">Step 5:</span>
                  <span><strong>Switch roles</strong> - Now the other partner takes their turn to guess and collect 5 correct guesses.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2 min-w-[80px] flex-shrink-0">Step 6:</span>
                  <span><strong>Review your lists</strong> - Both partners review their complete lists of 5 actions each.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2 min-w-[80px] flex-shrink-0">Step 7:</span>
                  <span><strong>Make your commitment</strong> - Each partner selects one action from their list to commit to doing for their partner in the coming week.</span>
                </li>
              </ol>

              <div className="bg-white rounded-lg p-4 border border-gray-200 mt-4">
                <h3 className="font-semibold text-[#282a3e] mb-3">How it works in the app:</h3>
                <p className="mb-3 italic text-gray-700">
                  Let&apos;s say Partner A is Raj and Partner B is Soniya.
                </p>
                
                <div className="space-y-3 text-xs">
                  <div>
                    <p className="font-semibold mb-1">Step 1-2:</p>
                    <p className="ml-4">Raj and Soniya enter their names, then the app picks random cards. Raj gets card #8, Soniya gets card #3. Raj goes first!</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Step 3-4:</p>
                    <p className="ml-4">Raj types: &quot;I think you would like it if I cleaned our car this weekend.&quot;</p>
                    <p className="ml-4">Soniya clicks &quot;Yes, that would be great!&quot; - The app saves it automatically.</p>
                    <p className="ml-4 italic text-gray-600">OR</p>
                    <p className="ml-4">Soniya clicks &quot;No, not really. But good try&quot; - Raj tries again.</p>
                    <p className="ml-4">Raj continues until the app shows he has collected 5 correct guesses.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Step 5:</p>
                    <p className="ml-4">Now it&apos;s Soniya&apos;s turn. She types: &quot;I think you would appreciate it if I helped you with groceries&quot;.</p>
                    <p className="ml-4">Raj clicks &quot;Yes, that would be great!&quot; - The app saves it.</p>
                    <p className="ml-4">Soniya continues until she has 5 correct guesses saved.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Step 6-7:</p>
                    <p className="ml-4">Both partners review their lists of 5 actions. Each selects one to commit to, and the app shows their final commitments.</p>
                  </div>
                </div>
              </div>
            </div>
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

          <div className="text-center relative mt-8">
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

