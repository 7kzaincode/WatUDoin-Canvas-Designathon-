import { Settings, Users, Calendar, LogOut, Star, TrendingUp } from 'lucide-react';
import { Screen } from '../App';
import { GooseIcon } from './GooseMascot';
import { UserProfile } from './EditProfileScreen';

interface ProfileScreenProps {
  userProfile: UserProfile;
  onNavigate: (screen: Screen) => void;
  onLogout: () => void;
}

const interests = [
  { name: 'Tech', color: '#0066CC' },
  { name: 'Design', color: '#7C4DFF' },
  { name: 'Social Good', color: '#00C853' },
  { name: 'Photography', color: '#FF4081' },
  { name: 'Basketball', color: '#FF6B35' },
  { name: 'Poetry', color: '#0066CC' },
];

const myHangouts = [
  { id: '1', title: 'Blueprint Canvas Designathon', date: 'Today', type: 'Club Events', color: '#FF4081' },
  { id: '2', title: 'Poetry on the Grass', date: 'Yesterday', type: 'Social', color: '#00C853' },
  { id: '3', title: 'Study Group - CS 246', date: '2 days ago', type: 'Academic', color: '#0066CC' },
];

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

const myClubs = [
  { name: 'UW Blueprint', color: '#0066CC', initials: 'BP' },
  { name: 'Poetry Club', color: '#00C853', initials: 'PC' },
  { name: 'Photography', color: '#7C4DFF', initials: 'PH' },
];

const getClubColor = (clubName: string) => {
  const colors: { [key: string]: string } = {
    'UW Blueprint': '#0066CC',
    'Poetry Club': '#00C853',
    'Photography': '#7C4DFF',
  };
  return colors[clubName] || '#0066CC';
};

