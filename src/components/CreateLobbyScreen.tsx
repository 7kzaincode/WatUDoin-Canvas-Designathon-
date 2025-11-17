import { useState } from 'react';
import { ArrowLeft, Coffee, Book, Dumbbell, PartyPopper, Gamepad2, Footprints, MapPin, Users, Sparkles } from 'lucide-react';
import { GooseIcon } from './GooseMascot';

interface CreateLobbyScreenProps {
  onBack: () => void;
}

const eventTypes = [
  { id: 'study', label: 'Study Session', icon: Book, color: '#0066CC', bgColor: '#0066CC' },
  { id: 'party', label: 'Party', icon: PartyPopper, color: '#FF4081', bgColor: '#FF4081' },
  { id: 'gym', label: 'Gym Meetup', icon: Dumbbell, color: '#FF6B35', bgColor: '#FF6B35' },
  { id: 'coffee', label: 'Coffee Run', icon: Coffee, color: '#00C853', bgColor: '#00C853' },
  { id: 'game', label: 'Game Night', icon: Gamepad2, color: '#7C4DFF', bgColor: '#7C4DFF' },
  { id: 'walk', label: 'Chill Walk', icon: Footprints, color: '#0066CC', bgColor: '#0066CC' },
];

const vibes = [
  { id: 'chill', label: 'Chill', color: '#7C4DFF', emoji: '😌' },
  { id: 'normal', label: 'Normal', color: '#00C853', emoji: '😊' },
  { id: 'hype', label: 'Hype', color: '#FF6B35', emoji: '🔥' },
];

const filterOptions = [
  { id: 'sameYear', label: 'Same year only', desc: 'Only students in your year' },
  { id: 'sameCourse', label: 'Course-restricted', desc: 'E.g., CS 246 students only' },
  { id: 'genderRestricted', label: 'Gender-restricted', desc: 'Optional privacy setting' },
];

