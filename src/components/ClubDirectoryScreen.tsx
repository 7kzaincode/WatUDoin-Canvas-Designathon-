import { useState } from 'react';
import { Search, Users, Star } from 'lucide-react';
import { Club, Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { GooseIcon } from './GooseMascot';

interface ClubDirectoryScreenProps {
  onNavigate: (screen: Screen, data?: any) => void;
}

const categories = ['All', 'Tech', 'Culture', 'Sports', 'Social Good', 'Arts'];

const clubs: Club[] = [
  {
    id: '1',
    name: 'UW Blueprint',
    description: 'Tech for social good. We build software for non-profits and social enterprises to create meaningful impact.',
    category: 'Tech',
    members: 85,
    image: 'https://images.unsplash.com/photo-1675495666589-94cdafbcfcc8?w=800',
    meetingSchedule: 'Tuesdays 6:30 PM - 8:30 PM',
    socials: [
      { platform: 'Instagram', handle: '@uwblueprint' },
      { platform: 'Website', handle: 'uwblueprint.org' },
    ],
    upcomingEvents: [],
  },
  {
    id: '2',
    name: 'UW Poetry Club',
    description: 'A community for poets and poetry lovers. Share your work, attend open mics, and celebrate the written word.',
    category: 'Arts',
    members: 62,
    image: 'https://images.unsplash.com/photo-1500381457785-20c97a29c78e?w=800',
    meetingSchedule: 'Thursdays 7:00 PM',
    socials: [
      { platform: 'Instagram', handle: '@uwpoetry' },
    ],
    upcomingEvents: [],
  },
  {
    id: '3',
    name: 'UW Robotics Team',
    description: 'Design, build, and compete with robots. Open to all engineering students passionate about robotics.',
    category: 'Tech',
    members: 120,
    image: 'https://images.unsplash.com/photo-1581092335331-5e00ac65e934?w=800',
    meetingSchedule: 'Wednesdays 7:00 PM',
    socials: [
      { platform: 'Instagram', handle: '@waterloorobotics' },
    ],
    upcomingEvents: [],
  },
  {
    id: '4',
    name: 'Muslim Students Association',
    description: 'Building community, fostering faith, and creating an inclusive space for Muslim students on campus.',
    category: 'Culture',
    members: 450,
    image: 'https://images.unsplash.com/photo-1637918475815-99a2dc80bb9c?w=800',
    meetingSchedule: 'Daily prayers + Weekly events',
    socials: [
      { platform: 'Instagram', handle: '@uwmsa' },
      { platform: 'Website', handle: 'uwmsa.com' },
    ],
    upcomingEvents: [],
  },
  {
    id: '5',
    name: 'Photography Association',
    description: 'Capture moments, learn techniques, and explore photography together. All skill levels welcome!',
    category: 'Arts',
    members: 95,
    image: 'https://images.unsplash.com/photo-1752649938189-25651a4040fe?w=800',
    meetingSchedule: 'Bi-weekly Sundays 2:00 PM',
    socials: [
      { platform: 'Instagram', handle: '@uwphoto' },
    ],
    upcomingEvents: [],
  },
  {
    id: '6',
    name: 'Dance Collective',
    description: 'Express yourself through movement. Hip hop, contemporary, and more. No experience needed!',
    category: 'Arts',
    members: 78,
    image: 'https://images.unsplash.com/photo-1686435386310-92ee42a3580f?w=800',
    meetingSchedule: 'Mondays & Thursdays 7:30 PM',
    socials: [
      { platform: 'Instagram', handle: '@uwdance' },
    ],
    upcomingEvents: [],
  },
];

export function ClubDirectoryScreen({ onNavigate }: ClubDirectoryScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>(['1']);

  const filteredClubs = clubs.filter(club => {
    const matchesCategory = selectedCategory === 'All' || club.category === selectedCategory;
    const matchesSearch = club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          club.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (clubId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev =>
      prev.includes(clubId)
        ? prev.filter(id => id !== clubId)
        : [...prev, clubId]
    );
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="px-4 pt-6 pb-3 bg-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <GooseIcon className="w-10 h-10" />
            <h1 className="text-[28px]" style={{ fontWeight: 700, color: '#000000' }}>ClubSync</h1>
          </div>
        </div>
        
        <div className="relative mb-3">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#000000' }} />
          <input
            type="text"
            placeholder="Search clubs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="grid grid-cols-1 gap-4 pt-2">
          {filteredClubs.map((club) => (
            <button
              key={club.id}
              onClick={() => onNavigate('clubProfile', club)}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden text-left transition-all"
              style={{ backgroundColor: 'transparent' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F8F9FA';
                e.currentTarget.style.borderColor = '#DEE2E6';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = '#E9ECEF';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div className="relative h-48">
                {club.id === '1' ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative p-4">
                    <img
                      src="/blueprintlogo.png"
                      alt="UW Blueprint Logo"
                      className="h-full w-auto object-contain max-w-full"
                      style={{ backgroundColor: 'transparent' }}
                    />
                  </div>
                ) : (
                  <ImageWithFallback
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={(e) => toggleFavorite(club.id, e)}
                  className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform border-2 border-black"
                >
                  <Star
                    className="w-5 h-5"
                    style={{
                      color: favorites.includes(club.id) ? '#FF4081' : '#000000',
                      fill: favorites.includes(club.id) ? '#FF4081' : 'none',
                    }}
                  />
                </button>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white text-[18px] mb-1" style={{ fontWeight: 600 }}>
                    {club.name}
                  </h3>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-[14px] mb-3 line-clamp-2" style={{ color: '#000000' }}>
                  {club.description}
                </p>
                
                <div className="flex items-center justify-between mb-3">
                  <span 
                    className="px-3 py-1.5 rounded-full text-[13px]"
                    style={{ 
                      backgroundColor: club.category === 'Tech' ? '#0066CC' : 
                                      club.category === 'Arts' ? '#7C4DFF' :
                                      club.category === 'Sports' ? '#FF6B35' :
                                      club.category === 'Social Good' ? '#00C853' :
                                      club.category === 'Culture' ? '#FF4081' : '#0066CC',
                      color: 'white',
                      fontWeight: 500,
                    }}
                  >
                    {club.category}
                  </span>
                  <div className="flex items-center gap-1.5" style={{ color: '#000000' }}>
                    <Users className="w-4 h-4" />
                    <span className="text-[13px]" style={{ fontWeight: 500 }}>
                      {club.members} members
                    </span>
                  </div>
                </div>
                
                {/* Stats section - same as Blueprint */}
                <div className="flex gap-4 pt-3 border-t-2 border-black">
                  <div className="flex-1 text-center">
                    <p className="text-[20px] mb-0.5" style={{ fontWeight: 700, color: '#000000' }}>
                      {club.id === '1' ? '3' : club.id === '2' ? '2' : club.id === '3' ? '5' : club.id === '4' ? '8' : club.id === '5' ? '1' : '4'}
                    </p>
                    <p className="text-[11px]" style={{ color: '#000000', fontWeight: 500 }}>Events</p>
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-[20px] mb-0.5" style={{ fontWeight: 700, color: '#000000' }}>
                      {club.id === '1' ? '12' : club.id === '2' ? '8' : club.id === '3' ? '15' : club.id === '4' ? '20' : club.id === '5' ? '5' : '10'}
                    </p>
                    <p className="text-[11px]" style={{ color: '#000000', fontWeight: 500 }}>Active</p>
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-[20px] mb-0.5" style={{ fontWeight: 700, color: '#000000' }}>
                      {club.id === '1' ? '85' : club.id === '2' ? '62' : club.id === '3' ? '120' : club.id === '4' ? '450' : club.id === '5' ? '95' : '78'}
                    </p>
                    <p className="text-[11px]" style={{ color: '#000000', fontWeight: 500 }}>Members</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 pb-4 pt-3 bg-white border-t border-gray-100 shadow-lg">
        <button
          onClick={() => onNavigate('myClubs')}
          className="w-full py-3.5 rounded-2xl transition-all shadow-md border-2 hover:bg-gray-100 hover:border-gray-400 whitespace-nowrap overflow-hidden text-ellipsis"
          style={{
            backgroundColor: 'white',
            borderColor: '#E9ECEF',
            color: '#000000',
            fontSize: '15px',
            fontWeight: 600,
          }}
        >
          View My Clubs ({favorites.length})
        </button>
      </div>
    </div>
  );
}
