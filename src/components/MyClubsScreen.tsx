import { ArrowLeft, Calendar, MapPin, Clock, Star } from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MyClubsScreenProps {
  onNavigate: (screen: Screen, data?: any) => void;
}

const myClubs = [
  {
    id: '1',
    name: 'UW Blueprint',
    image: 'https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjMzMDg5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    nextEvent: 'Team Meeting - Today 6:30 PM',
  },
  {
    id: '2',
    name: 'Sustainability Project',
    image: 'https://images.unsplash.com/photo-1704748082614-8163a88e56b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjMyNzQ5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    nextEvent: 'Campus Cleanup - Nov 18',
  },
];

const upcomingEvents = [
  {
    id: '1',
    club: 'UW Blueprint',
    title: 'Team Meeting',
    date: 'Today',
    time: '6:30 PM',
    location: 'E7 5343',
    category: 'Meeting',
  },
  {
    id: '2',
    club: 'Sustainability Project',
    title: 'Campus Cleanup',
    date: 'Nov 18',
    time: '10:00 AM',
    location: 'SLC Plaza',
    category: 'Event',
  },
  {
    id: '3',
    club: 'UW Blueprint',
    title: 'React Workshop',
    date: 'Nov 25',
    time: '7:00 PM',
    location: 'MC 4045',
    category: 'Workshop',
  },
  {
    id: '4',
    club: 'Sustainability Project',
    title: 'Planning Session',
    date: 'Nov 21',
    time: '6:00 PM',
    location: 'ENV2 2001',
    category: 'Meeting',
  },
];

export function MyClubsScreen({ onNavigate }: MyClubsScreenProps) {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 pb-4 border-b border-gray-100">
        <button
          onClick={() => onNavigate('clubs')}
          className="mb-4"
        >
          <ArrowLeft className="w-6 h-6" style={{ color: '#000000' }} />
        </button>
        <h1 className="text-2xl font-bold" style={{ color: '#000000' }}>My Clubs</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Favorited Clubs */}
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4" style={{ color: '#000000' }}>Favorited Clubs</h3>
          <div className="space-y-3">
            {myClubs.map((club) => (
              <div
                key={club.id}
                className="bg-white border-2 border-gray-300 rounded-2xl p-4 flex items-center gap-4"
              >
                <ImageWithFallback
                  src={club.image}
                  alt={club.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-base font-semibold mb-1" style={{ color: '#000000' }}>{club.name}</h4>
                  <p className="text-sm" style={{ color: '#6C757D' }}>{club.nextEvent}</p>
                </div>
                <Star className="w-5 h-5" style={{ color: '#FF4081', fill: '#FF4081' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events Timeline */}
        <div className="px-6 pb-6">
          <h3 className="text-lg font-semibold mb-4" style={{ color: '#000000' }}>Upcoming Events</h3>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={event.id} className="relative">
                {/* Timeline Line */}
                {index < upcomingEvents.length - 1 && (
                  <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-gray-300" />
                )}

                {/* Event Card */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center z-10" style={{ backgroundColor: '#0066CC' }}>
                    <Calendar className="w-4 h-4" style={{ color: 'white' }} />
                  </div>

                  <div className="flex-1 pb-6">
                    <div className="bg-white border-2 border-gray-300 rounded-2xl p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="text-base font-semibold mb-1" style={{ color: '#000000' }}>{event.title}</h4>
                          <p className="text-sm" style={{ color: '#6C757D' }}>{event.club}</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#E3F2FD', color: '#0066CC' }}>
                          {event.category}
                        </span>
                      </div>

                      <div className="space-y-1 mt-3">
                        <div className="flex items-center gap-2" style={{ color: '#6C757D' }}>
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{event.date} at {event.time}</span>
                        </div>
                        <div className="flex items-center gap-2" style={{ color: '#6C757D' }}>
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
