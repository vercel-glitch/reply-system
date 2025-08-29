import React from 'react';
import Container from './Common/Container'
export default function Solution() {
  return (
    <section className="bg-white lg:py-20 mt-24 flex flex-col items-center">
      {/* Title */}
      <Container>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-text-primary mb-4">Solution</h2>
        {/* Subtitle */}
        <p className="text-center text-text-secondary text-lg md:text-xl mb-12 max-w-2xl">
          We’re not just another ticketing platform. We’re your <br />
          <span className="font-bold text-text-secondary">managed customer support partner.</span>
        </p>
      </Container>
      {/* Main content grid */}
      <Container className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Feature list */}
        <div className="flex flex-col gap-4">
          {[
            {
              bold: 'Unlike typical support tools,',
              rest: 'we deliver:',
            },
            {
              bold: 'A dedicated workspace',
              rest: 'created just for your company',
              italic: true,
            },
            {
              bold: 'Fully managed setup and onboarding',
            },
            {
              bold: 'Continuous optimization',
              rest: 'based on your needs',
            },
            {
              bold: 'Customized workflows,',
              rest: 'priorities, and permissions',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
              <div className="w-4 h-4 mt-1 rounded-sm bg-primary flex-shrink-0"></div>
              <div className="text-text-primary text-base md:text-lg">
                <span className="font-bold">
                  {item.bold}
                </span>
                {item.italic ? (
                  <span className="italic"> {item.rest}</span>
                ) : item.rest ? (
                  <span> {item.rest}</span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        {/* Right: Two stacked images and text */}
        <div>
          <div className='flex flex-row items-center justify-end relaive min-h-full ' >
            <div className='z-50 w-full left-0'>
              <div className='w-[250%] rounded-tl-3xl  overflow-hidden shadow-xl'>
                <img src="/img/d2.png" alt="" />
              </div>
            </div>
            <div className='max-w-[65%]'>
              <div className='z-50 relative shadow-xl rounded-2xl overflow-hidden'>
                <img src="/img/ticket.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col  w-full">
          <div className="flex-row grid gird-cols-3 items-start w-full">
            <img
              src="/img/d2.png"
              alt="Child Tickets Example 2"
              className="rounded-tl-3xl shadow-xl mb-4 md:mb-0 md:-mr-56 h-48 w-auto max-w-[90vw] md:h-70 col-span-1"
            />
            <img
              src="/img/ticket.png"
              alt="Child Tickets Example"
              className="rounded-2xl shadow-xl w-full h-full col-span-2 mb-6"
            />
          </div>
          <div className="text-center text-text-primary text-sm md:text-base max-w-md mt-2">
            <span className="italic">
              Whether you’re running a SaaS product, an eCommerce brand, or a service business, we mold the support system around your customers and your operations — not the other way around.
            </span>
            <br />
            <span className="font-bold">Your business is unique. Your support should be too.</span>
          </div>
        </div> */}
      </Container>
    </section>
  );
} 