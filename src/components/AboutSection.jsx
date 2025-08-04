import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title Animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: -300,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Intro Animation
    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(5px)" },
      {
        y: -400,
        opacity: 1,
        filter: "blur(0)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stars Animation
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;

      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * -50 - index * 10}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(starsRef.current);
    };
  }, []);

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      dir="rtl"
      className="font-vazir h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]"
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            ref={addToStars}
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${10 + i * 3}px`,
              height: `${10 + i * 3}px`,
              backgroundColor: "white",
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white"
        >
          درباره من
        </h1>
      </div>

      {/* Intro and Image */}
      <div
        ref={introRef}
        className="absolute lg:bottom-[-20rem] md:bottom-[-10rem] bottom-[8rem] right-0 w-full flex md:flex-row flex-col-reverse justify-between lg:px-24 px-5 items-center opacity-0"
      >
        <h3 className="text-sm md:text-2xl text-purple-200 font-bold z-50 lg:max-w-[45rem] max-w-[27rem] tracking-wide md:mt-20 sm:mt-[-40rem] mt-[-32rem] leading-loose text-right">
          سلام، من علی هستم؛ یک توسعه‌دهنده فرانت‌اند با تمرکز بر سرعت، ظرافت و عملکرد.
          من رابط‌های کاربری واکنش‌گرا و کاربرپسند را با استفاده از ابزارهای مدرن مانند React، Tailwind CSS و JavaScript طراحی می‌کنم. 
          چه یک صفحه لندینگ ساده باشد، چه یک اپلیکیشن وب کامل یا چیزی بین این دو، 
          همیشه به کد تمیز، تحویل سریع و تجربه کاربری روان پایبند هستم.
        </h3>

        <img
          src="https://i.postimg.cc/CLLPtSpY/person.png"
          alt="تصویر پروفایل"
          className="lg:h-[40rem] md:h-[25rem] h-[23rem] mix-blend-lighten"
        />
      </div>
    </section>
  );
};

export default AboutSection;
