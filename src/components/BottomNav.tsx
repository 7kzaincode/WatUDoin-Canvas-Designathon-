import { MapPin, Users, PlusCircle, User } from 'lucide-react';
import { Screen } from '../App';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'map' as Screen, icon: MapPin, label: 'Map' },
    { id: 'clubs' as Screen, icon: Users, label: 'Clubs' },
    { id: 'create' as Screen, icon: PlusCircle, label: 'Create' },
    { id: 'profile' as Screen, icon: User, label: 'Profile' },
  ];

  return (
    <div 
      className="border-t bg-white/95 backdrop-blur-lg px-6 py-2 flex justify-around items-center shadow-2xl"
      style={{ borderTopColor: '#000000', borderTopWidth: '2px' }}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentScreen === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-colors"
            style={{
              backgroundColor: isActive ? '#F8F9FA' : 'transparent',
            }}
          >
            <Icon 
              className="w-6 h-6 transition-all" 
              style={{ 
                color: isActive ? '#000000' : '#000000',
                strokeWidth: isActive ? 2.5 : 2,
                opacity: isActive ? 1 : 0.5,
              }} 
            />
            <span 
              className="text-[11px] transition-all"
              style={{ 
                color: isActive ? '#000000' : '#000000',
                fontWeight: isActive ? 600 : 500,
                opacity: isActive ? 1 : 0.5,
              }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
