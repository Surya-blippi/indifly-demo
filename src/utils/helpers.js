// Utility function for className merging
export const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };
  
  // Color mapping utilities
  export const getColorClasses = (color) => {
    const colorMap = {
      blue: { 
        gradient: 'from-blue-600 to-blue-700', 
        bg: 'from-blue-50 to-blue-100', 
        text: 'text-blue-900', 
        accent: '#01295C' 
      },
      green: { 
        gradient: 'from-green-600 to-green-700', 
        bg: 'from-green-50 to-green-100', 
        text: 'text-green-900', 
        accent: '#059669' 
      },
      orange: { 
        gradient: 'from-orange-600 to-orange-700', 
        bg: 'from-orange-50 to-orange-100', 
        text: 'text-orange-900', 
        accent: '#FF681E' 
      },
      purple: { 
        gradient: 'from-purple-600 to-purple-700', 
        bg: 'from-purple-50 to-purple-100', 
        text: 'text-purple-900', 
        accent: '#8B5CF6' 
      }
    };
    return colorMap[color] || colorMap.blue;
  };
  
  export const getProductColors = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-100', border: 'border-blue-200', knob: 'bg-blue-200' },
      orange: { bg: 'bg-orange-100', border: 'border-orange-200', knob: 'bg-orange-200' },
      purple: { bg: 'bg-purple-100', border: 'border-purple-200', knob: 'bg-purple-200' },
      green: { bg: 'bg-green-100', border: 'border-green-200', knob: 'bg-green-200' }
    };
    return colorMap[color] || colorMap.blue;
  };
  
  export const getModalColors = (color) => {
    const colorMap = {
      blue: { gradient: 'from-blue-900 to-blue-700', text: 'text-blue-600', bg: '#01295C' },
      orange: { gradient: 'from-orange-900 to-orange-700', text: 'text-orange-600', bg: '#FF681E' },
      purple: { gradient: 'from-purple-900 to-purple-700', text: 'text-purple-600', bg: '#8B5CF6' },
      green: { gradient: 'from-green-900 to-green-700', text: 'text-green-600', bg: '#10B981' }
    };
    return colorMap[color] || colorMap.blue;
  };