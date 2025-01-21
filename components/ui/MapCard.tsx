'use client';
import React from 'react';

export const MapCard = () => {
  return (
    <div className="w-full h-full bg-[#1a1f38] rounded-lg relative overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48152.696811978225!2d29.00658979036013!3d41.03524111445812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac826d524c9f1%3A0xc14f7612337b7f38!2zw5xza8O8ZGFyL8Swc3RhbmJ1bCwgVMO8cmtpeWU!5e0!3m2!1sen!2ssa!4v1737078753694!5m2!1sen!2ssa"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'invert(1) hue-rotate(180deg)', transform: 'scale(1.2)', transformOrigin: '0 0' }}
        allowFullScreen
        loading="lazy"
      ></iframe>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
        <img src="./MemojiSmile.png" alt="My Memoji" className="size-20" />
      </div>
    </div>
  );
}; 