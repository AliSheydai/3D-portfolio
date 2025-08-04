import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      dir="rtl"
      className="font-vazir bg-black text-white py-16 px-6 mt-40"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-y-6">
          {/* نام برند */}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
            علی شیدایی
          </h2>

          {/* لینک شبکه‌ها */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-200">
              ارتباط با من
            </h3>
            <div className="flex space-x-4 space-x-reverse">
              <a
                href="#"
                className="text-gray-700 hover:text-violet-400 transition-colors"
                aria-label="گیت‌هاب"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-violet-400 transition-colors"
                aria-label="توییتر"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-violet-400 transition-colors"
                aria-label="لینکدین"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* خط پایین */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-y-4">
          <p className="text-gray-500 text-sm text-center md:text-right">
            ساخته شده توسط علی شیدایی
          </p>

          <div className="flex space-x-6 space-x-reverse">
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              سیاست حفظ حریم خصوصی
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              شرایط استفاده
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              سیاست کوکی‌ها
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
