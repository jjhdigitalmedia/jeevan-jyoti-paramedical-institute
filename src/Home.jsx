import {
  GraduationCap,
  Microscope,
  Stethoscope,
  Users,
  Award,
  BookOpen,
  Phone,
} from "lucide-react";
import GroupPhoto from './assets/GroupPhoto.JPG'
import PhotoDrVandana from './assets/PhotoDrVandana.jpeg'

function Home() {
  const courses = [
    "DMLT",
    "OT Technician",
    "X-Ray Technician",
    "GNM",
    "ANM",
    "Physiotherapy",
  ];

  const stats = [
    { number: "5000+", label: "Students Trained" },
    { number: "20+", label: "Courses Available" },
    { number: "15+", label: "Years Experience" },
    { number: "95%", label: "Placement Support" },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-teal-700 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                Admissions Open 2026
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
                Build Your Future In Healthcare & Paramedical Sciences
              </h1>

              <p className="mt-6 text-lg text-gray-100">
                Jeevan Jyoti Paramedical Institute provides quality education,
                practical training and career-focused healthcare programs for
                aspiring medical professionals.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-lg font-semibold transition">
                  Apply Now
                </button>

                <button className="border border-white hover:bg-white hover:text-teal-700 px-8 py-4 rounded-lg font-semibold transition">
                  Explore Courses
                </button>
              </div>
            </div>

            <div>
              <img
                src={GroupPhoto}
                alt="Paramedical Students"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 text-center"
              >
                <h3 className="text-4xl font-bold text-teal-700">
                  {item.number}
                </h3>
                <p className="mt-2 text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
            alt="Medical Lab"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-4xl font-bold text-slate-800">
              About Our Institute
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Jeevan Jyoti Paramedical Institute is committed to providing
              industry-oriented healthcare education. Our modern laboratories,
              experienced faculty and practical training help students build a
              successful career in the medical field.
            </p>

            <button className="mt-8 bg-teal-700 text-white px-6 py-3 rounded-lg">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-800">
              Popular Courses
            </h2>
            <p className="text-gray-600 mt-4">
              Choose from our career-oriented healthcare programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition"
              >
                <GraduationCap
                  size={45}
                  className="text-teal-700 mb-4"
                />

                <h3 className="text-xl font-semibold">{course}</h3>

                <p className="text-gray-600 mt-3">
                  Professional training with practical exposure and expert
                  guidance.
                </p>

                <button className="mt-6 text-teal-700 font-semibold">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Why Choose Us?</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-14">
            <div className="text-center">
              <Microscope className="mx-auto text-teal-700" size={50} />
              <h3 className="font-semibold mt-4">Modern Labs</h3>
            </div>

            <div className="text-center">
              <Users className="mx-auto text-teal-700" size={50} />
              <h3 className="font-semibold mt-4">Expert Faculty</h3>
            </div>

            <div className="text-center">
              <Award className="mx-auto text-teal-700" size={50} />
              <h3 className="font-semibold mt-4">Quality Education</h3>
            </div>

            <div className="text-center">
              <BookOpen className="mx-auto text-teal-700" size={50} />
              <h3 className="font-semibold mt-4">Practical Training</h3>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTOR MESSAGE */}
      <section className="bg-teal-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10 items-center">
          <div>
            <img
              src={PhotoDrVandana}
              alt="Director"
              className="rounded-2xl"
            />
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold">
              Message From The Director
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-100">
              Our mission is to empower students with the knowledge, skills,
              and confidence required to excel in healthcare professions. We
              focus on academic excellence, ethical values and practical
              learning.
            </p>

            <h4 className="mt-6 text-xl font-semibold">
              Dr. Vandana Bansal
            </h4>

            <p>Director</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-teal-700 to-cyan-600 rounded-3xl p-12 text-center text-white">
            <Stethoscope size={60} className="mx-auto mb-6" />

            <h2 className="text-4xl font-bold">
              Start Your Healthcare Career Today
            </h2>

            <p className="mt-4 text-lg">
              Admissions are open. Enroll now and take the first step toward a
              successful future.
            </p>

            <button className="mt-8 bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 mx-auto">
              <Phone size={18} />
              Contact For Admission
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}export default Home