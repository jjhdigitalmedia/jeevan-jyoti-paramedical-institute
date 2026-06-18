import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'

const About = () => {
  return (<>
    <div className=''>
      <Breadcrumb/>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
            alt="Medical Lab"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-4xl font-bold text-blue-900">
              About Our Institute
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Jeevan Jyoti Paramedical Institute is committed to providing
              industry-oriented healthcare education. Our modern laboratories,
              experienced faculty and practical training help students build a
              successful career in the medical field.
            </p>

            <button className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-lg">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  </>
  )
}

export default About