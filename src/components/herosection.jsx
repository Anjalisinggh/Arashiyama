import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative">

      {/* Mobile */}
      <img
        src="sehero.png"
        alt="Hero Section"
        className="block sm:hidden relative -top-20 z-10 w-full h-auto"
      />

      {/* Tablet/Desktop */}
      <img
        src="hero.png"
        alt="Hero Section"
        className="hidden sm:block relative -top-5 z-10 w-full"
      />
     
    </section>
  );
}