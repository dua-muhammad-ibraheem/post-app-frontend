const Hero = () => {
  return (
    <section className="relative overflow-hidden w-full py-40 font-['Poppins',sans-serif] bg-[#F8F7F2]">

      {/* Background Blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-44 -left-24 w-[520px] h-[520px] rounded-full bg-[#EB8223]/35 blur-[140px]" />

        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-[#1D3374]/15 blur-[150px]" />

        <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-[#FFD89B]/40 blur-[150px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <span className="inline-block bg-[#EB8223]/10 text-[#EB8223] px-4 py-2 rounded-full text-sm font-semibold mb-6">
          Share Ideas • Connect • Create
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-[#1D3374] leading-tight">
          Share Your Moments
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
          Discover inspiring stories, share your thoughts, and connect
          with a community that loves creating and exploring new ideas.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-[#EB8223] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#d97318] transition">
            Explore Posts
          </button>

          <button className="border-2 border-[#1D3374] text-[#1D3374] px-8 py-3 rounded-xl font-semibold hover:bg-[#1D3374] hover:text-white transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;