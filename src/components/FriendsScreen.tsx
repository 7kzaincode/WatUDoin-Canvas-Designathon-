import { ArrowLeft, Search, UserPlus, MessageCircle, MapPin } from 'lucide-react';

interface FriendsScreenProps {
  onBack: () => void;
}

const friends = [
  { id: '1', name: 'Aidan Jeon', major: 'Software Engineering 1A', year: '', mutualFriends: 12, mutualClubs: 3, active: true, initials: 'AJ', color: '#0066CC' },
  { id: '2', name: 'George Girgis', major: 'Systems Design Eng', year: '2nd Year', mutualFriends: 8, mutualClubs: 2, active: false, initials: 'GG', color: '#7C4DFF' },
  { id: '3', name: 'Rayan Shakeel', major: 'Computer Engineering', year: '3rd Year', mutualFriends: 15, mutualClubs: 4, active: true, initials: 'RS', color: '#00C853' },
  { id: '4', name: 'Sarah Chen', major: 'Math', year: '4th Year', mutualFriends: 6, mutualClubs: 1, active: false, initials: 'SC', color: '#FF6B35' },
  { id: '5', name: 'Alex Kim', major: 'Business', year: '3rd Year', mutualFriends: 10, mutualClubs: 2, active: true, initials: 'AK', color: '#FF4081' },
];

const friendRequests = [
  { id: '1', name: 'Jordan Lee', major: 'Arts', mutualFriends: 3, mutualClubs: 1, initials: 'JL', color: '#FF6B35' },
  { id: '2', name: 'Taylor Brown', major: 'Science', mutualFriends: 5, mutualClubs: 2, initials: 'TB', color: '#0066CC' },
];

export function FriendsScreen({ onBack }: FriendsScreenProps) {
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="px-4 pt-6 pb-3 bg-gradient-to-b from-blue-50 to-white border-b border-gray-100">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft className="w-6 h-6" style={{ color: '#212529' }} />
        </button>
        <h1 className="text-[28px] mb-4" style={{ fontWeight: 700, color: '#0066CC' }}>Friends</h1>
        
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search friends..."
            className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            style={{ fontSize: '15px' }}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {friendRequests.length > 0 && (
          <div className="p-5 border-b border-gray-100">
            <h3 className="text-[18px] mb-3" style={{ fontWeight: 600, color: '#212529' }}>
              Friend Requests ({friendRequests.length})
            </h3>
            <div className="space-y-3">
              {friendRequests.map((request) => (
                <div
                  key={request.id}
                  className="p-4 bg-blue-50 border-2 border-blue-100 rounded-2xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                      style={{ backgroundColor: request.color }}
                    >
                      <span className="text-white text-[18px]" style={{ fontWeight: 700 }}>
                        {request.initials}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[16px] mb-0.5 truncate" style={{ fontWeight: 600, color: '#212529' }}>
                        {request.name}
                      </h4>
                      <p className="text-[13px] mb-1" style={{ color: '#6C757D' }}>{request.major}</p>
                      <div className="flex items-center gap-3 text-[12px]" style={{ color: '#495057' }}>
                        <span>{request.mutualFriends} mutual friends</span>
                        <span>•</span>
                        <span>{request.mutualClubs} mutual clubs</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      className="flex-1 py-3 rounded-xl transition-all shadow-sm"
                      style={{ 
                        backgroundColor: '#0066CC',
                        color: 'white',
                        fontSize: '15px',
                        fontWeight: 600,
                      }}
                    >
                      Accept
                    </button>
                    <button 
                      className="flex-1 py-3 rounded-xl transition-all border-2"
                      style={{ 
                        borderColor: '#E9ECEF',
                        backgroundColor: 'white',
                        color: '#495057',
                        fontSize: '15px',
                        fontWeight: 600,
                      }}
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="p-5">
          <h3 className="text-[18px] mb-3" style={{ fontWeight: 600, color: '#212529' }}>
            All Friends ({friends.length})
          </h3>
          <div className="space-y-3">
            {friends.map((friend) => (
              <div
                key={friend.id}
                className="p-4 bg-white border border-gray-200 rounded-2xl hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                      style={{ backgroundColor: friend.color }}
                    >
                      <span className="text-white text-[20px]" style={{ fontWeight: 700 }}>
                        {friend.initials}
                      </span>
                    </div>
                    {friend.active && (
                      <div 
                        className="absolute bottom-0 right-0 w-5 h-5 rounded-full border-3 border-white shadow-sm"
                        style={{ backgroundColor: '#00C853' }}
                      />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-[16px] truncate" style={{ fontWeight: 600, color: '#212529' }}>
                        {friend.name}
                      </h4>
                      {friend.active && (
                        <span 
                          className="px-2 py-0.5 rounded-full text-[11px] flex-shrink-0"
                          style={{ backgroundColor: '#E8F5E9', color: '#00C853', fontWeight: 600 }}
                        >
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] mb-1.5" style={{ color: '#6C757D' }}>
                      {friend.year ? `${friend.major} · ${friend.year}` : friend.major}
                    </p>
                    <div className="flex items-center gap-3 text-[12px]" style={{ color: '#495057' }}>
                      <span>{friend.mutualFriends} mutual friends</span>
                      <span>•</span>
                      <span>{friend.mutualClubs} mutual clubs</span>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-shrink-0">
                    <button 
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-all shadow-sm"
                      style={{ backgroundColor: '#E3F2FD' }}
                    >
                      <MessageCircle className="w-5 h-5" style={{ color: '#0066CC' }} />
                    </button>
                    {friend.active && (
                      <button 
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all shadow-sm"
                        style={{ backgroundColor: '#E8F5E9' }}
                      >
                        <MapPin className="w-5 h-5" style={{ color: '#00C853' }} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 border-t border-gray-100 bg-white shadow-lg">
        <button
          className="w-full py-4 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
          style={{
            backgroundColor: '#0066CC',
            color: 'white',
            fontSize: '16px',
            fontWeight: 600,
          }}
        >
          <UserPlus className="w-5 h-5 flex-shrink-0" />
          <span>Add Friend</span>
        </button>
      </div>
    </div>
  );
}
