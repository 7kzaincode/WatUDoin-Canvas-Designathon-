import { ArrowLeft, MapPin, Clock, Calendar, Star, Instagram, Globe, Users } from 'lucide-react';
import { Club } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ClubProfileScreenProps {
  club: Club | null;
  onBack: () => void;
}

const upcomingEvents = [
  {
    id: '1',
    title: 'Blueprint Team Meeting',
    date: 'Nov 20, 2025',
    time: '6:30 PM',
    location: 'E7 5343',
  },
  {
    id: '2',
    title: 'Workshop: Intro to React',
    date: 'Nov 25, 2025',
    time: '7:00 PM',
    location: 'MC 4045',
  },
  {
    id: '3',
    title: 'Coffee Chat: Product Design',
    date: 'Nov 27, 2025',
    time: '5:00 PM',
    location: 'SLC Starbucks',
  },
];

export function ClubProfileScreen({ club, onBack }: ClubProfileScreenProps) {
  if (!club) return null;

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header Image */}
      <div className="relative h-56">
        <ImageWithFallback
          src={club.image}
          alt={club.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={onBack}
          className="absolute top-6 left-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5" style={{ color: '#000000' }} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          {/* Club Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#000000' }}>{club.name}</h2>
              <div className="flex items-center gap-1 mb-3" style={{ color: '#000000' }}>
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">{club.members} members</span>
              </div>
            </div>
            <button className="px-4 py-2 bg-white border-2 border-gray-300 rounded-full flex items-center gap-2 hover:bg-purple-50 hover:border-purple-400 transition-colors" style={{ color: '#000000' }}>
              <Star className="w-4 h-4" style={{ color: '#000000' }} />
              <span className="text-sm font-medium">Favorite</span>
            </button>
          </div>

          {/* Category Badge */}
          <div className="mb-4">
            <span
              className="px-3 py-1.5 rounded-full text-sm font-medium"
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
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2" style={{ color: '#000000' }}>About</h4>
            <p className="text-sm leading-relaxed" style={{ color: '#000000' }}>{club.description}</p>
          </div>

          {/* Meeting Schedule */}
          <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-gray-200 rounded-2xl">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 mt-0.5" style={{ color: '#0066CC' }} />
              <div>
                <h4 className="text-base font-semibold mb-1" style={{ color: '#000000' }}>Meeting Schedule</h4>
                <p className="text-sm" style={{ color: '#6C757D' }}>{club.meetingSchedule}</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          {club.socials.length > 0 && (
            <div className="mb-6">
              <h4 className="text-base font-semibold mb-3" style={{ color: '#000000' }}>Connect With Us</h4>
              <div className="flex flex-wrap gap-2">
                {club.socials.map((social, i) => (
                  <button
                    key={i}
                    className="px-4 py-2 bg-white border-2 border-gray-300 rounded-full flex items-center gap-2 transition-colors"
                    style={{ backgroundColor: 'transparent', color: '#000000' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F8F9FA';
                      e.currentTarget.style.borderColor = '#DEE2E6';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = '#E9ECEF';
                    }}
                  >
                    {social.platform === 'Instagram' && <Instagram className="w-4 h-4" style={{ color: '#6C757D' }} />}
                    {social.platform === 'Website' && <Globe className="w-4 h-4" style={{ color: '#6C757D' }} />}
                    <span className="text-sm font-medium" style={{ color: '#000000' }}>{social.handle}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Events */}
          <div className="mb-6">
            <h4 className="text-base font-semibold mb-3" style={{ color: '#000000' }}>Upcoming Events</h4>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-4 bg-white border-2 border-gray-300 rounded-2xl transition-colors"
                  style={{ backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F8F9FA';
                    e.currentTarget.style.borderColor = '#DEE2E6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = '#E9ECEF';
                  }}
                >
                  <h4 className="text-base font-semibold mb-2" style={{ color: '#000000' }}>{event.title}</h4>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2" style={{ color: '#6C757D' }}>
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{event.date} at {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2" style={{ color: '#6C757D' }}>
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Map Preview */}
          <div className="mb-6">
            <h4 className="text-base font-semibold mb-3" style={{ color: '#000000' }}>Events on Map</h4>
            <div className="relative h-48 bg-gray-100 border-2 border-black rounded-2xl overflow-hidden">
              {/* Map background elements */}
              <div className="absolute inset-0">
                {/* Roads/paths */}
                <div className="absolute top-[20%] left-0 right-0 h-2 bg-gray-300 opacity-60" />
                <div className="absolute top-[50%] left-0 right-0 h-1.5 bg-gray-300 opacity-50" />
                <div className="absolute top-[75%] left-0 right-0 h-1.5 bg-gray-300 opacity-50" />
                <div className="absolute top-0 bottom-0 left-[30%] w-2 bg-gray-300 opacity-60" />
                <div className="absolute top-0 bottom-0 left-[60%] w-1.5 bg-gray-300 opacity-50" />

                {/* Buildings */}
                <div className="absolute top-[10%] left-[10%] w-12 h-16 bg-gray-300 border border-gray-400 rounded-sm opacity-70" />
                <div className="absolute top-[40%] left-[45%] w-16 h-20 bg-gray-300 border border-gray-400 rounded-sm opacity-70" />
                <div className="absolute top-[65%] left-[70%] w-10 h-14 bg-gray-300 border border-gray-400 rounded-sm opacity-70" />
                <div className="absolute top-[25%] left-[75%] w-8 h-12 bg-gray-300 border border-gray-400 rounded-sm opacity-70" />

                {/* Green spaces */}
                <div className="absolute top-[5%] left-[50%] w-16 h-10 bg-green-200 border border-green-300 rounded-lg opacity-50" />
              </div>

              {/* Event markers */}
              <div className="absolute top-[30%] left-[40%] w-8 h-8 bg-blue-500 rounded-full shadow-lg flex items-center justify-center z-10">
                <MapPin className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="absolute top-[60%] left-[60%] w-8 h-8 bg-green-500 rounded-full shadow-lg flex items-center justify-center z-10">
                <MapPin className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="absolute top-[45%] left-[25%] w-8 h-8 bg-purple-500 rounded-full shadow-lg flex items-center justify-center z-10">
                <MapPin className="w-5 h-5 text-white fill-white" />
              </div>
            </div>
          </div>

          {/* Join Button */}
          <button className="w-full bg-white border-2 border-gray-300 py-4 rounded-full hover:bg-gray-100 hover:border-gray-400 transition-colors mb-4 whitespace-nowrap text-base" style={{ fontWeight: 600, color: '#000000' }}>
            Join Club
          </button>
        </div>
      </div>
    </div>
  );
}
