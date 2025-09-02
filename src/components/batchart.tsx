import React from 'react';

const BarChart = () => {
  const data = [
    { month: 'Sonu', value: 30, color: 'bg-gray-300' },
    { month: 'Raj', value: 45, color: 'bg-gray-300' },
    { month: 'Azr', value: 65, color: 'bg-gray-300' },
    { month: 'Fathi', value: 85, color: 'bg-green-700' }, // Active/highlighted bar
  ];

  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="  pt-10 pr-4 rounded-lg">
      {/* Chart Container */}
      <div className="flex items-end justify-center space-x-4 h-40 ">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Bar */}
            <div
              className={`w-10 rounded-t-sm ${item.color} transition-all duration-300 hover:opacity-80`}
              style={{
                height: `${(item.value / maxValue) * 150}px`,
                backgroundImage: item.color === 'bg-green-700' 
                  ? 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.1) 3px, rgba(255,255,255,0.1) 6px)'
                  : 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)'
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Month Labels */}
      <div className="flex justify-center space-x-4">
        {data.map((item, index) => (
          <div key={index} className="w-8 text-center">
            <span className="text-xs text-gray-600 font-medium">
              {item.month}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;