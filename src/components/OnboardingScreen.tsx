import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { GooseMascot } from './GooseMascot';
import { UserProfile } from './EditProfileScreen';

interface OnboardingScreenProps {
  onComplete: (profile: UserProfile) => void;
}

const interests = [
  { id: 'tech', label: 'Tech', emoji: '💻', color: '#0066CC' },
  { id: 'sports', label: 'Sports', emoji: '⚽', color: '#FF6B35' },
  { id: 'arts', label: 'Arts', emoji: '🎨', color: '#7C4DFF' },
  { id: 'music', label: 'Music', emoji: '🎵', color: '#FF4081' },
  { id: 'food', label: 'Food', emoji: '🍕', color: '#FF6B35' },
  { id: 'gaming', label: 'Gaming', emoji: '🎮', color: '#0066CC' },
  { id: 'fitness', label: 'Fitness', emoji: '💪', color: '#00C853' },
  { id: 'reading', label: 'Reading', emoji: '📚', color: '#7C4DFF' },
  { id: 'photography', label: 'Photography', emoji: '📸', color: '#FF4081' },
  { id: 'social', label: 'Social Good', emoji: '🌍', color: '#00C853' },
];

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [step, setStep] = useState(0);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('');
  const [programYear, setProgramYear] = useState('');
  const [expectedGraduation, setExpectedGraduation] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  if (step === 0) {
    // Splash screen
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400 rounded-full" />
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-green-400 rounded-full" />
        </div>

        <div className="relative text-center">
          <div className="mb-8">
            <GooseMascot className="w-32 h-32 mx-auto" />
          </div>

          <h1 className="text-[36px] mb-3 logo-watudoin" style={{ fontWeight: 700 }}>
            <span style={{ color: '#FED34C' }}>WAT</span><span style={{ color: '#000000' }}>UDoin</span>
          </h1>
          <p className="text-[18px] mb-12 px-4" style={{ fontWeight: 500, color: '#000000' }}>
            Welcome! Let's see what's happening on campus today.
          </p>

          <button
            onClick={() => setStep(1)}
            className="px-8 py-4 rounded-full shadow-xl flex items-center gap-3 mx-auto transition-all hover:shadow-2xl hover:bg-gray-100 border-2 border-gray-300"
            style={{ backgroundColor: 'white', color: '#000000', fontSize: '17px', fontWeight: 600 }}
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-[13px] mt-8" style={{ fontWeight: 500, color: '#000000' }}>
            Connecting campus, one goose at a time.
          </p>
        </div>
      </div>
    );
  }

  if (step === 1) {
    // Profile information
    return (
      <div className="h-full flex flex-col bg-white">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="text-center mb-6">
            <GooseMascot className="w-20 h-20 mx-auto mb-4" />
            <h2 className="text-[28px] mb-2" style={{ fontWeight: 700, color: '#212529' }}>
              Let's set up your profile
            </h2>
            <p className="text-[15px]" style={{ color: '#6C757D' }}>
              Tell us about yourself
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[14px] mb-2" style={{ fontWeight: 600, color: '#212529' }}>
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                style={{ fontSize: '15px', color: '#000000' }}
              />
            </div>

            <div>
              <label className="block text-[14px] mb-2" style={{ fontWeight: 600, color: '#212529' }}>
                University Email *
              </label>
              <input
                type="email"
                placeholder="yourname@uwaterloo.ca"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                style={{ fontSize: '15px', color: '#000000' }}
              />
            </div>

            <div>
              <label className="block text-[14px] mb-2" style={{ fontWeight: 600, color: '#212529' }}>
                Program *
              </label>
              <input
                type="text"
                placeholder="e.g., Computer Engineering"
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                className="w-full px-4 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                style={{ fontSize: '15px', color: '#000000' }}
              />
            </div>

            <div>
              <label className="block text-[14px] mb-2" style={{ fontWeight: 600, color: '#212529' }}>
                Current Year/Term *
              </label>
              <input
                type="text"
                placeholder="e.g., 1A, 2B, 3rd Year"
                value={programYear}
                onChange={(e) => setProgramYear(e.target.value)}
                className="w-full px-4 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                style={{ fontSize: '15px', color: '#000000' }}
              />
            </div>

            <div>
              <label className="block text-[14px] mb-2" style={{ fontWeight: 600, color: '#212529' }}>
                Expected Graduation *
              </label>
              <input
                type="text"
                placeholder="e.g., 2029, Spring 2028"
                value={expectedGraduation}
                onChange={(e) => setExpectedGraduation(e.target.value)}
                className="w-full px-4 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                style={{ fontSize: '15px', color: '#000000' }}
              />
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100">
          <button
            onClick={() => setStep(2)}
            disabled={!fullName || !email.includes('@uwaterloo.ca') || !program || !programYear || !expectedGraduation}
            className="w-full py-4 rounded-2xl transition-all shadow-md disabled:opacity-50 hover:bg-gray-100 border-2 border-gray-300"
            style={{
              backgroundColor: 'white',
              color: '#000000',
              fontSize: '17px',
              fontWeight: 600,
            }}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  if (step === 2) {
    // Choose interests
    return (
      <div className="h-full flex flex-col bg-white">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="text-center mb-6">
            <h2 className="text-[28px] mb-3" style={{ fontWeight: 700, color: '#212529' }}>
              What are you interested in?
            </h2>
            <p className="text-[16px]" style={{ color: '#6C757D' }}>
              We'll show you relevant events and clubs
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            {interests.map((interest) => (
              <button
                key={interest.id}
                onClick={() => toggleInterest(interest.id)}
                className={`p-4 rounded-2xl border transition-all ${
                  selectedInterests.includes(interest.id)
                    ? 'border-black'
                    : 'border-gray-200'
                }`}
                style={{
                  backgroundColor: selectedInterests.includes(interest.id) 
                    ? interest.color 
                    : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (!selectedInterests.includes(interest.id)) {
                    e.currentTarget.style.backgroundColor = `${interest.color}15`;
                    e.currentTarget.style.borderColor = `${interest.color}40`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!selectedInterests.includes(interest.id)) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = '#E9ECEF';
                  }
                }}
              >
                <div className="text-[32px] mb-2">{interest.emoji}</div>
                <p 
                  className="text-[15px]" 
                  style={{ 
                    fontWeight: 600, 
                    color: selectedInterests.includes(interest.id) ? '#FFFFFF' : '#000000' 
                  }}
                >
                  {interest.label}
                </p>
                {selectedInterests.includes(interest.id) && (
                  <div className="mt-2">
                    <Check className="w-5 h-5 mx-auto" style={{ color: '#FFFFFF' }} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-100">
          <button
            onClick={() => onComplete({
              fullName,
              email,
              program,
              programYear,
              expectedGraduation,
              bio: '',
            })}
            disabled={selectedInterests.length === 0}
            className="w-full py-4 rounded-2xl transition-all shadow-md disabled:opacity-50 hover:bg-gray-100 border-2 border-gray-300 whitespace-nowrap overflow-hidden text-ellipsis"
            style={{
              backgroundColor: 'white',
              color: '#000000',
              fontSize: '17px',
              fontWeight: 600,
            }}
          >
            Start Exploring ({selectedInterests.length} selected)
          </button>
        </div>
      </div>
    );
  }

  return null;
}
