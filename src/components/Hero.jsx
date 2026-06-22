const Hero = () => {
  return (
    <section className="w-full bg-[#EFEFEF] py-24 font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Heading: Big, bold, and clean dark slate text */}
        <h1 className="text-5xl md:text-7xl font-bold text-[#315762] leading-tight tracking-tight">
          Share Your Moments
        </h1>

        {/* Paragraph: Muted dark slate for premium readability */}
        <p className="mt-6 max-w-2xl text-base md:text-lg text-[#315762]/80 leading-relaxed">
          Create, manage and organize your posts in one place.
          Login to upload photos, edit your content and build your personal feed.
        </p>

        {/* Buttons: Smooth rounded corners matching the navbar button */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          
          {/* Primary Button: Vibrant Orange Fill */}
          <button className="bg-[#E9631A] text-white px-8 py-3.5 rounded-md font-semibold text-sm hover:bg-[#d05312] active:scale-95 transition-all duration-200 shadow-md">
            Login to Post
          </button>

          {/* Secondary Button: Dark Slate Border */}
          <button className="border-2 border-[#315762] text-[#315762] px-8 py-3.5 rounded-md font-semibold text-sm hover:bg-[#315762] hover:text-white active:scale-95 transition-all duration-200">
            Explore Posts
          </button>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;