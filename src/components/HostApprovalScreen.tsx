import { ArrowLeft, Check, X, Users, MapPin, Clock } from 'lucide-react';

interface HostApprovalScreenProps {
  onBack: () => void;
}

const lobbyInfo = {
  title: 'Study Group - CS 240',
  location: 'MC Building, 3rd Floor',
  time: 'Now',
  capacity: 6,
  current: 4,
};

const joinRequests = [
  {
    id: '1',
    name: 'Jordan Lee',
    major: 'Computer Science',
    year: '3rd Year',
    sharedInterests: ['Tech', 'Basketball'],
    mutualFriends: 5,
  },
  {
    id: '2',
    name: 'Taylor Brown',
    major: 'Software Engineering',
    year: '2nd Year',
    sharedInterests: ['Tech', 'Music'],
    mutualFriends: 3,
  },
  {
    id: '3',
    name: 'Sam Wilson',
    major: 'Computer Science',
    year: '4th Year',
    sharedInterests: ['Tech', 'Photography'],
    mutualFriends: 8,
  },
];

const currentMembers = [
  { id: '1', name: 'Sarah Chen', initials: 'SC' },
  { id: '2', name: 'Alex Kim', initials: 'AK' },
  { id: '3', name: 'Emma Davis', initials: 'ED' },
  { id: '4', name: 'You', initials: 'AS' },
];

export function HostApprovalScreen({ onBack }: HostApprovalScreenProps) {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 pb-4 border-b border-gray-100">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h1 className="text-gray-900">Manage Lobby</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Lobby Info */}
        <div className="p-6 bg-blue-50 border-b border-blue-100">
          <h3 className="text-gray-900 mb-3">{lobbyInfo.title}</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-xs">{lobbyInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="text-xs">{lobbyInfo.time}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4" />
              <span className="text-xs">{lobbyInfo.current}/{lobbyInfo.capacity} spots filled</span>
            </div>
          </div>
        </div>

        {/* Current Members */}
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-gray-900 mb-3">Current Members</h3>
          <div className="flex -space-x-3">
            {currentMembers.map((member) => (
              <div
                key={member.id}
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-2 border-white flex items-center justify-center"
                title={member.name}
              >
                <span className="text-white text-xs">{member.initials}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Join Requests */}
        <div className="p-6">
          <h3 className="text-gray-900 mb-3">
            Join Requests ({joinRequests.length})
          </h3>
          <div className="space-y-4">
            {joinRequests.map((request) => (
              <div
                key={request.id}
                className="p-4 bg-white border border-gray-200 rounded-2xl"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">
                      {request.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-1">{request.name}</h4>
                    <p className="text-gray-500 text-xs mb-1">
                      {request.major} · {request.year}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {request.mutualFriends} mutual friends
                    </p>
                  </div>
                </div>

                {/* Shared Interests */}
                <div className="mb-3">
                  <p className="text-gray-600 text-xs mb-2">Shared interests:</p>
                  <div className="flex gap-2">
                    {request.sharedInterests.map((interest) => (
                      <span
                        key={interest}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" />
                    Accept
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                    <X className="w-4 h-4" />
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* End Lobby Button */}
      <div className="p-6 border-t border-gray-100">
        <button className="w-full bg-red-50 text-red-600 py-4 rounded-full hover:bg-red-100 transition-colors">
          End Lobby
        </button>
      </div>
    </div>
  );
}
