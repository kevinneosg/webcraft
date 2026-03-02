export function Partners() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold mb-2">
            Trusted Technology Partners
          </p>
          <h3 className="text-2xl font-bold text-gray-900">
            Built with Industry-Leading Tools
          </h3>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {/* Google */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
              alt="Google" 
              className="h-8 md:h-10"
            />
          </div>

          {/* Meta */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <svg className="h-8 md:h-10" viewBox="0 0 256 256" fill="none">
              <path d="M256 128C256 57.3076 198.692 0 128 0C57.3076 0 0 57.3076 0 128C0 191.076 46.7884 243.462 107.776 254.395V164.992H75.264V128H107.776V99.84C107.776 67.6276 126.849 49.92 156.288 49.92C170.497 49.92 185.408 52.608 185.408 52.608V84.224H169.024C152.896 84.224 148.224 94.7196 148.224 105.472V128H184V164.992H148.224V254.911C211.596 244.742 256 192.973 256 128Z" fill="#0866FF"/>
            </svg>
          </div>

          {/* Vercel */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <svg className="h-8 md:h-10" viewBox="0 0 284 65" fill="none">
              <path d="M141.68 16.25c-5.38 0-9.68 4.3-9.68 9.68s4.3 9.68 9.68 9.68 9.68-4.3 9.68-9.68-4.3-9.68-9.68-9.68zm24.48 0c-5.38 0-9.68 4.3-9.68 9.68s4.3 9.68 9.68 9.68 9.68-4.3 9.68-9.68-4.3-9.68-9.68-9.68z" fill="currentColor"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 25.93L71.5 0l71.5 25.93v39.14H0V25.93z" fill="currentColor"/>
            </svg>
          </div>

          {/* AWS */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <svg className="h-8 md:h-10" viewBox="0 0 304 182" fill="none">
              <path d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6 6.1-5.2 14.2-7.8 24.5-7.8 3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5.5-.7 1.4-1.4 2.8-2.1 3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zm-40.6 15.2c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4.6-2.4 1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7-3.2-.4-6.3-.6-9.4-.6-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L96.7 10.2c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9-.8.6-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1-.8-.7-1.5-2-1.9-4l-15.5-64.5-15.4 64.4c-.5 2-1.1 3.3-1.9 4-.8.7-2.2 1-4 1h-8.6zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2L246 52c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1 1.8-3.2 4.2-6 7.2-8.2 3-2.3 6.4-4 10.4-5.2 4-1.2 8.2-1.7 12.6-1.7 2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8-3.1 1.9-4.7 4.8-4.7 8.9 0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6 3.1 4.1 4.6 8.8 4.6 14 0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z" fill="#FF9900"/>
              <path d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z" fill="#FF9900"/>
              <path d="M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z" fill="#FF9900"/>
            </svg>
          </div>

          {/* Payload */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <svg className="h-8 md:h-10" viewBox="0 0 150 35" fill="none">
              <path d="M12 0L0 7v21l12 7 12-7V7L12 0zm0 5l8 4.5v13L12 27l-8-4.5v-13L12 5z" fill="currentColor"/>
              <text x="30" y="24" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="currentColor">Payload</text>
            </svg>
          </div>

          {/* Figma */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <svg className="h-10 md:h-12" viewBox="0 0 38 57" fill="none">
              <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
              <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
              <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
              <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
              <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
            </svg>
          </div>

          {/* Vercel (duplicate removed, keeping one) */}

          {/* Unstoppable Domains */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
            <svg className="h-8 md:h-10" viewBox="0 0 200 50" fill="none">
              <circle cx="15" cy="25" r="12" fill="#0D67FE"/>
              <circle cx="15" cy="25" r="7" fill="white"/>
              <text x="35" y="32" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#0D67FE">Unstoppable Domains</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
