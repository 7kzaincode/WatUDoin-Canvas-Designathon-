import { useState } from 'react';
import { Search, MapPin, Clock, Users, Calendar } from 'lucide-react';
import { Event, Screen } from '../App';
import { EventPinPopup } from './EventPinPopup';
import { GooseIcon } from './GooseMascot';

interface MapHomeScreenProps {
  onNavigate: (screen: Screen, data?: any) => void;
}

const categories = ['All', 'Social', 'Academic', 'Wellness', 'Sports', 'Clubs'];

const events: Event[] = [
  {
    id: '1',
    title: 'Blueprint Canvas Designathon 2025',
    host: 'UW Blueprint',
    time: 'Today, 2PM - 6PM',
    distance: '0.3 km',
    category: 'Club Events',
    description: 'Join us for a day of design, creativity, and social impact! Work with non-profits to create meaningful solutions.',
    location: 'E5 Engineering Building',
    attendees: 45,
    position: { x: 45, y: 55 },
    image: 'https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?w=800',
  },
  {
    id: '2',
    title: 'Poetry on the Grass',
    host: 'UW Poetry Club',
    time: '30 min',
    distance: '0.2 km',
    category: 'Social',
    description: 'Open mic poetry session on the arts quad. Bring your poems or just come listen!',
    location: 'Arts Quad',
    attendees: 18,
    position: { x: 30, y: 35 },
  },
  {
    id: '3',
    title: 'Volleyball Open Gym',
    host: 'UW Athletics',
    time: '1 hr',
    distance: '0.4 km',
    category: 'Wellness',
    description: 'Drop-in volleyball. All skill levels welcome!',
    location: 'CIF Gym',
    attendees: 12,
    position: { x: 70, y: 45 },
  },
  {
    id: '4',
    title: 'Study Group - CS 246',
    host: 'Zain Khan',
    time: 'Now',
    distance: '0.1 km',
    category: 'Academic',
    description: 'Working through assignment 4 together. Join us!',
    location: 'MC Building, 3rd Floor',
    attendees: 6,
    position: { x: 55, y: 70 },
  },
  {
    id: '5',
    title: 'MSA Prayer Room',
    host: 'UW Muslim Students Association',
    time: '15 min',
    distance: '0.2 km',
    category: 'Wellness',
    description: 'Maghrib prayer in congregation',
    location: 'SLC Multi-Faith Room',
    attendees: 25,
    position: { x: 50, y: 30 },
  },
];

