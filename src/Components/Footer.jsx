import {
//   Facebook,
//   Instagram,
//   Linkedin,
  ArrowRight,
} from "lucide-react";
import JJHLogo from '../assets/JJHLogo.png'

function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-8">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={JJHLogo}
                alt="Jeevan Jyoti"
                className="w-10 h-10"
              />

              <h3 className="text-xl font-medium text-slate-700">
                Jeevan Jyoti Institute
              </h3>
            </div>

            <p className="mt-8 text-slate-500 leading-8">
              Empowering future healthcare professionals through
              quality education, practical training and career-focused
              paramedical programs.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white transition"
              >
                {/* <Linkedin size={18} /> */}
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white transition"
              >
                {/* <Instagram size={18} /> */}
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white transition"
              >
                {/* <Facebook size={18} /> */}
              </a>
            </div>

            {/* CTA Button */}
            <button className="mt-10 bg-teal-700 text-white hover:bg-[#B58F3F] text-slate-800 px-8 py-5 rounded-full flex items-center gap-3 font-medium shadow-lg transition-all">
              Apply For Admission
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Courses */}
          <div>
            <h4 className="uppercase tracking-[3px] text-xs text-slate-400 mb-8">
              Courses
            </h4>

            <ul className="space-y-4 text-slate-600">
              <li>DMLT</li>
              <li>OT Technician</li>
              <li>X-Ray Technician</li>
              <li>GNM</li>
              <li>ANM</li>
              <li>Physiotherapy</li>
              <li>Lab Assistant</li>
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="uppercase tracking-[3px] text-xs text-slate-400 mb-8">
              Facilities
            </h4>

            <ul className="space-y-4 text-slate-600">
              <li>Modern Labs</li>
              <li>Library</li>
              <li>Smart Classes</li>
              <li>Practical Training</li>
              <li>Computer Lab</li>
              <li>Campus Activities</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="uppercase tracking-[3px] text-xs text-slate-400 mb-8">
              Explore
            </h4>

            <ul className="space-y-4 text-slate-600">
              <li>Home</li>
              <li>About</li>
              <li>Courses</li>
              <li>Gallery</li>
              <li>Admissions</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="uppercase tracking-[3px] text-xs text-slate-400 mb-8">
              Connect
            </h4>

            <ul className="space-y-5 text-slate-600">
              <li>+91 98765 43210</li>
              <li>+91 98765 43211</li>
              <li>WhatsApp Us</li>
              <li>info@jjpi.in</li>
              <li>Prayagraj, Uttar Pradesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E6DFC9] mt-16 pt-8 flex flex-col md:flex-row justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © 2026 Jeevan Jyoti Paramedical Institute. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Admissions</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;