export function ProfileScreen({ userProfile, onNavigate, onLogout }: ProfileScreenProps) {
  // Get initials from full name
  const getInitials = (name: string) => {
    const names = name.trim().split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[names.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const initials = getInitials(userProfile.fullName);
  const displayProgram = userProfile.programYear
    ? `${userProfile.program} ${userProfile.programYear}`
    : userProfile.program;

  return (
    <div className="h-full flex flex-col bg-white overflow-y-auto">
      <div className="px-4 pt-6 pb-3 bg-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <GooseIcon className="w-10 h-10" />
            <h1 className="text-[28px]" style={{ fontWeight: 700, color: '#000000' }}>Profile</h1>
          </div>
          <button
            onClick={() => onNavigate('settings')}
            className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-md"
          >
            <Settings className="w-5 h-5" style={{ color: '#000000' }} />
          </button>
        </div>
      </div>

      <div className="px-4 pb-5">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-gray-200 rounded-3xl p-6 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-4 right-4 opacity-20">
            <GooseIcon className="w-12 h-12" />
          </div>

          <div className="relative">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-20 h-20 bg-white border-2 border-black rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-[28px]" style={{ fontWeight: 700, color: '#000000' }}>{initials}</span>
              </div>
              <div className="flex-1 pt-2">
                <h2 className="text-[22px] mb-1" style={{ fontWeight: 700, color: '#000000' }}>
                  {userProfile.fullName}
                </h2>
                <p className="text-[15px]" style={{ color: '#000000' }}>{displayProgram}</p>
                {userProfile.expectedGraduation && (
                  <p className="text-[13px] mt-1" style={{ color: '#6C757D' }}>
                    Graduating {userProfile.expectedGraduation}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-8">
              <div>
                <p className="text-[28px] mb-0.5" style={{ fontWeight: 700, color: '#000000' }}>12</p>
                <p className="text-[13px]" style={{ fontWeight: 500, color: '#000000' }}>Hangouts</p>
              </div>
              <div>
                <p className="text-[28px] mb-0.5" style={{ fontWeight: 700, color: '#000000' }}>5</p>
                <p className="text-[13px]" style={{ fontWeight: 500, color: '#000000' }}>Clubs</p>
              </div>
              <div>
                <p className="text-[28px] mb-0.5" style={{ fontWeight: 700, color: '#000000' }}>48</p>
                <p className="text-[13px]" style={{ fontWeight: 500, color: '#000000' }}>Friends</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-5">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onNavigate('friends')}
            className="p-4 bg-white rounded-2xl border border-gray-200 hover:bg-blue-50 transition-colors group"
          >
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-100 transition-colors">
              <Users className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </div>
            <p className="text-[15px]" style={{ fontWeight: 600, color: '#000000' }}>Friends</p>
            <p className="text-[13px]" style={{ color: '#6C757D' }}>48 friends</p>
          </button>
          
          <button
            onClick={() => onNavigate('myClubs')}
            className="p-4 bg-white rounded-2xl border border-gray-200 hover:bg-purple-50 transition-colors group"
          >
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-purple-100 transition-colors">
              <Star className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
            </div>
            <p className="text-[15px]" style={{ fontWeight: 600, color: '#000000' }}>My Clubs</p>
            <p className="text-[13px]" style={{ color: '#6C757D' }}>5 clubs</p>
          </button>
        </div>
      </div>

      <div className="px-4 pb-5">
        <h3 className="text-[18px] mb-3" style={{ fontWeight: 600, color: '#000000' }}>Interests</h3>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <span
              key={interest.name}
              className="px-4 py-2 rounded-full text-[14px] transition-all cursor-pointer"
              style={{ 
                backgroundColor: `${interest.color}15`,
                color: interest.color,
                fontWeight: 500,
                border: `1px solid ${interest.color}30`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${interest.color}30`;
                e.currentTarget.style.borderColor = `${interest.color}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = `${interest.color}15`;
                e.currentTarget.style.borderColor = `${interest.color}30`;
              }}
            >
              {interest.name}
            </span>
          ))}
        </div>
      </div>

      <div className="px-4 pb-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[18px]" style={{ fontWeight: 600, color: '#000000' }}>My Clubs</h3>
          <button
            onClick={() => onNavigate('myClubs')}
            className="text-[14px]"
            style={{ color: '#000000', fontWeight: 500 }}
          >
            View All
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {myClubs.map((club, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center shadow-md"
              style={{ backgroundColor: club.color }}
            >
              <span className="text-[24px] text-white" style={{ fontWeight: 700 }}>
                {club.initials}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-5">
        <h3 className="text-[18px] mb-3" style={{ fontWeight: 600, color: '#000000' }}>Recent Hangouts</h3>
        <div className="space-y-3">
          {myHangouts.map((hangout) => (
            <div
              key={hangout.id}
              className="p-4 bg-white border border-gray-200 rounded-2xl flex items-center gap-3 transition-colors group"
              style={{ backgroundColor: 'transparent' }}
              data-hangout-id={hangout.id}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${hangout.color}08`;
                e.currentTarget.style.borderColor = `${hangout.color}30`;
                const iconDiv = e.currentTarget.querySelector('.hangout-icon') as HTMLElement;
                const icon = e.currentTarget.querySelector('.hangout-icon svg') as SVGElement;
                if (iconDiv && icon) {
                  iconDiv.style.backgroundColor = hangout.color;
                  icon.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = '#E9ECEF';
                const iconDiv = e.currentTarget.querySelector('.hangout-icon') as HTMLElement;
                const icon = e.currentTarget.querySelector('.hangout-icon svg') as SVGElement;
                if (iconDiv && icon) {
                  iconDiv.style.backgroundColor = `${hangout.color}20`;
                  icon.style.color = hangout.color;
                }
              }}
            >
              <div 
                className="hangout-icon w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-all"
                style={{ backgroundColor: `${hangout.color}20` }}
              >
                <Calendar className="w-6 h-6 transition-colors" style={{ color: hangout.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[15px] mb-0.5 truncate" style={{ fontWeight: 600, color: '#000000' }}>
                  {hangout.title}
                </h4>
                <p className="text-[13px]" style={{ color: '#6C757D' }}>{hangout.date}</p>
              </div>
              <span 
                className="px-3 py-1 rounded-full text-[12px] flex-shrink-0 transition-all"
                style={{ 
                  backgroundColor: `${hangout.color}15`,
                  color: hangout.color,
                  fontWeight: 500,
                  border: `1px solid ${hangout.color}30`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${hangout.color}30`;
                  e.currentTarget.style.borderColor = `${hangout.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `${hangout.color}15`;
                  e.currentTarget.style.borderColor = `${hangout.color}30`;
                }}
              >
                {hangout.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-5">
        <h3 className="text-[18px] mb-3" style={{ fontWeight: 600, color: '#000000' }}>Activity This Month</h3>
        <div className="p-5 bg-gradient-to-br from-green-50 to-blue-50 border-2 border-gray-200 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6" style={{ color: '#00C853' }} />
            <div>
              <p className="text-[24px]" style={{ fontWeight: 700, color: '#000000' }}>8 events</p>
              <p className="text-[13px]" style={{ color: '#6C757D' }}>+3 from last month</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <p className="text-[20px]" style={{ fontWeight: 700, color: '#00C853' }}>5</p>
              <p className="text-[12px]" style={{ color: '#000000' }}>Social</p>
            </div>
            <div className="text-center">
              <p className="text-[20px]" style={{ fontWeight: 700, color: '#0066CC' }}>2</p>
              <p className="text-[12px]" style={{ color: '#000000' }}>Academic</p>
            </div>
            <div className="text-center">
              <p className="text-[20px]" style={{ fontWeight: 700, color: '#7C4DFF' }}>1</p>
              <p className="text-[12px]" style={{ color: '#000000' }}>Wellness</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-6">
        <button
          onClick={onLogout}
          className="w-full py-3.5 rounded-2xl flex items-center justify-center gap-2 border-2 border-red-200 transition-colors hover:bg-red-50 hover:border-red-300"
          style={{
            backgroundColor: 'white',
            color: '#DC3545',
            fontSize: '15px',
            fontWeight: 600,
          }}
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </button>
      </div>
    </div>
  );
}
