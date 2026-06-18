import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import {
  GraduationCap,
  Microscope,
  Stethoscope,
  Users,
  Award,
  BookOpen,
  Phone,
} from "lucide-react";
const courses = [
    "DMLT",
    "OT Technician",
    // "X-Ray Technician",
    // "GNM",
    // "ANM",
    // "Physiotherapy",
  ];

  const stats = [
    { number: "5000+", label: "Students Trained" },
    { number: "20+", label: "Courses Available" },
    { number: "15+", label: "Years Experience" },
    { number: "95%", label: "Placement Support" },
  ];

const Courses = () => {
  return (
    <>
    <Breadcrumb/>
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

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition"
              >
                <GraduationCap
                  size={45}
                  className="text-blue-900 mb-4"
                />

                <h3 className="text-xl font-semibold">{course}</h3>

                <p className="text-gray-600 mt-3">
                  Professional training with practical exposure and expert
                  guidance.
                </p>

                <button className="mt-6 text-blue-900 font-semibold">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default Courses