import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';


const MenuBar = () => {
    const scrollRef = useRef(null);
    const sections = useSelector(state=>state.menuSection.sections)
      const scroll = (direction) => {
        if (direction === 'left') {
          scrollRef.current.scrollBy({ left: -1000, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 1000, behavior: 'smooth' });
        }
      };
      const [activeSection, setActiveSection] = useState('');

      const handleScroll = () => {
        const currentSection = sections.find(section => {
          const element = document.querySelector(section.href);
          if (element) {
            const bounding = element.getBoundingClientRect();
            return bounding.top >= 0 && bounding.top <= window.innerHeight / 2;
          }
          return false;
        });
    
        if (currentSection) {
          setActiveSection(currentSection.href);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <div className="px-24  flex items-center space-x-3  overflow-x-auto py-5  shadow-lg  bg-white">
        <div className=" ">
          <input
            type="text"
            placeholder="Search in menu"
            className="px-4 py-2 border border-gray-300 bg-gray-200 rounded-full focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
        onClick={() => scroll('left')}
        className="bg-red-500 text-white rounded-full px-3 py-2"
      >
        {'<'}
      </button>
      <div className=" bg-white   overflow-x-auto scroll-smooth scrollbar-hide " ref={scrollRef}>
      <div className="flex space-x-4 scrollbar-hide">
        {sections.map((section) => (
        
        <a
        key={section.name}
        href={section.href}
        
        className={`whitespace-nowrap py-4 px-6 hover:border-b hover:border-gray-500 focus:border-b-2 focus:scale-110 focus:text-gray-800 inline-block text-sm font-medium ${
          activeSection === section.href
            ? 'text-gray-900 border-b-2 border-gray-900'
            : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
        }`}
      >
        {section.href.split('#')} ({section.count})
      </a>
        ))}
      </div>
    </div>
<button
        onClick={() => scroll('right')}
        className="bg-red-500 text-white rounded-full px-3 py-2"
      >
        {'>'}
      </button>
      </div>

  );
};

export default MenuBar;
