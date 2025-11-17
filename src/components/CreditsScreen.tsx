import { ArrowLeft, ExternalLink, Github, Linkedin } from 'lucide-react';
import { GooseMascot } from './GooseMascot';

interface CreditsScreenProps {
  onBack: () => void;
}

const team = [
  { name: 'Zain Khan', role: 'Product & Design', color: '#0066CC' },
  { name: 'Aidan Jeon', role: 'Engineering', color: '#00C853' },
  { name: 'George Girgis', role: 'Design & UX', color: '#7C4DFF' },
  { name: 'Rayan Shakeel', role: 'Engineering', color: '#FF6B35' },
];

export function CreditsScreen({ onBack }: CreditsScreenProps) {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 pb-4 border-b border-gray-100">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft className="w-6 h-6" style={{ color: '#212529' }} />
        </button>
        <h1 className="text-[28px]" style={{ fontWeight: 700, color: '#212529' }}>About WatUDoin</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {/* Goose Mascot */}
        <div className="text-center mb-8">
          <GooseMascot className="w-32 h-32 mx-auto mb-4" />
          <h2 className="text-[24px] mb-2 logo-watudoin" style={{ fontWeight: 700, color: '#0066CC' }}>
            WatUDoin
          </h2>
          <p className="text-[16px] px-4" style={{ color: '#6C757D' }}>
            Connecting campus, one goose at a time.
          </p>
        </div>

        {/* Event Info */}
        <div className="mb-8 p-5 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-gray-100">
          <h3 className="text-[18px] mb-2" style={{ fontWeight: 600, color: '#212529' }}>
            Created at
          </h3>
          <p className="text-[16px] mb-3" style={{ fontWeight: 600, color: '#0066CC' }}>
            Blueprint Canvas Designathon 2025
          </p>
          <a
            href="https://lu.ma/blueprint-designathon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px]"
            style={{ color: '#0066CC', fontWeight: 500 }}
          >
            Learn more about Blueprint
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Team */}
        <div className="mb-8">
          <h3 className="text-[20px] mb-4" style={{ fontWeight: 700, color: '#212529' }}>
            Meet the Team
          </h3>
          <div className="space-y-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: member.color }}
                >
                  <span className="text-white text-[18px]" style={{ fontWeight: 700 }}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-[16px] mb-0.5" style={{ fontWeight: 600, color: '#212529' }}>
                    {member.name}
                  </h4>
                  <p className="text-[14px]" style={{ color: '#6C757D' }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="mb-8 p-5 bg-gray-50 rounded-2xl">
          <h3 className="text-[18px] mb-3" style={{ fontWeight: 600, color: '#212529' }}>
            Our Mission
          </h3>
          <p className="text-[15px] leading-relaxed" style={{ color: '#495057' }}>
            WatUDoin helps university students discover campus events, join clubs, create spontaneous hangouts, and build meaningful connections—all through an intuitive map-based interface.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-[18px] mb-3" style={{ fontWeight: 600, color: '#212529' }}>
            Built With
          </h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind CSS', 'Figma'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-blue-50 rounded-full text-[14px]"
                style={{ color: '#0066CC', fontWeight: 500 }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-4 pb-8 border-t border-gray-100">
          <p className="text-[13px] mb-2" style={{ color: '#ADB5BD' }}>
            WatUDoin v1.0.0
          </p>
          <p className="text-[13px]" style={{ color: '#ADB5BD' }}>
            © 2025 Blueprint Canvas Designathon
          </p>
        </div>
      </div>
    </div>
  );
}
