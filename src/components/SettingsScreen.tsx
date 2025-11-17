import { ArrowLeft, Bell, Shield, Mail, ChevronRight, LogOut, User, Moon, Globe } from 'lucide-react';
import { Screen } from '../App';

interface SettingsScreenProps {
  onNavigate: (screen: Screen) => void;
  onBack: () => void;
  onLogout: () => void;
}

const settingsSections = [
  {
    title: 'Account',
    items: [
      { id: 'profile', label: 'Edit Profile', icon: User, navigate: true },
      { id: 'email', label: 'Linked University Email', icon: Mail, value: 'zkhan@uwaterloo.ca' },
    ],
  },
  {
    title: 'Preferences',
    items: [
      { id: 'notifications', label: 'Notifications', icon: Bell },
      { id: 'appearance', label: 'Dark Mode', icon: Moon, toggle: true },
      { id: 'language', label: 'Language', icon: Globe, value: 'English' },
    ],
  },
  {
    title: 'Privacy & Safety',
    items: [
      { id: 'privacy', label: 'Privacy Settings', icon: Shield },
      { id: 'blocked', label: 'Blocked Users', icon: User },
    ],
  },
];

export function SettingsScreen({ onNavigate, onBack, onLogout }: SettingsScreenProps) {
  const handleItemClick = (itemId: string, navigate?: boolean) => {
    if (navigate && itemId === 'profile') {
      onNavigate('editProfile');
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 pb-4 border-b border-gray-100">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft className="w-6 h-6" style={{ color: '#000000' }} />
        </button>
        <h1 className="text-[28px]" style={{ fontWeight: 700, color: '#000000' }}>Settings</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {settingsSections.map((section, sectionIndex) => (
          <div key={section.title} className={sectionIndex > 0 ? 'border-t border-gray-100' : ''}>
            <div className="px-6 py-4">
              <h3 className="text-xs mb-3" style={{ color: '#6C757D', fontWeight: 500 }}>{section.title}</h3>
              <div className="space-y-1">
                {section.items.map((item: any) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id, item.navigate)}
                      className="w-full p-4 rounded-2xl transition-colors flex items-center gap-3 group"
                      style={{
                        backgroundColor: 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#F8F9FA';
                        const iconDiv = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                        const icon = e.currentTarget.querySelector('svg') as SVGElement;
                        if (iconDiv && icon) {
                          const iconColor = item.id === 'profile' ? '#0066CC' :
                                           item.id === 'email' ? '#00C853' :
                                           item.id === 'notifications' ? '#7C4DFF' :
                                           item.id === 'appearance' ? '#FF6B35' :
                                           item.id === 'language' ? '#FF4081' :
                                           item.id === 'privacy' ? '#0066CC' :
                                           item.id === 'blocked' ? '#FF4081' : '#6C757D';
                          iconDiv.style.backgroundColor = `${iconColor}15`;
                          icon.style.color = iconColor;
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        const iconDiv = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                        const icon = e.currentTarget.querySelector('svg') as SVGElement;
                        if (iconDiv && icon) {
                          iconDiv.style.backgroundColor = '#F1F3F5';
                          icon.style.color = '#6C757D';
                        }
                      }}
                    >
                      <div 
                        className="icon-container w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                        style={{ backgroundColor: '#F1F3F5' }}
                      >
                        <Icon className="w-5 h-5 transition-colors" style={{ color: '#6C757D' }} />
                      </div>
                      
                      <div className="flex-1 text-left">
                        <p style={{ color: '#000000' }}>{item.label}</p>
                        {item.value && (
                          <p className="text-xs" style={{ color: '#6C757D' }}>{item.value}</p>
                        )}
                      </div>

                      {item.toggle ? (
                        <div className="w-12 h-7 bg-gray-200 rounded-full p-1 transition-colors">
                          <div className="w-5 h-5 bg-white rounded-full shadow-sm" />
                        </div>
                      ) : (
                        <ChevronRight className="w-5 h-5" style={{ color: '#ADB5BD' }} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}

        {/* About Section */}
        <div className="border-t border-gray-100">
          <div className="px-6 py-4">
            <h3 className="text-xs mb-3" style={{ color: '#6C757D', fontWeight: 500 }}>About</h3>
            <div className="space-y-1">
              <button 
                className="w-full p-4 rounded-2xl transition-colors flex items-center justify-between"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F8F9FA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span style={{ color: '#000000' }}>Terms of Service</span>
                <ChevronRight className="w-5 h-5" style={{ color: '#ADB5BD' }} />
              </button>
              <button 
                className="w-full p-4 rounded-2xl transition-colors flex items-center justify-between"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F8F9FA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span style={{ color: '#000000' }}>Privacy Policy</span>
                <ChevronRight className="w-5 h-5" style={{ color: '#ADB5BD' }} />
              </button>
              <button 
                className="w-full p-4 rounded-2xl transition-colors flex items-center justify-between"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F8F9FA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span style={{ color: '#000000' }}>Help & Support</span>
                <ChevronRight className="w-5 h-5" style={{ color: '#ADB5BD' }} />
              </button>
            </div>
          </div>
        </div>

        {/* Version */}
        <div className="px-6 py-4 text-center">
          <p className="text-xs" style={{ color: '#ADB5BD' }}>WatUDoin v1.0.0</p>
        </div>
      </div>

      {/* Logout Button */}
      <div className="p-6 border-t border-gray-100">
        <button
          onClick={onLogout}
          className="w-full bg-red-50 text-red-600 py-4 rounded-full hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </button>
      </div>
    </div>
  );
}
