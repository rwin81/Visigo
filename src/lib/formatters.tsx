import React from 'react';

export const formatVisiGoText = (text: string) => {
  if (!text || typeof text !== 'string') return text;
  const parts = text.split(/(VisiGo)/g);
  return parts.map((part, i) => 
    part === 'VisiGo' ? (
      <span key={i} className="font-logo font-black tracking-tight">
        <span className="text-brand-blue dark:text-brand-cyan">Visi</span>
        <span className="text-brand-green">Go</span>
      </span>
    ) : part
  );
};
