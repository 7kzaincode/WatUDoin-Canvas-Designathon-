import { useState } from 'react';
import { MapHomeScreen } from './components/MapHomeScreen';
import { EventDetailsScreen } from './components/EventDetailsScreen';
import { ClubDirectoryScreen } from './components/ClubDirectoryScreen';
import { ClubProfileScreen } from './components/ClubProfileScreen';
import { MyClubsScreen } from './components/MyClubsScreen';
import { CreateLobbyScreen } from './components/CreateLobbyScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { FriendsScreen } from './components/FriendsScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { HostApprovalScreen } from './components/HostApprovalScreen';
import { OnboardingScreen } from './components/OnboardingScreen';
import { CreditsScreen } from './components/CreditsScreen';
import { EditProfileScreen, UserProfile } from './components/EditProfileScreen';
import { BottomNav } from './components/BottomNav';

export type Screen = 'onboarding' | 'map' | 'clubs' | 'create' | 'profile' | 'friends' | 'settings' | 'eventDetails' | 'clubProfile' | 'myClubs' | 'hostApproval' | 'credits' | 'editProfile';

export interface Event {
  id: string;
  title: string;
  host: string;
  time: string;
  distance: string;
  category: 'Social' | 'Academic' | 'Wellness' | 'Club Events' | 'Sports';
  description: string;
  location: string;
  attendees: number;
  position: { x: number; y: number };
  image?: string;
}

export interface Club {
  id: string;
  name: string;
  description: string;
  category: string;
  members: number;
  image: string;
  meetingSchedule: string;
  socials: { platform: string; handle: string }[];
  upcomingEvents: Event[];
}

export interface Lobby {
  id: string;
  type: string;
  host: string;
  vibe: 'Chill' | 'Normal' | 'Hype';
  capacity: number;
  current: number;
  category: string;
  position: { x: number; y: number };
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    fullName: 'Zain Khan',
    email: 'zkhan@uwaterloo.ca',
    program: 'Computer Engineering',
    programYear: '1A',
    expectedGraduation: '2029',
    bio: '',
  });

  const handleNavigate = (screen: Screen, data?: any) => {
    if (screen === 'eventDetails' && data) {
      setSelectedEvent(data);
    } else if (screen === 'clubProfile' && data) {
      setSelectedClub(data);
    }
    setCurrentScreen(screen);
  };

  const handleLogout = () => {
    // Reset to onboarding and clear profile
    setCurrentScreen('onboarding');
    setUserProfile({
      fullName: '',
      email: '',
      program: '',
      programYear: '',
      expectedGraduation: '',
      bio: '',
    });
  };

  const handleOnboardingComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    setCurrentScreen('map');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingScreen onComplete={handleOnboardingComplete} />;
      case 'map':
        return <MapHomeScreen onNavigate={handleNavigate} />;
      case 'eventDetails':
        return <EventDetailsScreen event={selectedEvent} onBack={() => setCurrentScreen('map')} />;
      case 'clubs':
        return <ClubDirectoryScreen onNavigate={handleNavigate} />;
      case 'clubProfile':
        return <ClubProfileScreen club={selectedClub} onBack={() => setCurrentScreen('clubs')} />;
      case 'myClubs':
        return <MyClubsScreen onNavigate={handleNavigate} />;
      case 'create':
        return <CreateLobbyScreen onBack={() => setCurrentScreen('map')} />;
      case 'profile':
        return <ProfileScreen userProfile={userProfile} onNavigate={handleNavigate} onLogout={handleLogout} />;
      case 'friends':
        return <FriendsScreen onBack={() => setCurrentScreen('profile')} />;
      case 'settings':
        return <SettingsScreen onNavigate={handleNavigate} onBack={() => setCurrentScreen('profile')} onLogout={handleLogout} />;
      case 'editProfile':
        return <EditProfileScreen profile={userProfile} onSave={setUserProfile} onBack={() => setCurrentScreen('settings')} />;
      case 'hostApproval':
        return <HostApprovalScreen onBack={() => setCurrentScreen('map')} />;
      case 'credits':
        return <CreditsScreen onBack={() => setCurrentScreen('profile')} />;
      default:
        return <MapHomeScreen onNavigate={handleNavigate} />;
    }
  };

  const showBottomNav = !['onboarding', 'eventDetails', 'clubProfile', 'friends', 'settings', 'hostApproval', 'credits', 'editProfile'].includes(currentScreen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      {/* Phone Frame */}
      <div className="w-full max-w-md h-[844px] bg-white rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col border-8 border-gray-800">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl z-50" />
        
        {/* Screen Content */}
        <div className="flex-1 overflow-hidden">
          {renderScreen()}
        </div>
        
        {/* Bottom Nav */}
        {showBottomNav && (
          <BottomNav currentScreen={currentScreen} onNavigate={handleNavigate} />
        )}
      </div>
      
      {/* Credits Button */}
      <button
        onClick={() => setCurrentScreen('credits')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-sm hover:bg-white transition-all"
        style={{ color: '#0066CC', fontWeight: 600 }}
      >
        View Team Credits
      </button>
    </div>
  );
}