export function CreateLobbyScreen({ onBack }: CreateLobbyScreenProps) {
  const [selectedType, setSelectedType] = useState('study');
  const [selectedVibe, setSelectedVibe] = useState('normal');
  const [capacity, setCapacity] = useState(5);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="px-4 pt-6 pb-3 bg-white border-b-2 border-black">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={onBack}>
            <ArrowLeft className="w-6 h-6" style={{ color: '#000000' }} />
          </button>
          <div className="flex items-center gap-2">
            <GooseIcon className="w-10 h-10" />
            <h1 className="text-[28px]" style={{ fontWeight: 700, color: '#000000' }}>Create Hangout</h1>
          </div>
        </div>
        <p className="text-[15px] pl-14" style={{ color: '#000000' }}>Set up a spontaneous lobby for others to join</p>
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        <div className="mb-6">
          <h3 className="text-[18px] mb-3" style={{ fontWeight: 600, color: '#212529' }}>Event Type</h3>
          <div className="grid grid-cols-2 gap-3">
            {eventTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = selectedType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-4 rounded-2xl border-2 transition-colors ${
                    isSelected ? 'shadow-md' : 'shadow-sm hover:bg-gray-50'
                  }`}
                  style={{
                    borderColor: isSelected ? type.color : '#E9ECEF',
                    backgroundColor: isSelected ? `${type.color}15` : 'white',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-sm transition-colors"
                    style={{ backgroundColor: isSelected ? type.color : '#F1F3F5' }}
                  >
                    <Icon className="w-6 h-6 transition-colors" style={{ color: isSelected ? 'white' : type.color }} />
                  </div>
                  <p className="text-[14px] text-center" style={{ fontWeight: 600, color: '#000000' }}>
                    {type.label}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5" style={{ color: '#7C4DFF' }} />
            <h3 className="text-[18px]" style={{ fontWeight: 600, color: '#000000' }}>Vibe</h3>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {vibes.map((vibe) => (
              <button
                key={vibe.id}
                onClick={() => setSelectedVibe(vibe.id)}
                className={`py-4 rounded-2xl transition-colors shadow-sm ${
                  selectedVibe === vibe.id ? 'shadow-md' : 'hover:bg-gray-50'
                }`}
                style={{
                  backgroundColor: selectedVibe === vibe.id ? `${vibe.color}15` : 'white',
                  color: '#000000',
                  border: `2px solid ${selectedVibe === vibe.id ? vibe.color : '#E9ECEF'}`,
                  fontWeight: 600,
                  fontSize: '15px',
                }}
              >
                <div className="text-[24px] mb-1">{vibe.emoji}</div>
                {vibe.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5" style={{ color: '#000000' }} />
            <h3 className="text-[18px]" style={{ fontWeight: 600, color: '#000000' }}>Capacity</h3>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-gray-200 rounded-2xl">
            <button
              onClick={() => setCapacity(Math.max(2, capacity - 1))}
              className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full shadow-md hover:shadow-lg hover:border-blue-400 transition-all"
              style={{ fontSize: '20px', fontWeight: 600, color: '#000000' }}
            >
              −
            </button>
            <div className="flex-1 text-center">
              <span className="text-[32px]" style={{ fontWeight: 700, color: '#0066CC' }}>{capacity}</span>
              <span className="text-[16px] ml-2" style={{ color: '#6C757D', fontWeight: 500 }}>people</span>
            </div>
            <button
              onClick={() => setCapacity(Math.min(20, capacity + 1))}
              className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full shadow-md hover:shadow-lg hover:border-blue-400 transition-all"
              style={{ fontSize: '20px', fontWeight: 600, color: '#000000' }}
            >
              +
            </button>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5" style={{ color: '#000000' }} />
            <h3 className="text-[18px]" style={{ fontWeight: 600, color: '#000000' }}>Location</h3>
          </div>
          <div className="relative h-48 bg-white rounded-2xl overflow-hidden border-2 border-black">
            {/* Map-like features */}
            <div className="absolute inset-0">
              {/* Roads/paths */}
              <div className="absolute top-[20%] left-0 right-0 h-3 bg-black opacity-20 rounded-full" />
              <div className="absolute top-[50%] left-0 right-0 h-2 bg-black opacity-15 rounded-full" />
              <div className="absolute top-[75%] left-0 right-0 h-2 bg-black opacity-15 rounded-full" />
              <div className="absolute top-0 bottom-0 left-[30%] w-3 bg-black opacity-20 rounded-full" />
              <div className="absolute top-0 bottom-0 left-[60%] w-2 bg-black opacity-15 rounded-full" />
              
              {/* Buildings */}
              <div className="absolute top-[10%] left-[10%] w-16 h-20 bg-gray-300 border-2 border-black rounded-md opacity-80" />
              <div className="absolute top-[40%] left-[45%] w-20 h-24 bg-gray-300 border-2 border-black rounded-md opacity-80" />
              <div className="absolute top-[65%] left-[70%] w-14 h-18 bg-gray-300 border-2 border-black rounded-md opacity-80" />
              <div className="absolute top-[25%] left-[75%] w-12 h-16 bg-gray-300 border-2 border-black rounded-md opacity-80" />

              {/* Green spaces */}
              <div className="absolute top-[5%] left-[50%] w-20 h-12 bg-green-100 border-2 border-black rounded-lg opacity-60" />
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center border-2 border-black"
                style={{ backgroundColor: '#FF4081' }}
              >
                <MapPin className="w-8 h-8 text-white" fill="white" />
              </div>
            </div>

            <button
              className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-white border-2 border-gray-300 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 hover:border-blue-400 transition-all"
              style={{ fontSize: '14px', fontWeight: 600, color: '#000000' }}
            >
              Choose on Map
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-[18px] mb-3" style={{ fontWeight: 600, color: '#000000' }}>
            Optional Filters
          </h3>
          <div className="space-y-3">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`w-full p-4 rounded-2xl border-2 text-left transition-colors ${
                  selectedFilters.includes(filter.id) ? 'shadow-md' : 'shadow-sm hover:bg-gray-50'
                }`}
                style={{
                  borderColor: selectedFilters.includes(filter.id) ? '#0066CC' : '#E9ECEF',
                  backgroundColor: selectedFilters.includes(filter.id) ? '#0066CC15' : 'white',
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-[15px] mb-1" style={{ fontWeight: 600, color: '#000000' }}>
                      {filter.label}
                    </p>
                    <p className="text-[13px]" style={{ color: '#000000' }}>
                      {filter.desc}
                    </p>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ml-3`}
                    style={{
                      borderColor: selectedFilters.includes(filter.id) ? '#0066CC' : '#E9ECEF',
                      backgroundColor: selectedFilters.includes(filter.id) ? '#0066CC' : 'white',
                    }}
                  >
                    {selectedFilters.includes(filter.id) && (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 bg-white border-t border-gray-100 shadow-lg">
        <button
          className="w-full py-4 rounded-2xl transition-all shadow-md border-2 hover:bg-gray-100 hover:border-gray-400 whitespace-nowrap"
          style={{
            backgroundColor: 'white',
            borderColor: '#E9ECEF',
            color: '#000000',
            fontSize: '17px',
            fontWeight: 600,
          }}
        >
          Create Hangout
        </button>
      </div>
    </div>
  );
}
