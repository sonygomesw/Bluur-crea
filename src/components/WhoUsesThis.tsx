import React from 'react';
import { Music, Users, Building2, Disc } from 'lucide-react';

const WhoUsesThis = () => {
  const users = [
    {
      icon: <Music className="w-6 h-6 text-blue-600" />,
      title: 'Independent Artists',
      color: 'from-blue-50 to-blue-100'
    },
    {
      icon: <Users className="w-6 h-6 text-violet-600" />,
      title: 'Managers',
      color: 'from-violet-50 to-violet-100'
    },
    {
      icon: <Building2 className="w-6 h-6 text-indigo-600" />,
      title: 'Labels',
      color: 'from-indigo-50 to-indigo-100'
    },
    {
      icon: <Disc className="w-6 h-6 text-fuchsia-600" />,
      title: 'Producers',
      color: 'from-fuchsia-50 to-fuchsia-100'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 font-manrope mb-12">
            Who Uses This?
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {users.map((user, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${user.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {user.icon}
                </div>
                <p className="text-sm font-semibold text-gray-900 font-manrope text-center">
                  {user.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoUsesThis;
