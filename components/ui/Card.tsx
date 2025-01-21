'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Hobby {
  id: number;
  text: string;
  emoji: string;
  x: number;
  y: number;
}

// Function to generate random positions within the container
const getRandomPosition = (maxWidth: number, maxHeight: number) => {
  const x = Math.floor(Math.random() * maxWidth);
  const y = Math.floor(Math.random() * maxHeight);
  return { x, y };
};

export const DraggableCard = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [hobbies, setHobbies] = useState<Hobby[]>([]);

  useEffect(() => {
    if (constraintsRef.current) {
      const { width, height } = constraintsRef.current.getBoundingClientRect();
      const initialHobbies: Hobby[] = [
        { id: 1, text: "Cooking", emoji: "🍳", ...getRandomPosition(width - 100, height - 40) },
        { id: 2, text: "Photography", emoji: "📸", ...getRandomPosition(width - 100, height - 40) },
        { id: 3, text: "Gaming", emoji: "🎮", ...getRandomPosition(width - 100, height - 40) },
        { id: 4, text: "Camping", emoji: "🏕️", ...getRandomPosition(width - 100, height - 40) },
        { id: 5, text: "Running", emoji: "🏃", ...getRandomPosition(width - 100, height - 40) },
        { id: 6, text: "Reading", emoji: "📚", ...getRandomPosition(width - 100, height - 40) },
        { id: 7, text: "Football", emoji: "⚽", ...getRandomPosition(width - 100, height - 40) },
        { id: 8, text: "Movies", emoji: "🎬", ...getRandomPosition(width - 100, height - 40) },
        { id: 9, text: "History", emoji: "📜", ...getRandomPosition(width - 100, height - 40) },
      ];
      setHobbies(initialHobbies);
    }
  }, []);

  return (
    <div 
      ref={constraintsRef}
      className="w-full h-[200px] bg-transparent rounded-lg relative overflow-hidden"
    >
      {hobbies.map((hobby) => (
        <motion.div
          key={hobby.id}
          drag
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={constraintsRef}
          whileDrag={{ scale: 1.1 }}
          initial={{ x: hobby.x, y: hobby.y }}
          className="absolute cursor-grab active:cursor-grabbing"
        >
          <div className="bg-[#1a1f38] text-gray px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap">
            <span>{hobby.emoji}</span>
            <span className="text-sm font-medium">{hobby.text}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};