import React from 'react'

export const DownloadButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string; icon: React.ReactNode; position: string; handleClick?: () => void; otherClasses?: string;
}) => {
  return (
    <button className="p-[3px] relative w-full max-w-md">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex items-center justify-center gap-2">
            {position === 'left' && icon}
            <span>{title}</span>
            {position === 'right' && icon}
        </div>
    </button>
  )
}
