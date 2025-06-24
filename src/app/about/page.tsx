import image from "next/image";
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

export default function About() {
  return (
    <div className="w-full bg-[#fafbfa]">
      {/* Hero Section */}
      <section className="w-full relative h-[500px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <Image src="/images/Banner.png" alt="AAAAAA Hero" className="absolute inset-0 w-full h-full object-cover object-center" width={1920} height={700} />
      </section>

      {/* Brand Story Section */}
      <div className="w-full flex flex-col items-center mt-12 mb-12">
        <div className="flex justify-center w-full">
          <button
            className="bg-[#27345C] text-white font-extrabold px-12 py-3 rounded-[32px] shadow-lg mb-[-36px] z-20 relative text-2xl tracking-wider border-4 border-white"
            style={{ fontFamily: 'inherit', letterSpacing: '0.05em' }}
          >
            ABOUT US
          </button>
        </div>
        <section
          className="w-full max-w-6xl mx-auto pt-16 pb-12 px-4 sm:px-8 bg-[#27345C] rounded-[64px] flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-0 text-white relative z-0 shadow-xl border border-blue-400"
        >
          <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/2 mb-8 md:mb-0 relative">
            <div className="absolute inset-0 flex justify-center items-center z-0">
              <div className="w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-[#3a4a7c]/60 to-[#27345C]/0 blur-2xl opacity-70"></div>
            </div>
            <Image
              src="/images/v22.png"
              alt="Vase"
              className="w-[26rem] h-[600px] object-contain drop-shadow-2xl relative z-10"
              width={416}
              height={600}
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start flex-1 text-center md:text-left px-0 md:px-8">
            <p
              className="text-2xl font-normal leading-relaxed mb-10"
              style={{ fontFamily: 'inherit' }}
            >
              AmbiAce is a luxury 3D printing studio that partners with visionary architects and interior designers to transform creative concepts into precision-crafted, sculptural décor. From bespoke art installations to refined statement pieces, we bring design visions to life through the fusion of cutting-edge additive manufacturing and boutique craftsmanship.
            </p>
            <button
              className="bg-[#D6BC8A] text-[#1a1a1a] font-extrabold px-12 py-4 rounded-[32px] shadow text-xl tracking-wider"
              style={{ fontFamily: 'inherit', letterSpacing: '0.05em' }}
            >
              ORDER NOW
            </button>
          </div>
        </section>
      </div>

      {/* Vision & Mission Section */}
      <section className="w-full flex justify-center items-center py-16 px-2 md:px-0 bg-[#d2b48c]">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
          {/* Image with border */}
          <div className="bg-white p-2 rounded-lg border-2 border-[#3a4a7c] shadow-lg flex-shrink-0">
            <Image
              src="/images/v44.png"
              alt="Vision Shelf"
              className="w-[340px] h-[440px] object-contain rounded-md"
              width={340}
              height={440}
            />
          </div>
          {/* Vision & Mission Card */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 flex-1 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#b89b5e] font-serif">Our Vision</h2>
            <p className="text-gray-700 mb-8 text-base md:text-lg">
              To become the preferred creative partner for architects and interior designers seeking innovative, luxury 3D-printed décor, while setting new standards for bespoke design and craftsmanship in the interior and architectural space
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#b89b5e] font-serif">Our mission</h2>
            <p className="text-gray-700 text-base md:text-lg">
              Empower design professionals to create décor that elevates spaces - offering possibilities that go beyond traditional materials and fabrication techniques. With AmbiAce, every piece is custom, exclusive, and architecturally integrated, ensuring that it seamlessly fits the aesthetic language of each project.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="w-full bg-white py-0 px-0">
        <h2 className="text-5xl font-extrabold text-black text-center pt-8 pb-6 tracking-tight">WHY US</h2>
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-stretch">
          {/* Image with border */}
          <div className="flex-1 flex justify-center items-center bg-white p-6">
            <div className="border-2 border-[#3a4a7c] rounded-md">
              <Image
                src="/images/banner4.png"
                alt="Why Us"
                className="w-[420px] h-[420px] object-cover rounded-md"
                width={420}
                height={420}
              />
            </div>
          </div>
          {/* Why Us List Card */}
          <div className="flex-1 bg-[#ede3d0] flex flex-col justify-center p-8 md:p-12">
            <ul className="list-disc pl-6 space-y-6 text-black text-lg">
              <li>
                <span className="font-bold">Architect & Designer-First</span><br/>
                <span className="font-normal">We exist to enhance your design vision, not compete with it</span>
              </li>
              <li>
                <span className="font-bold">Bespoke & Exclusive</span><br/>
                <span className="font-normal">No catalog; every piece is designed for the project</span>
              </li>
              <li>
                <span className="font-bold">Advanced Manufacturing</span><br/>
                <span className="font-normal">Large-scale, precise, premium-quality 3D printing</span>
              </li>
              <li>
                <span className="font-bold">Luxury Finishes</span><br/>
                <span className="font-normal">Sculptural, artistic outcomes with refined surface treatments</span>
              </li>
              <li>
                <span className="font-bold">End-to-End Partnership</span><br/>
                <span className="font-normal">From concept to final installation, we support the full creative process</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="w-full bg-white pt-8 pb-16">
        <h2 className="text-5xl font-extrabold text-black text-center pb-8 tracking-tight">OUR PROCESS</h2>
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* images Row */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 w-full">
            <Image src="/images/products/chairs.jpg" alt="Process 1" className="w-64 h-48 object-cover rounded-2xl shadow-md" width={256} height={192} />
            <Image src="/images/v22.png" alt="Process 2" className="w-64 h-48 object-cover rounded-2xl shadow-md" width={256} height={192} />
            <Image src="/images/products/chairs.jpg" alt="Process 3" className="w-64 h-48 object-cover rounded-2xl shadow-md" width={256} height={192} />
          </div>
          {/* Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full px-2 md:px-0">
            {/* Card 1 */}
            <div className="bg-[#ede3d0] border border-gray-400 rounded-md p-4 flex flex-col items-start min-h-[100px]">
              <span className="text-3xl font-serif font-bold text-[#b89b5e]">1</span>
              <span className="font-bold text-base">Creative Collaboration:</span>
              <span className="text-sm">We partner with architects/designers to understand and co-develop their vision</span>
            </div>
            {/* Card 2 */}
            <div className="bg-[#ede3d0] border border-gray-400 rounded-md p-4 flex flex-col items-start min-h-[100px]">
              <span className="text-3xl font-serif font-bold text-[#b89b5e]">2</span>
              <span className="font-bold text-base">Material & Technical Consultation</span>
              <span className="text-sm">Advising on the best 3D printing technologies and finishes</span>
            </div>
            {/* Card 3 */}
            <div className="bg-[#ede3d0] border border-gray-400 rounded-md p-4 flex flex-col items-start min-h-[100px]">
              <span className="text-3xl font-serif font-bold text-[#b89b5e]">3</span>
              <span className="font-bold text-base">Creative Collaboration:</span>
              <span className="text-sm">We partner with architects/designers to understand and co-develop their vision</span>
            </div>
            {/* Card 4 */}
            <div className="bg-[#ede3d0] border border-gray-400 rounded-md p-4 flex flex-col items-start min-h-[100px]">
              <span className="text-3xl font-serif font-bold text-[#b89b5e]">4</span>
              <span className="font-bold text-base">Creative Collaboration:</span>
              <span className="text-sm">We partner with architects/designers to understand and co-develop their vision</span>
            </div>
            {/* Card 5 */}
            <div className="bg-[#ede3d0] border border-gray-400 rounded-md p-4 flex flex-col items-start min-h-[100px]">
              <span className="text-3xl font-serif font-bold text-[#b89b5e]">5</span>
              <span className="font-bold text-base">Creative Collaboration:</span>
              <span className="text-sm">We partner with architects/designers to understand and co-develop their vision</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="w-full max-w-5xl mx-auto py-16 px-4 mt-20 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Technologies We Use</h2>
        <div className="w-16 h-1 bg-[#B1914A] rounded mb-4"></div>
        <p className="text-gray-500 text-lg text-center mb-10 max-w-2xl">We leverage cutting-edge technologies to deliver innovative, high-quality décor solutions for our clients.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow">
            <Image src="/images/technology.jpg" alt="3D Printing" className="w-16 h-16 object-contain mb-4" width={64} height={64} />
            <h3 className="font-bold text-xl mb-2">3D Printing</h3>
            <p className="text-gray-600">State-of-the-art 3D printing for bespoke, precise, and scalable creations.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow">
            <Image src="/images/v3.png" alt="CAD Design" className="w-16 h-16 object-contain mb-4" width={64} height={64} />
            <h3 className="font-bold text-xl mb-2">CAD Design</h3>
            <p className="text-gray-600">Advanced computer-aided design for accuracy and creative freedom.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow">
            <Image src="/images/v4.jpg" alt="Sustainable Materials" className="w-16 h-16 object-contain mb-4" width={64} height={64} />
            <h3 className="font-bold text-xl mb-2">Sustainable Materials</h3>
            <p className="text-gray-600">Eco-friendly, durable materials for responsible, lasting décor.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow">
            <Image src="/images/v5.jpg" alt="Advanced Finishing" className="w-16 h-16 object-contain mb-4" width={64} height={64} />
            <h3 className="font-bold text-xl mb-2">Advanced Finishing</h3>
            <p className="text-gray-600">Refined surface treatments for a premium, artistic look and feel.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow">
            <Image src="/images/v8.png" alt="Digital Fabrication" className="w-16 h-16 object-contain mb-4" width={64} height={64} />
            <h3 className="font-bold text-xl mb-2">Digital Fabrication</h3>
            <p className="text-gray-600">Seamless integration of digital tools for efficient, innovative production.</p>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
} 
