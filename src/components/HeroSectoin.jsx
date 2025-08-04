import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section
      dir="rtl"
      className="font-vazir h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse++ items-center justify-between lg:px-24 px-10 relative overflow-hidden"
    >
      {/* Right Section — Persian text */}
      <div className="z-40 xl:mb-0 mb-[20%] text-right">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 text-white leading-tight"
        >
          ساخت سریع <br /> و نتایج قابل اعتماد
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-xl lg:text-2xl text-purple-200 max-w-2xl"
        >
          من وب‌سایت‌ها و اپلیکیشن‌های وب آماده تولید را با سرعت و دقت ارائه می‌دهم. هر پروژه با کدی تمیز، ارتباطی شفاف و تعهدی قوی به تحویل به‌موقع پشتیبانی می‌شود.
        </motion.p>
      </div>

      {/* Left Section — Spline model */}
      <Spline
        className="absolute xl:left-[-28%] left-0 top-[-20%] lg:top-0"
        scene="https://prod.spline.design/ZH0N0X5EF3nNQdC1/scene.splinecode"
      />
    </section>
  );
};

export default HeroSection;
