import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const defaultPages = [
  {
    leftBgImage: 'https://images.unsplash.com/photo-1748968218568-a5eac621e65c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D',
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Welcome Aboard!',
      description: 'Hold on to your mouse, things are about to get wild!',
    },
  },
  {
    leftBgImage: null,
    rightBgImage: 'https://images.unsplash.com/photo-1749315099905-9cf6cabd9126?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D',
    leftContent: {
      heading: 'Page 2',
      description: 'Spoiler alert: it’s still empty. Keep that scroll finger limber!',
    },
    rightContent: null,
  },
  {
    leftBgImage: 'https://images.unsplash.com/photo-1747893541442-a139096ea39c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMzZ8fHxlbnwwfHx8fHw%3D',
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Page 3',
      description: 'Plot twist: You’ve reached the midpoint. Bravo!',
    },
  },
  {
    leftBgImage: null,
    rightBgImage: 'https://images.unsplash.com/photo-1748164521179-ae3b61c6dd90?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMjR8fHxlbnwwfHx8fHw%3D',
    leftContent: {
      heading: 'Page 4',
      description: 'One more scroll, I promise—almost there!',
    },
    rightContent: null,
  },
  {
    leftBgImage: 'https://images.unsplash.com/photo-1742626157052-f5a373a727ef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D',
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Epic Finale!',
      description: (
        <>
         :)
        </>
      ),
    },
  },
];

export default function ScrollAdventure({ pages = defaultPages, onClose }) {
  const [currentPage, setCurrentPage] = useState(1);
  const numOfPages = pages.length;
  const animTime = 1000;
  const scrolling = useRef(false);

  const navigateUp = () => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
  };

  const navigateDown = () => {
    if (currentPage < numOfPages) setCurrentPage(p => p + 1);
  };

  const handleWheel = (e) => {
    e.preventDefault(); // Lock main page scrolling
    if (scrolling.current) return;
    scrolling.current = true;
    e.deltaY > 0 ? navigateDown() : navigateUp();
    setTimeout(() => (scrolling.current = false), animTime);
  };

  const handleKeyDown = (e) => {
    if (scrolling.current) return;
    if (e.key === 'ArrowUp') {
      scrolling.current = true;
      navigateUp();
      setTimeout(() => (scrolling.current = false), animTime);
    } else if (e.key === 'ArrowDown') {
      scrolling.current = true;
      navigateDown();
      setTimeout(() => (scrolling.current = false), animTime);
    } else if (e.key === 'Escape' && onClose) {
      onClose();
    }
  };

  useEffect(() => {
    // Disable body scroll when open
    document.body.style.overflow = 'hidden';
    
    // Add wheel with passive: false to allow e.preventDefault()
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage]);

  return (
    <div className="fixed inset-0 w-full h-full z-[9999] overflow-hidden bg-black select-none">
      
      {/* Floating Header controls */}
      <div className="absolute top-8 left-8 right-8 z-50 flex items-center justify-between pointer-events-none">
        <span className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
          PROJECT ARCHIVE // 0{currentPage}
        </span>
        {onClose && (
          <button
            onClick={onClose}
            className="pointer-events-auto px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-md text-white/80 hover:text-white hover:border-white/40 font-mono text-[9px] tracking-widest uppercase flex items-center gap-2 transition-all"
          >
            <X className="w-3.5 h-3.5" /> ESCAPE ARCHIVE
          </button>
        )}
      </div>

      {pages.map((page, i) => {
        const idx = i + 1;
        const isActive = currentPage === idx;
        const upOff = 'translateY(-100%)';
        const downOff = 'translateY(100%)';
        const leftTrans = isActive ? 'translateY(0)' : downOff;
        const rightTrans = isActive ? 'translateY(0)' : upOff;

        return (
          <div key={idx} className="absolute inset-0">
            {/* Left Half */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full transition-transform duration-[1000ms]"
              style={{ transform: leftTrans }}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: page.leftBgImage ? `url(${page.leftBgImage})` : undefined }}
              >
                {page.leftBgImage && <div className="absolute inset-0 bg-black/40 z-10" />}
                <div className="relative z-20 flex flex-col items-center justify-center h-full text-white p-12">
                  {page.leftContent && (
                    <div className="max-w-md text-left">
                      <h2 className="text-3xl font-display font-bold uppercase mb-6 tracking-tight">
                        {page.leftContent.heading}
                      </h2>
                      {typeof page.leftContent.description === 'string' ? (
                        <p className="text-sm font-body leading-relaxed text-white/70">
                          {page.leftContent.description}
                        </p>
                      ) : (
                        <div className="text-sm font-body text-white/70">
                          {page.leftContent.description}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Half */}
            <div
              className="absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-[1000ms]"
              style={{ transform: rightTrans }}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: page.rightBgImage ? `url(${page.rightBgImage})` : undefined }}
              >
                {page.rightBgImage && <div className="absolute inset-0 bg-black/40 z-10" />}
                <div className="relative z-20 flex flex-col items-center justify-center h-full text-white p-12">
                  {page.rightContent && (
                    <div className="max-w-md text-left">
                      <h2 className="text-3xl font-display font-bold uppercase mb-6 tracking-tight">
                        {page.rightContent.heading}
                      </h2>
                      {typeof page.rightContent.description === 'string' ? (
                        <p className="text-sm font-body leading-relaxed text-white/70">
                          {page.rightContent.description}
                        </p>
                      ) : (
                        <div className="text-sm font-body text-white/70">
                          {page.rightContent.description}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