export function MapHomeScreen({ onNavigate }: MapHomeScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPin, setSelectedPin] = useState<Event | null>(null);

  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(e => e.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Academic': '#0066CC',
      'Social': '#00C853',
      'Wellness': '#7C4DFF',
      'Club Events': '#FF4081',
      'Sports': '#FF6B35',
    };
    return colors[category as keyof typeof colors] || '#0066CC';
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="px-4 pt-6 pb-3 bg-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <GooseIcon className="w-10 h-10" />
            <h1 className="text-[28px] logo-watudoin" style={{ color: '#000000' }}>WatUDoin</h1>
          </div>
          <button className="w-9 h-9 rounded-full bg-white border-2 border-black shadow-md flex items-center justify-center">
            <span className="text-[20px]">👤</span>
          </button>
        </div>
        
        <div className="relative mb-3">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#000000' }} />
          <input
            type="text"
            placeholder="What's happening on campus?"
            className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            style={{ fontSize: '15px' }}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors shadow-sm border-2 ${
                selectedCategory === cat
                  ? 'border-black bg-gray-100 text-black'
                  : 'bg-white text-black border-black hover:bg-gray-50'
              }`}
              style={{
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-white">
          {/* Map-like background - no grid, more organic */}
          
          {/* Main roads/paths - curved and more natural */}
          <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
            <path d="M 15% 12% Q 25% 8% 35% 12% T 55% 12% T 75% 12%" stroke="#000000" strokeWidth="8" fill="none" strokeLinecap="round" />
            <path d="M 38% 12% Q 38% 25% 38% 40% T 38% 65% T 38% 88%" stroke="#000000" strokeWidth="8" fill="none" strokeLinecap="round" />
            <path d="M 8% 58% Q 20% 55% 35% 58% T 65% 58% T 92% 58%" stroke="#000000" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M 63% 28% Q 63% 40% 63% 55% T 63% 72%" stroke="#000000" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M 20% 45% Q 30% 42% 45% 45%" stroke="#000000" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M 50% 25% Q 60% 22% 70% 25%" stroke="#000000" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
          
          {/* Straight paths for variety */}
          <div className="absolute top-[12%] left-[15%] right-[15%] h-2 bg-black rounded-full opacity-15" />
          <div className="absolute top-[12%] left-[38%] bottom-[12%] w-2 bg-black rounded-full opacity-15" />
          <div className="absolute top-[58%] left-[8%] right-[8%] h-2 bg-black rounded-full opacity-15" />
          <div className="absolute top-[28%] left-[63%] bottom-[28%] w-2 bg-black rounded-full opacity-15" />
          <div className="absolute top-[45%] left-[20%] right-[25%] h-1.5 bg-black rounded-full opacity-10" />
          <div className="absolute top-[25%] left-[50%] right-[20%] h-1.5 bg-black rounded-full opacity-10" />
          
          {/* Buildings with better detail - using gray and black */}
          <div className="absolute top-[18%] left-[22%] w-20 h-24 bg-gray-300 rounded-md opacity-80 shadow-md border-2 border-black">
            <div className="absolute inset-1 bg-gray-200 rounded-sm" />
            <div className="absolute top-2 left-2 right-2 h-1 bg-black rounded opacity-30" />
            <div className="absolute top-4 left-2 right-2 h-1 bg-black rounded opacity-30" />
            <div className="absolute top-6 left-2 right-2 h-1 bg-black rounded opacity-30" />
          </div>
          <div className="absolute top-[42%] left-[52%] w-24 h-28 bg-gray-300 rounded-md opacity-80 shadow-md border-2 border-black">
            <div className="absolute inset-1 bg-gray-200 rounded-sm" />
            <div className="absolute top-2 left-2 right-2 h-1 bg-black rounded opacity-30" />
            <div className="absolute top-4 left-2 right-2 h-1 bg-black rounded opacity-30" />
            <div className="absolute top-6 left-2 right-2 h-1 bg-black rounded opacity-30" />
            <div className="absolute top-8 left-2 right-2 h-1 bg-black rounded opacity-30" />
          </div>
          <div className="absolute top-[32%] left-[68%] w-16 h-20 bg-gray-300 rounded-md opacity-80 shadow-md border-2 border-black">
            <div className="absolute inset-1 bg-gray-200 rounded-sm" />
            <div className="absolute top-2 left-2 right-2 h-1 bg-black rounded opacity-30" />
            <div className="absolute top-4 left-2 right-2 h-1 bg-black rounded opacity-30" />
          </div>
          <div className="absolute top-[62%] left-[27%] w-20 h-26 bg-gray-300 rounded-md opacity-80 shadow-md border-2 border-black">
            <div className="absolute inset-1 bg-gray-200 rounded-sm" />
            <div className="absolute top-2 left-2 right-2 h-1 bg-black rounded opacity-30" />
            <div className="absolute top-4 left-2 right-2 h-1 bg-black rounded opacity-30" />
            <div className="absolute top-6 left-2 right-2 h-1 bg-black rounded opacity-30" />
          </div>
          <div className="absolute top-[22%] left-[42%] w-14 h-18 bg-gray-300 rounded-md opacity-80 shadow-md border-2 border-black">
            <div className="absolute inset-1 bg-gray-200 rounded-sm" />
            <div className="absolute top-2 left-2 right-2 h-1 bg-black rounded opacity-30" />
            <div className="absolute top-4 left-2 right-2 h-1 bg-black rounded opacity-30" />
          </div>
          <div className="absolute top-[50%] left-[15%] w-18 h-22 bg-gray-300 rounded-md opacity-80 shadow-md border-2 border-black">
            <div className="absolute inset-1 bg-gray-200 rounded-sm" />
            <div className="absolute top-2 left-2 right-2 h-1 bg-black rounded opacity-30" />
            <div className="absolute top-4 left-2 right-2 h-1 bg-black rounded opacity-30" />
            <div className="absolute top-6 left-2 right-2 h-1 bg-black rounded opacity-30" />
          </div>
          <div className="absolute top-[35%] left-[78%] w-12 h-16 bg-gray-300 rounded-md opacity-80 shadow-md border-2 border-black">
            <div className="absolute inset-1 bg-gray-200 rounded-sm" />
            <div className="absolute top-2 left-2 right-2 h-1 bg-black rounded opacity-30" />
            <div className="absolute top-4 left-2 right-2 h-1 bg-black rounded opacity-30" />
          </div>
          <div className="absolute top-[68%] left-[50%] w-16 h-20 bg-gray-300 rounded-md opacity-80 shadow-md border-2 border-black">
            <div className="absolute inset-1 bg-gray-200 rounded-sm" />
            <div className="absolute top-2 left-2 right-2 h-1 bg-black rounded opacity-30" />
            <div className="absolute top-4 left-2 right-2 h-1 bg-black rounded opacity-30" />
          </div>

          {/* Green spaces/parks - using light green */}
          <div className="absolute top-[5%] left-[5%] w-24 h-16 bg-green-100 rounded-lg opacity-60 border-2 border-black" />
          <div className="absolute top-[75%] left-[70%] w-20 h-14 bg-green-100 rounded-lg opacity-60 border-2 border-black" />
          
          {/* Water feature - using white with black border */}
          <div className="absolute top-[55%] left-[5%] w-16 h-12 bg-white rounded-full opacity-80 border-2 border-black" />
        </div>

        {filteredEvents.map((event) => {
          const color = getCategoryColor(event.category);
          return (
            <button
              key={event.id}
              onClick={() => setSelectedPin(event)}
              className="absolute transform -translate-x-1/2 -translate-y-full transition-transform hover:scale-110 z-10"
              style={{ left: `${event.position.x}%`, top: `${event.position.y}%` }}
            >
              <div className="flex flex-col items-center">
                <div 
                  className="w-11 h-11 rounded-full shadow-lg flex items-center justify-center relative"
                  style={{ backgroundColor: color }}
                >
                  <div className="w-3 h-3 bg-white rounded-full" />
                  <div 
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0"
                    style={{
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: `6px solid ${color}`,
                    }}
                  />
                </div>
              </div>
            </button>
          );
        })}

        <div className="absolute bottom-[20%] left-[50%] -translate-x-1/2">
          <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg" />
          <div className="absolute inset-0 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-75" />
        </div>
      </div>

      <div className="bg-white pt-4 pb-2 border-t border-gray-100 shadow-lg">
        <div className="px-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[18px]" style={{ fontWeight: 600, color: '#000000' }}>Nearby Events</h3>
            <button className="text-[14px]" style={{ color: '#000000', fontWeight: 500 }}>See all</button>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide -mx-4 px-4">
            {events.map((event) => {
              const color = getCategoryColor(event.category);
              const isDesignathon = event.id === '1';
              
              return (
                <button
                  key={event.id}
                  onClick={() => setSelectedPin(event)}
                  className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {isDesignathon && (
                    <div className="h-32 bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden border-b-2 border-black">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-black text-center">
                          <div className="text-[24px] mb-1" style={{ fontWeight: 700 }}>Blueprint</div>
                          <div className="text-[14px]">Canvas Designathon</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                        style={{ backgroundColor: color }}
                      >
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <h4 className="text-[15px] mb-1 line-clamp-2" style={{ fontWeight: 600, color: '#000000' }}>
                          {event.title}
                        </h4>
                        <p className="text-[13px]" style={{ color: '#000000' }}>{event.host}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-[13px]" style={{ color: '#000000' }}>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {event.attendees}
                      </span>
                    </div>
                    
                    {isDesignathon && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <span className="text-[12px] px-2 py-1 rounded-full border border-gray-300 bg-gray-100" style={{ color: '#000000', fontWeight: 500 }}>
                          Tech • Social Good
                        </span>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {selectedPin && (
        <EventPinPopup
          event={selectedPin}
          onClose={() => setSelectedPin(null)}
          onViewDetails={() => {
            onNavigate('eventDetails', selectedPin);
            setSelectedPin(null);
          }}
        />
      )}
    </div>
  );
}
