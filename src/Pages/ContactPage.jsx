import { useState } from "react";

const departments = [
  { icon: "🧪", name: "Lab Technology", ext: "Ext. 101" },
  { icon: "🏃", name: "Physiotherapy", ext: "Ext. 102" },
  { icon: "📡", name: "Radiology", ext: "Ext. 103" },
  { icon: "🎓", name: "Admissions", ext: "Ext. 100" },
];

const officeHours = [
  { day: "Monday – Saturday", time: "9:00 AM – 5:00 PM", open: true },
  { day: "Sunday", time: "Closed", open: false },
  { day: "Admission Helpline", time: "8:00 AM – 7:00 PM", open: true },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans">

      {/* Navbar */}
      <nav className="bg-[#0A1628] px-7 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#D4A017] flex items-center justify-center text-[#0A1628] text-lg font-bold">
            ❤️
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-tight">Jeevan Jyoti</p>
            <p className="text-[#D4A017]/60 text-xs">Paramedical Institute</p>
          </div>
        </div>
        <div className="flex gap-6">
          {["Home", "Courses", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm ${
                item === "Contact" ? "text-[#D4A017]" : "text-slate-400 hover:text-[#D4A017]"
              } transition-colors`}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-[#0A1628] px-7 py-12 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-[#1A7A8A]/10 -translate-y-1/3 translate-x-1/4" />
        <div className="absolute right-16 bottom-0 w-40 h-40 rounded-full bg-[#D4A017]/10 translate-y-1/2" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#D4A017]/10 border border-[#D4A017]/30 rounded-full px-4 py-1 mb-4">
            <span className="text-[#D4A017] text-xs font-medium">⭐ Prayagraj, Uttar Pradesh</span>
          </div>
          <h1 className="text-3xl font-bold text-white leading-snug mb-3">
            We Are Here to <span className="text-[#D4A017]">Help You</span>
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
            Reach out to us for admissions, course information, or career guidance.
            Our team is ready to assist you every step of the way.
          </p>
          <div className="flex items-center gap-2 mt-5">
            <span className="w-2 h-2 bg-[#1A7A8A] rounded-full animate-pulse" />
            <span className="text-[#1A7A8A] text-xs font-medium">Admissions open for 2025–26</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-5 p-6">

        {/* Left Column */}
        <div className="flex flex-col gap-4">

          {/* Contact Info */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="bg-[#0A1628] px-5 py-4 flex items-center gap-3">
              <span className="text-[#D4A017] text-lg">📍</span>
              <span className="text-white text-xs font-semibold uppercase tracking-wider">Contact Details</span>
            </div>
            {[
              { icon: "🏢", label: "Address", value: "Civil Lines, Prayagraj\nUttar Pradesh – 211001" },
              { icon: "📞", label: "Phone", value: "+91 9876 543 210\n+91 9876 543 211" },
              { icon: "✉️", label: "Email", value: "info@jeevanparamedical.in" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 px-5 py-4 border-b border-slate-100 last:border-0">
                <div className="w-10 h-10 rounded-xl bg-[#E8F4F6] flex items-center justify-center text-lg shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-sm text-slate-800 font-medium leading-relaxed whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
            <div className="mx-5 mb-4 bg-[#E8F4F6] rounded-xl border border-[#1A7A8A]/20 h-24 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#d0e9ec] transition-colors">
              <span className="text-[#1A7A8A] text-lg">🗺️</span>
              <span className="text-[#1A7A8A] text-sm font-medium">View on Google Maps →</span>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="bg-[#0A1628] px-5 py-4 flex items-center gap-3">
              <span className="text-[#D4A017] text-lg">🕐</span>
              <span className="text-white text-xs font-semibold uppercase tracking-wider">Office Hours</span>
            </div>
            {officeHours.map((row, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-3 border-b border-slate-100 last:border-0">
                <span className="text-sm text-slate-500">{row.day}</span>
                {row.open ? (
                  <span className="bg-[#E8F4F6] text-[#1A7A8A] text-xs font-medium px-3 py-1 rounded-full">{row.time}</span>
                ) : (
                  <span className="text-red-400 text-xs font-medium">{row.time}</span>
                )}
              </div>
            ))}
          </div>

          {/* Departments */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="bg-[#0A1628] px-5 py-4 flex items-center gap-3">
              <span className="text-[#D4A017] text-lg">🩺</span>
              <span className="text-white text-xs font-semibold uppercase tracking-wider">Departments</span>
            </div>
            <div className="grid grid-cols-2 gap-3 p-4">
              {departments.map((dept, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-3 hover:bg-[#E8F4F6] hover:border-[#1A7A8A]/30 transition-all cursor-pointer">
                  <span className="text-xl block mb-2">{dept.icon}</span>
                  <p className="text-sm text-slate-800 font-medium">{dept.name}</p>
                  <p className="text-xs text-slate-400">{dept.ext}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column — Form */}
        <div>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="bg-[#0A1628] px-6 py-5">
              <h2 className="text-white text-lg font-semibold mb-1">Send Us a Message</h2>
              <p className="text-slate-400 text-sm">Get in touch — we will respond within 24 hours</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  { name: "firstName", label: "First Name", placeholder: "Rahul" },
                  { name: "lastName", label: "Last Name", placeholder: "Sharma" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-xs font-medium text-slate-500 uppercase tracking-wide mb-1.5">{f.label}</label>
                    <input
                      name={f.name}
                      value={form[f.name]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#1A7A8A] focus:bg-white focus:ring-2 focus:ring-[#1A7A8A]/10 transition"
                    />
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium text-slate-500 uppercase tracking-wide mb-1.5">Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="rahul@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#1A7A8A] focus:bg-white focus:ring-2 focus:ring-[#1A7A8A]/10 transition"
                />
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium text-slate-500 uppercase tracking-wide mb-1.5">Mobile Number</label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#1A7A8A] focus:bg-white focus:ring-2 focus:ring-[#1A7A8A]/10 transition"
                />
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium text-slate-500 uppercase tracking-wide mb-1.5">Subject</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#1A7A8A] focus:bg-white focus:ring-2 focus:ring-[#1A7A8A]/10 transition appearance-none"
                >
                  <option value="">Select a topic...</option>
                  <option>Admission Enquiry</option>
                  <option>Course Details</option>
                  <option>Fee Structure</option>
                  <option>Scholarship</option>
                  <option>Placements</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-medium text-slate-500 uppercase tracking-wide mb-1.5">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write your question or message here..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#1A7A8A] focus:bg-white focus:ring-2 focus:ring-[#1A7A8A]/10 transition resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#0A1628] hover:bg-[#1A7A8A] text-white font-semibold text-sm rounded-xl py-3.5 transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <span>✉️</span> Send Message
              </button>

              {submitted && (
                <div className="mt-4 bg-[#E8F4F6] border border-[#1A7A8A]/30 rounded-xl p-4 text-center">
                  <p className="text-2xl mb-1">✅</p>
                  <p className="text-[#1A7A8A] text-sm font-medium">
                    Message received! We will get back to you within 24 hours.
                  </p>
                </div>
              )}

              <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-xs text-slate-400">Or connect with us directly</span>
                <div className="flex-1 h-px bg-slate-200" />
              </div>

              <div className="flex gap-3 justify-center">
                {[
                  { label: "Facebook", icon: "📘" },
                  { label: "Instagram", icon: "📸" },
                  { label: "YouTube", icon: "▶️" },
                  { label: "WhatsApp", icon: "💬" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    title={s.label}
                    className="w-10 h-10 bg-slate-100 hover:bg-[#E8F4F6] rounded-lg flex items-center justify-center text-lg transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#0A1628] text-center py-4 px-7 mt-4">
        <p className="text-slate-500 text-xs">
          © 2025 <span className="text-[#D4A017]">Jeevan Jyoti Paramedical Institute</span> · Prayagraj, Uttar Pradesh · All rights reserved
        </p>
      </div>
    </div>
  );
}
