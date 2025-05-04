import Image from "next/image";

const Footer = () => {
  const socialLinks = ["Instagram", "Facebook", "Linkedin"];
  const menuItems = ["Home", "Progetti", "Servizi", "Candidati", "Contatti"];

  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex items-start">
            <div className="w-32 h-12 relative">
              <Image
                src="/Livello_color.svg"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[#545454] text-xl font-semibold mb-4">
              Indirizzo uffici
            </h3>
            <p className="text-xl">EWAKE s.r.l.</p>
            <p className="text-xl">Viale del lavoro, 33</p>
            <p className="text-xl">37135 - Verona</p>
            <div className="pt-4">
              <p className="text-xl">T 045 82 13 434E.</p>
              <p className="text-xl">M info@ewake.agency</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[#545454] text-xl font-semibold mb-4">
              Seguici
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((platform) => (
                <li key={platform} className="text-xl">
                  <span>{platform}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-[#545454] text-xl font-semibold mb-4">Menù</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item} className="text-xl">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-xs text-gray-400">
          <p className="leading-relaxed text-center">
            © eWAKE - PEC: ewake@bpec.it - P.iva 03932720232 - SDI: WP7SE2Q -{" "}
            <span className="hover:text-white transition-colors cursor-default">
              Privacy policy
            </span>{" "}
            -{" "}
            <span className="hover:text-white transition-colors cursor-default">
              Cookies Policy
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
