import React from 'react';
import Hero from '../components/sections/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import { FaUsers, FaHandshake, FaQuoteLeft, FaNewspaper, FaInstagram, FaLine, FaEnvelope } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

export default function Home() {
  const councils = [
    {
      id: 1,
      img: "./UNEP WHITE.png",
      title: "United Nations Environment Programme (UNEP)",
      description:
        "The United Nations Environment Programme (UNEP) is the leading global authority on environmental issues, dedicated to combating climate change, protecting biodiversity, and promoting sustainability. Established in 1972, UNEP works to address rising sea levels and biodiversity loss by advocating for emissions reduction, ecosystem conservation, and climate resilience.",
    },
    {
      id: 2,
      img: "./UNDP WHITE.png",
      title: "United Nations Development Programme (UNDP)",
      description:
        "The United Nations Development Programme is a body within the UN agency which centers itself on international development of society through having dedications in eradicating poverty, promoting sustainable development and strengthening democratic governance.",
    },
    {
      id: 3,
      img: "./IPC WHITE.png",
      title: "Press Corps",
      description:
        "The Press Council at President University Model United Nations 2025 plays an important role in spreading awareness about sustainability and climate action. Under the grand theme 'Answer the Nature's Call: Advancing Sustainability for a Climate-Secure Future,' this council highlights the urgency of protecting the environment.",
    },
  ];

  const testimonials = [
    {
      name: "Jose",
      role: "Co-Chair UNHCR PresMUN 2024",
      quote: "PresMUN 2024, in my opinion, was amazing! It recently overcame a crisis, and the direction became much clearer afterward. Overall, the timeline, committees, and substance were really well-executed.",
    },
    {
      name: "Delegates of Israel",
      role: "UNICEF Council",
      quote: "I would rate PresMUN 2024 an 8 out of 10. The event was truly impactful, and I deeply appreciate the efforts of the organizing team.",
    },
    {
      name: "Delegates of UK",
      role: "UNICEF Council",
      quote: "Personally, I am very satisfied with my experience at PresMUN 2024. Everything was well-organized and impactful.",
    }
  ];

  const sponsors = [
    { id: 1, img: "/assets/sponsor/GLOBY_HALF_INITIALS_BLUE.png", alt: "GLOBY" },
    { id: 2, img: "/assets/sponsor/Logo_HTku_Jpg.JPG", alt: "HTKU" },
    { id: 3, img: "/assets/sponsor/Logo_oms_PNG_No_shadow.PNG", alt: "Oh My Skin" },
    { id: 4, img: "/assets/sponsor/Movics_Photography_Indonesia.jpg", alt: "Movics Photography Indonesia" },
    { id: 5, img: "/assets/sponsor/Logo.png", alt: "logo" },
  ];

  const mediaPartners = [
    { id: 1, img: "/assets/medpart/deeplomats1.png", alt: "Deeplomats" },
    { id: 2, img: "/assets/medpart/diasporapedia.jpg", alt: "Diasporapedia" },
    { id: 3, img: "/assets/medpart/DIPLOBATE .jpg", alt: "Diplobate" },
    { id: 4, img: "/assets/medpart/FKMHII.jpg", alt: "FKMHII" },
    { id: 5, img: "/assets/medpart/FPCI_Chapter_Presuniv_Color_Transparant_Logo.png", alt: "FPCI Chapter PresUniv" },
    { id: 6, img: "/assets/medpart/JAKARTA_MUN_(Asset 4@3x).png", alt: "Jakarta MUN 1" },
    { id: 7, img: "/assets/medpart/JSF.jpg", alt: "JSF" },
    { id: 8, img: "/assets/medpart/light@4x.png", alt: "Light" },
    { id: 9, img: "/assets/medpart/Logo_IDNL.png", alt: "IDNL" },
    { id: 10, img: "/assets/medpart/LOGO_ITS_MUN_BLUE.png", alt: "ITS MUN" },
    { id: 11, img: "/assets/medpart/Logo_Mun_FH.PNG", alt: "Mun FH" },
    { id: 12, img: "/assets/medpart/Logo_SyahidMUN.png", alt: "SyahidMUN" },
    { id: 13, img: "/assets/medpart/mahasiswa_penggerak.png", alt: "Mahasiswa Penggerak" },
    { id: 14, img: "/assets/medpart/PMUNC.jpg", alt: "PMUNC" },
    { id: 15, img: "/assets/medpart/PublikCikarang_transparan.png", alt: "Publik Cikarang" },
    { id: 16, img: "/assets/medpart/SIPALINGHI.png", alt: "Sipalinghi" },
  ];

  return (
    <div className="bg-[#000420] min-h-screen text-white overflow-x-hidden font-montserrat">
      {/* Improved Hero Section */}
      <div className="relative">
        <Hero />
      </div>

      {/* About Section */}
      <motion.section
        className="py-12 px-4 md:px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              className="w-full md:w-1/2 flex justify-center"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="./PRESMUN WHITE.png"
                alt="PresMUN Event"
                className="w-full max-w-xs md:max-w-md"
              />
            </motion.div>

            <div className="w-full md:w-1/2">
              <SectionTitle
                subtitle="About"
                title="What is PRESMUN 2025?"
                alignment="left"
                className="mb-6"
              />
              <p className="text-sm md:text-base text-white/80 leading-relaxed text-justify">
                President International Model United Nations (PRESMUN) 2025 is an event that brings together young people from across Indonesia and around the world to discuss and learn about diplomacy, international relations, and global issues. Through the meaningful collaboration, with various delegations, the press, and the executive board, PRESMUN 2025 serves as a platform for exchanging ideas, broadening perspectives, and building solutions for a better future.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Councils Section - Enhanced */}
      <section className="py-12 px-4 md:px-6 bg-black/10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Our"
            title="Councils"
            alignment="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {councils.map((council) => (
              <motion.div
                key={council.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-b from-[#00072d] to-[#000420] rounded-xl p-6 shadow-lg border border-[#f3c623]/10 relative overflow-hidden group"
              >
                {/* Animated border effect */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#f3c623]/30 transition-all duration-300 rounded-xl pointer-events-none"></div>

                {/* Floating elements */}
                <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-[#f3c623]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -left-4 -bottom-4 w-16 h-16 rounded-full bg-[#f3c623]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex justify-center mb-4 h-24 relative">
                  <motion.img
                    src={council.img}
                    alt={council.title}
                    className="h-full object-contain"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="font-horizon text-lg text-center mb-3 text-[#f3c623]">
                  {council.title}
                </h3>
                <p className="text-sm text-white/70 text-justify">
                  {council.description}
                </p>

                {/* Learn more button */}
                <motion.div
                  className="mt-4 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <button className="text-xs px-4 py-2 rounded-full border border-[#f3c623]/50 text-[#f3c623] hover:bg-[#f3c623]/10 transition-colors">
                    Learn More
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle=""
            title="What They Say"
            alignment="center"
            className="mb-12"
          />

          <div className="relative">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: '.testimonial-pagination',
                bulletClass: 'testimonial-bullet',
                bulletActiveClass: 'testimonial-bullet-active'
              }}
              autoplay={{ delay: 5000 }}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40
                }
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="bg-gradient-to-br from-[#00072d] to-[#000420] p-6 rounded-xl border border-[#f3c623]/20 h-full relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(243, 198, 35, 0.1)"
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#f3c623]/30 rounded-tr-xl"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#f3c623]/30 rounded-bl-xl"></div>

                    <div className="flex items-start mb-4">
                      <FaQuoteLeft className="text-[#f3c623] mr-3 mt-1" />
                      <p className="text-sm md:text-base text-white/80 italic">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="mt-4 pl-6">
                      <h4 className="font-horizon text-[#f3c623]">{testimonial.name}</h4>
                      <p className="text-xs text-white/60">{testimonial.role}</p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="testimonial-pagination flex justify-center mt-8 gap-2" />
          </div>
        </div>
      </section>

      {/* Media Partners Section */}
      <section className="py-12 px-4 md:px-6 bg-black/10">
        <div className="max-w-7xl mx-auto text-center">
          <SectionTitle
            subtitle=""
            title="Media Partners"
            alignment="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {mediaPartners.map((partner) => (
              <motion.div
                key={partner.id}
                className="flex justify-center items-center p-4 bg-gradient-to-br from-[#00072d] to-[#000420] rounded-xl border border-[#f3c623]/20 hover:bg-[#f3c623]/10 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={partner.img}
                  alt={partner.alt}
                  className="max-h-20 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsored By */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <SectionTitle
            subtitle=""
            title="Sponsored By"
            alignment="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {sponsors.map((sponsor) => (
              <motion.div
                key={sponsor.id}
                className="flex justify-center items-center p-4 bg-gradient-to-br from-[#00072d] to-[#000420] rounded-xl border border-[#f3c623]/20 hover:bg-[#f3c623]/10 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={sponsor.img}
                  alt={sponsor.alt}
                  className="max-h-20 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 md:px-6 bg-black/10">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Get in"
            title="Get in Touch"
            alignment="center"
            className="mb-12"
          />

          <div className="flex flex-wrap justify-center gap-6 max-w-md mx-auto">
            {[
              { icon: <FaInstagram />, name: "Instagram", url: "https://instagram.com/presidentmodelun" },
              { icon: <FaLine />, name: "Line", url: "https://line.me/ti/p/@ghu3650+" },
              { icon: <FaEnvelope />, name: "Email", url: "mailto:secretariatpresmun.official@gmail.com" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center w-24"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-14 h-14 rounded-full bg-[#f3c623]/10 flex items-center justify-center text-[#f3c623] text-2xl mb-2 hover:bg-[#f3c623]/20 transition-colors">
                  {item.icon}
                </div>
                <span className="text-sm text-white/70 font-montserrat">{item.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CSS for Swiper Pagination */}
      <style jsx>{`
        .testimonial-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          margin: 0 5px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .testimonial-bullet-active {
          background: #f3c623;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}