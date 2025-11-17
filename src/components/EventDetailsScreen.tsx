import { ArrowLeft, MapPin, Clock, Users, Calendar, Share2, Bookmark, ExternalLink, CheckCircle } from 'lucide-react';
import { Event } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EventDetailsScreenProps {
  event: Event | null;
  onBack: () => void;
}

export function EventDetailsScreen({ event, onBack }: EventDetailsScreenProps) {
  if (!event) return null;

  const isDesignathon = event.id === '1';
  
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

  const color = getCategoryColor(event.category);

  const attendeeAvatars = [
    { name: 'Zain Khan', initials: 'ZK', color: '#0066CC' },
    { name: 'Aidan Jeon', initials: 'AJ', color: '#00C853' },
    { name: 'George Girgis', initials: 'GG', color: '#7C4DFF' },
    { name: 'Rayan Shakeel', initials: 'RS', color: '#FF6B35' },
  ];

  const eventImage = isDesignathon 
    ? 'https://images.unsplash.com/photo-1581093806997-124204d9fa9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3b3Jrc2hvcCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMzEwNDU4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    : event.id === '2'
    ? 'https://images.unsplash.com/photo-1758270704625-cf6f1898853d?w=800'
    : 'https://images.unsplash.com/photo-1759787851041-0d45d2b2db84?w=800';

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Fixed top navigation */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-50">
        <button
          onClick={onBack}
          className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5" style={{ color: '#212529' }} />
        </button>
        <div className="flex gap-2">
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center">
            <Share2 className="w-5 h-5" style={{ color: '#212529' }} />
          </button>
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center">
            <Bookmark className="w-5 h-5" style={{ color: '#212529' }} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Scrollable header */}
        <div className="relative h-72">
          {isDesignathon ? (
            <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center border-b-2 border-black">
              <div className="text-black text-center px-6">
                <div className="text-[32px] mb-2" style={{ fontWeight: 700, color: '#000000' }}>Blueprint</div>
                <div className="text-[20px] mb-4" style={{ fontWeight: 500, color: '#000000' }}>Canvas Designathon 2025</div>
                <div className="flex gap-2 justify-center">
                  <span className="px-3 py-1.5 rounded-full text-[13px]" style={{ backgroundColor: '#0066CC', color: 'white', fontWeight: 500 }}>
                    Tech
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-[13px]" style={{ backgroundColor: '#00C853', color: 'white', fontWeight: 500 }}>
                    Social Good
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <ImageWithFallback
              src={eventImage}
              alt="Event"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="p-5">
          <h2 className="text-[24px] mb-3" style={{ fontWeight: 700, color: '#212529' }}>
            {event.title}
          </h2>

          <div className="flex items-center gap-3 mb-5 p-4 rounded-2xl" style={{ backgroundColor: '#F8F9FA' }}>
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm"
              style={{ backgroundColor: color }}
            >
              <span className="text-white" style={{ fontWeight: 600 }}>
                {event.host.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="flex-1">
              <h4 className="text-[15px] mb-0.5" style={{ fontWeight: 600, color: '#212529' }}>
                {event.host}
              </h4>
              <div className="flex items-center gap-1.5" style={{ color: '#000000' }}>
                <CheckCircle className="w-3.5 h-3.5" />
                <span className="text-[13px]" style={{ fontWeight: 500 }}>Verified Club</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-5">
            <div className="flex items-start gap-3.5">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${color}15` }}
              >
                <Clock className="w-5 h-5" style={{ color: color }} />
              </div>
              <div>
                <p className="text-[15px] mb-1" style={{ fontWeight: 600, color: '#212529' }}>Time</p>
                <p className="text-[14px]" style={{ color: '#000000' }}>{event.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${color}15` }}
              >
                <MapPin className="w-5 h-5" style={{ color: color }} />
              </div>
              <div>
                <p className="text-[15px] mb-1" style={{ fontWeight: 600, color: '#212529' }}>Location</p>
                <p className="text-[14px]" style={{ color: '#000000' }}>{event.location} • {event.distance} away</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${color}15` }}
              >
                <Users className="w-5 h-5" style={{ color: color }} />
              </div>
              <div>
                <p className="text-[15px] mb-1" style={{ fontWeight: 600, color: '#212529' }}>Attendees</p>
                <p className="text-[14px]" style={{ color: '#000000' }}>{event.attendees} people going</p>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <h4 className="text-[16px] mb-3" style={{ fontWeight: 600, color: '#212529' }}>Who's Going</h4>
            <div className="flex items-center -space-x-3">
              {attendeeAvatars.map((avatar, i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-full border-3 border-white flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: avatar.color }}
                >
                  <span className="text-white text-[13px]" style={{ fontWeight: 600 }}>
                    {avatar.initials}
                  </span>
                </div>
              ))}
              <div 
                className="w-11 h-11 rounded-full border-3 border-white flex items-center justify-center shadow-sm"
                style={{ backgroundColor: '#E9ECEF' }}
              >
                <span className="text-[13px]" style={{ fontWeight: 600, color: '#6C757D' }}>
                  +{event.attendees - 4}
                </span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-[16px] mb-2" style={{ fontWeight: 600, color: '#212529' }}>About This Event</h4>
            <p className="text-[15px] leading-relaxed" style={{ color: '#000000' }}>
              {event.description}
            </p>
          </div>

          <div className="flex gap-3 mb-5">
            <button 
              className="flex-1 flex items-center justify-center gap-2 py-3.5 border-2 border-black rounded-2xl transition-all"
              style={{ 
                backgroundColor: 'white',
                color: '#000000',
                fontSize: '15px',
                fontWeight: 600,
              }}
            >
              <Calendar className="w-5 h-5" />
              Add to Calendar
            </button>
            <button 
              className="flex-1 flex items-center justify-center gap-2 py-3.5 border-2 border-black rounded-2xl transition-all"
              style={{ 
                backgroundColor: 'white',
                color: '#000000',
                fontSize: '15px',
                fontWeight: 600,
              }}
            >
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 bg-white border-t border-gray-100 shadow-lg">
        {isDesignathon ? (
          <a
            href="https://luma.com/osm1x744?tk=uW7T8D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 border-2 whitespace-nowrap"
            style={{
              backgroundColor: '#0066CC',
              borderColor: '#0066CC',
              color: 'white',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            <span>Sign Up on Luma</span>
            <ExternalLink className="w-5 h-5 flex-shrink-0" />
          </a>
        ) : (
          <button
            className="w-full py-4 rounded-2xl transition-all shadow-md border-2 whitespace-nowrap"
            style={{
              backgroundColor: '#0066CC',
              borderColor: '#0066CC',
              color: 'white',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            Join Event
          </button>
        )}
      </div>
    </div>
  );
}
