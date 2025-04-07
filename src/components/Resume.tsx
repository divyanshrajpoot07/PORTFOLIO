const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 max-w-md text-center relative">
          
          {/* Top dot */}
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#B3431E] rounded-full shadow-md" />

          {/* Icon and Title */}
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <span className="text-[#B3431E] text-xl">📄</span>
            Resume
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-4 text-sm md:text-base">
        
          </p>

          {/* Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-2 md:py-2.5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
