import { ArrowLeft, Save } from 'lucide-react';
import { useState } from 'react';

export interface UserProfile {
  fullName: string;
  email: string;
  program: string;
  programYear: string;
  expectedGraduation: string;
  bio: string;
}

interface EditProfileScreenProps {
  profile: UserProfile;
  onSave: (profile: UserProfile) => void;
  onBack: () => void;
}

export function EditProfileScreen({ profile, onSave, onBack }: EditProfileScreenProps) {
  const [formData, setFormData] = useState<UserProfile>(profile);

  const handleChange = (field: keyof UserProfile, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onBack();
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 pb-4 border-b border-gray-100">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft className="w-6 h-6" style={{ color: '#000000' }} />
        </button>
        <h1 className="text-[28px]" style={{ fontWeight: 700, color: '#000000' }}>Edit Profile</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-[14px] mb-2" style={{ fontWeight: 600, color: '#000000' }}>
              Full Name
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className="w-full px-4 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              style={{ fontSize: '15px', color: '#000000' }}
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[14px] mb-2" style={{ fontWeight: 600, color: '#000000' }}>
              University Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-4 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              style={{ fontSize: '15px', color: '#000000' }}
              placeholder="student@uwaterloo.ca"
            />
          </div>

          {/* Program */}
          <div>
            <label className="block text-[14px] mb-2" style={{ fontWeight: 600, color: '#000000' }}>
              Program
            </label>
            <input
              type="text"
              value={formData.program}
              onChange={(e) => handleChange('program', e.target.value)}
              className="w-full px-4 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              style={{ fontSize: '15px', color: '#000000' }}
              placeholder="e.g., Computer Engineering"
            />
          </div>

          {/* Program Year/Term */}
          <div>
            <label className="block text-[14px] mb-2" style={{ fontWeight: 600, color: '#000000' }}>
              Current Year/Term
            </label>
            <input
              type="text"
              value={formData.programYear}
              onChange={(e) => handleChange('programYear', e.target.value)}
              className="w-full px-4 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              style={{ fontSize: '15px', color: '#000000' }}
              placeholder="e.g., 1A, 2B, 3rd Year"
            />
          </div>

          {/* Expected Graduation */}
          <div>
            <label className="block text-[14px] mb-2" style={{ fontWeight: 600, color: '#000000' }}>
              Expected Graduation
            </label>
            <input
              type="text"
              value={formData.expectedGraduation}
              onChange={(e) => handleChange('expectedGraduation', e.target.value)}
              className="w-full px-4 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              style={{ fontSize: '15px', color: '#000000' }}
              placeholder="e.g., 2029, Spring 2028"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-[14px] mb-2" style={{ fontWeight: 600, color: '#000000' }}>
              Bio <span className="text-gray-400">(Optional)</span>
            </label>
            <textarea
              value={formData.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
              className="w-full px-4 py-3.5 bg-white rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-none"
              style={{ fontSize: '15px', color: '#000000', minHeight: '100px' }}
              placeholder="Tell us about yourself..."
              maxLength={200}
            />
            <p className="text-xs mt-1" style={{ color: '#6C757D' }}>
              {formData.bio.length}/200 characters
            </p>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="p-6 border-t border-gray-100 bg-white">
        <button
          onClick={handleSave}
          className="w-full py-4 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
          style={{
            backgroundColor: '#0066CC',
            color: 'white',
            fontSize: '16px',
            fontWeight: 600,
          }}
        >
          <Save className="w-5 h-5" />
          Save Changes
        </button>
      </div>
    </div>
  );
}
