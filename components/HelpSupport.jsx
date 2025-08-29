  import React from 'react';
  import Image from 'next/image';
  import Container from './Common/Container';

  const logos = [
    { src: '/img/helpsupport/1.png', alt: 'Alex and Ani' },
    { src: '/img/helpsupport/2.png', alt: 'Petco' },
    { src: '/img/helpsupport/3.png', alt: 'Hormel' },
    { src: '/img/helpsupport/4.png', alt: 'Dean' },
    { src: '/img/helpsupport/5.png', alt: 'Meijer' },
  ];

  export default function HelpSupport() {
    return (
      <>
        <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
          <Container className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 xl:gap-16">
            {/* Left: Form */}
            <div className="flex-1 w-full max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-2 md:mb-1 leading-tight">Help support</h2>
              <p className="text-accent-blue text-sm sm:text-base md:text-lg mb-6 md:mb-8 mt-1">Please fill these fields for support ticket</p>
              <form className="flex flex-col gap-4 md:gap-5 w-full max-w-[430px] mx-auto lg:mx-0">
                <input type="text" placeholder="Full Name *" className="border border-gray-300 rounded-md px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-accent-blue text-sm md:text-base w-full" />
                <input type="text" placeholder="Company name" className="border border-gray-300 rounded-md px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-accent-blue text-sm md:text-base w-full" />
                <select className="border border-gray-300 rounded-md px-3 md:px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-accent-blue text-sm md:text-base text-gray-500 w-full">
                  <option>Your Support Challenges (optional)</option>
                  <option>Technical Issue</option>
                  <option>Billing</option>
                  <option>Account Access</option>
                  <option>Other</option>
                </select>
                <button type="submit" className="bg-accent-dark text-white font-semibold rounded-md px-6 md:px-8 py-2 md:py-3 mt-1 md:mt-2 shadow-md hover:bg-accent-dark-hover transition text-base md:text-lg">Submit</button>
              </form>
              <p className="text-xs text-text-primary mt-3 font-semibold max-w-[430px] mx-auto lg:mx-0 text-center lg:text-left">
                <span className="font-bold">Note:</span> <span className="font-normal">After you submit, our team will personally reach out to discuss your ideal setup.</span>
              </p>
            </div>

            {/* Right: Overlapping Images */}
            <div className="flex-1 flex flex-col items-center justify-center relative w-full lg:pl-8 mt-8 lg:mt-0">
              <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]">
                {/* Container with proper aspect ratio and minimum height */}
                <div className="relative w-full aspect-square">
                  {/* First Image - positioned responsively */}
                  <div className="absolute z-20 top-0 left-0 w-[85%] h-[85%] rounded-2xl overflow-hidden shadow-2xl bg-white">
                    <Image
                      fill
                      src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=500&q=80"
                      alt="Support 1"
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 640px) 250px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
                      priority
                    />
                  </div>
                  {/* Second Image - positioned with better spacing */}
                  <div className="absolute z-10 bottom-0 right-0 w-[85%] h-[85%] rounded-xl overflow-hidden shadow-2xl bg-white">
                    <Image
                      fill
                      src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=500&q=80"
                      alt="Support 2"
                      className="object-cover rounded-xl"
                      sizes="(max-width: 640px) 250px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>

          {/* Logos row */}
          <Container className="w-full flex flex-col items-center mt-6 md:mt-8 lg:mt-16 mb-0">
            <div className="bg-bg-light py-3  md:py-5 md:px-8 grid grid-cols-3 sm:grid-cols-5 justify-center bg-gray-100 items-center gap-2 sm:gap-4 md:gap-6 w-full">
              {logos.map((logo, idx) => (
                <div key={idx} className={`flex items-center justify-center w-full h-full max-h-[60px] sm:max-h-[80px] md:max-h-[90px] ${idx >= 3 ? 'hidden sm:flex' : ''}`}>
                  <img src={logo.src} alt={logo.alt} width={150} height={100} className="object-contain grayscale mx-auto max-w-full h-auto" />
                </div>
              ))}
            </div>
          </Container>
        </section>
      </>
    );
  }