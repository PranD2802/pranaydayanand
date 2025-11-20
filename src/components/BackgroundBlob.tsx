const BackgroundBlob = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">

      {/* --- MAIN BIG BLOB (Behance Blue) --- */}
      <svg
        className="absolute right-[-5%] top-[20%] w-[650px] h-[650px] opacity-[0.12]"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#005BFF"
          d="
            M438.5,63.5Q506,127,530,217.5
            Q554,308,504.5,382.5
            Q455,457,373.5,503.5
            Q292,550,215.5,501
            Q139,452,93.5,380
            Q48,308,78,218
            Q108,128,190,82
            Q272,36,358.5,53
            Q445,70,438.5,63.5Z"
        />
      </svg>

      {/* --- SECOND SOFT BLOB --- */}
      <svg
        className="absolute right-[0%] top-[25%] w-[600px] h-[600px] opacity-[0.07]"
        viewBox="0 0 600 600"
      >
        <path
          fill="#005BFF"
          d="
            M438.5,63.5Q506,127,530,217.5
            Q554,308,504.5,382.5
            Q455,457,373.5,503.5
            Q292,550,215.5,501
            Q139,452,93.5,380
            Q48,308,78,218
            Q108,128,190,82
            Q272,36,358.5,53
            Q445,70,438.5,63.5Z"
        />
      </svg>

       <svg
        className="absolute left-[-5%] top-[20%] w-[450px] h-[450px] opacity-[0.20]"
        viewBox="0 0 500 500"
        fill="none"
      >
        <path
          d="M20 250 
             Q80 180 150 230 
             T280 230 
             Q330 260 300 300 
             T200 360 
             Q120 380 90 330 
             T20 250 Z"
          stroke="#005BFF"
          strokeWidth="2"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />

        {/* Small paper flight icon */}
        <path
          d="M140 210 L160 220 L140 230 Z"
          fill="#005BFF"
        />
      </svg>

      {/* RIGHT LONG SWIRL */}
      <svg
        className="absolute right-[-5%] top-[40%] w-[550px] h-[550px] opacity-[0.20]"
        viewBox="0 0 600 600"
        fill="none"
      >
        <path
          d="M500 300
             Q430 260 360 300
             T240 300
             Q180 330 210 380
             T320 440
             Q410 460 450 410
             T500 300 Z"
          stroke="#005BFF"
          strokeWidth="2"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />

        {/* Arrow head at end */}
        <polygon
          points="480,300 500,300 480,310"
          fill="#005BFF"
        />
      </svg>

      {/* --- CURVED INTERNET / WAVE BACKGROUND (Behance exact pattern style) --- */}
      <svg
        className="absolute right-0 top-[5%] w-[500px] h-[500px] opacity-[0.08]"
        viewBox="0 0 500 500"
        fill="none"
      >
        <path
          d="M50 250 Q150 100 250 250 T450 250"
          stroke="#005BFF"
          strokeWidth="2"
          opacity="0.4"
        />
        <path
          d="M50 270 Q150 120 250 270 T450 270"
          stroke="#005BFF"
          strokeWidth="2"
          opacity="0.35"
        />
        <path
          d="M50 290 Q150 140 250 290 T450 290"
          stroke="#005BFF"
          strokeWidth="2"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};

export default BackgroundBlob;
