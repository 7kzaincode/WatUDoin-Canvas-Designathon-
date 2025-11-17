import { X, MapPin, Clock, Users, ExternalLink } from 'lucide-react';
import { Event } from '../App';

interface EventPinPopupProps {
  event: Event;
  onClose: () => void;
  onViewDetails: () => void;
}

export function EventPinPopup({ event, onClose, onViewDetails }: EventPinPopupProps) {
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

  const isDesignathon = event.id === '1';
  const color = getCategoryColor(event.category);

  return (
    <>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Popup Card */}
      <div className="absolute bottom-20 left-4 right-4 z-50 bg-white rounded-3xl shadow-2xl overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white border-2 border-black hover:bg-gray-100 transition-colors z-10"
          >
            <X className="w-5 h-5" style={{ color: '#000000' }} />
          </button>

        {isDesignathon && (
          <div className="h-24 bg-gradient-to-br from-pink-100 to-purple-100 relative border-b-2 border-black">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-black text-center">
                <div className="text-[20px]" style={{ fontWeight: 700 }}>Blueprint Canvas Designathon</div>
              </div>
            </div>
          </div>
        )}

        <div className="p-5">
          <div className="pr-8 mb-4">
            <h3 className="text-[20px] mb-2" style={{ fontWeight: 600, color: '#000000' }}>
              {event.title}
            </h3>
            <p className="text-[15px]" style={{ color: '#000000' }}>{event.host}</p>
          </div>
          
          <div className="space-y-2.5 mb-4">
            <div className="flex items-center gap-3" style={{ color: '#000000' }}>
              <Clock className="w-4.5 h-4.5" style={{ color: color }} />
              <span className="text-[14px]">{event.time}</span>
            </div>
            
            <div className="flex items-center gap-3" style={{ color: '#000000' }}>
              <MapPin className="w-4.5 h-4.5" style={{ color: color }} />
              <span className="text-[14px]">{event.location} • {event.distance}</span>
            </div>
            
            <div className="flex items-center gap-3" style={{ color: '#000000' }}>
              <Users className="w-4.5 h-4.5" style={{ color: color }} />
              <span className="text-[14px]">{event.attendees} attending</span>
            </div>
          </div>

          {isDesignathon && (
            <div className="mb-4 p-3 rounded-xl border-2 border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50">
              <p className="text-[13px]" style={{ color: '#000000' }}>
                {event.description}
              </p>
            </div>
          )}

          <div className="flex gap-2.5">
            {isDesignathon ? (
              <>
                <button
                  onClick={onViewDetails}
                  className="flex-1 py-3.5 rounded-full transition-all shadow-sm border-2 border-black whitespace-nowrap"
                  style={{
                    backgroundColor: 'white',
                    color: '#000000',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  View Details
                </button>
                <a
                  href="https://luma.com/osm1x744?tk=uW7T8D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-full transition-all shadow-md flex items-center justify-center gap-1.5 border-2 whitespace-nowrap"
                  style={{
                    backgroundColor: '#0066CC',
                    borderColor: '#0066CC',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  <span>Sign Up</span>
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                </a>
              </>
            ) : (
              <>
                <button
                  onClick={onViewDetails}
                  className="flex-1 py-3.5 rounded-full transition-all shadow-sm border-2 border-gray-300 whitespace-nowrap"
                  style={{
                    backgroundColor: 'white',
                    color: '#000000',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  View Details
                </button>
                <button
                  className="flex-1 py-3.5 rounded-full transition-all shadow-md border-2 whitespace-nowrap"
                  style={{
                    backgroundColor: '#0066CC',
                    borderColor: '#0066CC',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  Join Event
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
