import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import PhotoDrVandana from '../assets/PhotoDrVandana.jpeg'

const DirectorsMessage = () => {
  return (
    <>
      <Breadcrumb />
      <section className="xt-white py-24">
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

            <p className="mt-6 text-lg leading-8 text-gra-100">
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
    </>
  )
}

export default DirectorsMessage