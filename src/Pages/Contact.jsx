import { useState } from "react";

export default function Contact() {
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const allowed = ["image/jpeg", "image/jpg", "image/png"];

    if (!allowed.includes(file.type)) {
      setError("Only JPG, JPEG, PNG allowed");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("Photo size must be under 2MB");
      return;
    }

    setError("");
    setPhoto(URL.createObjectURL(file));
  };


  const generateCaptcha = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());

  return (
    <>
      {/* <div className="min-h-screen bg-slate-100 font-sans"> */}
      <div className="bg-gradient-to-t from-blue-950 to-cyan-800 px-7 py-12 pt-32 relative overflow-hidden">
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


      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="mb-8">
          <h1 className="text-4xl text-blue-900 font-bold text-center">
            Admission Form
          </h1>

          <p className="text-center text-sm text-gray-500 mt-2">
            Fill in BLOCK LETTERS using blue/black pen style format
          </p>
        </div>
        <form className="max-w-11/12 mx-auto bg-white shadow-xl rounded-xl p-8">


          {/* Course */}
          <div className="flex justify-around items-center gap-5 mb-6">
            <div className="flex-col ">
              <lable className='mr-5 block font-semibold mb-2'>Courses Applied for<span className="text-red-600 ml-1">*</span></lable>
              <select
                name="Course Applied for"
                className="w-ful border rounded-md px-3 py- h-10 outline-none focus:ring-2 focus:ring-blue-700"
              >
                <option value="DMLT">DMLT</option>
                <option value="CBSE">OT Technician</option>
              </select>
            </div>
            <Input label="Year For Exam Batch" />
            <Input type="" label="Session" placeholder="2026 - 2027" />
          </div>

          {/* Personal Info */}
          <div className="borde rounded-xl p-6">

            <div className="flex justify-between items-center bg-blue-900 text-white pl-5 py-2 rounded-md mb-6">
              <h2 className="text-xl font-semibold">
                Personal Information
              </h2>


            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <lable className="uppercase font-semibold">Name<span className="text-red-600 ml-1">*</span>
                <Input className='uppercase' />
              </lable>
              <Input label="Father's / Guardian's Name" />

              <Input label="Mother's Name" />
              <Input label="Date of Birth" type="date" />

              <div>
                <label className="font-medium block mb-2">
                  Gender
                </label>

                <div className="flex gap-6">
                  <Radio text="Male" />
                  <Radio text="Female" />
                </div>
              </div>

              <Input label="Nationality" />

              <Input label="Religion" />
              <Input label="Caste" />

            </div>

            <div className="mt-6">

              <label className="font-medium block mb-2">
                Category
              </label>

              <div className="flex flex-wrap gap-6">

                <Radio type="radio" text="General" />
                <Radio type="radio" text="SC" />
                <Radio type="radio" text="OBC" />
                <Radio type="radio" text="Others" />

              </div>
            </div>

            <div className="mt-6">

              <label className="font-medium block mb-2">
                Marital Status
              </label>

              <div className="flex flex-wrap gap-6">
                <Radio type="radio" text="Single" />
                <Radio type="radio" text="Married" />
                <Radio type="radio" text="Widow" />
                <Radio type="radio" text="Divorced" />
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-6">
              <TextArea label="Present Address" />
              <Input label="PIN Code" />

              <Input label="Mobile No." />
              <Input label="Alternate Mobile No." />

              <Input label="E-Mail Address" />
              <Input label="Blood Group" />

              <Input label="Father's Mobile No." />
              <Input label="Occupation" />
            </div>

            <div className="mt-6">
              <Input label="Father's Yearly Income" />
            </div>

          </div>


          {/* ........... */}

          <div>
            <label className="cursor-pointer">
              <div className="w-32 h-40 border-2 my-5 border-dashed rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">

                {photo ? (
                  <img
                    src={photo}
                    alt="passport"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xs text-center px-2">
                    Attach Passport Photo
                    <br />
                    JPG / PNG
                    <br />
                    Under 2 MB
                  </span>
                )}
              </div>

              <input
                type="file"
                className="hiddn"
                accept=".jpg,.jpeg,.png"
                onChange={handlePhoto}
              />
            </label>

            {error && (
              <p className="text-red-500 text-xs mt-2">
                {error}
              </p>
            )}
          </div>
          {/* <div className="mt-10 bg-white rounded-xl p-6"> */}
          <div className="bg-blue-900 py-2 pl-3 my-5 rounded-md text-white">

            <h2 className="text-xl font-semibold">
              Details of Qualifying Examination
            </h2>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full border">
              <thead className="bg-gray-100">
                <tr>

                  {[
                    "Exam",
                    "Board",
                    "School / College",
                    "Year",
                    "Subject",
                    "Maximum Marks",
                    "Marks Obtained",
                    "Aggregate %",
                  ].map((item) => (
                    <th
                      key={item}
                      className="border p-3 text-sm"
                    >
                      {item}
                    </th>
                  ))}

                </tr>
              </thead>
              <tbody>

                {["10th", "12th", "Any Other"].map(
                  (exam) => (
                    <tr key={exam}>

                      <td className="border p-2">
                        {exam}
                      </td>

                      {Array(7)
                        .fill("")
                        .map((_, i) => (
                          <td
                            key={i}
                            className="border p-2"
                          >
                            <input
                              className="w-full outline-none"
                            />
                          </td>
                        ))}

                    </tr>
                  )
                )}

              </tbody>
            </table>
          </div>

          {/* </div> */}


          {/* <div className="mt-10 bg-white rounded-xl p-6"> */}



          <div className="grid md:grid-cols-2 gap-5 mt-8">

            <Input label="Place" />

            <Input
              label="Date"
              type="date"
            />

          </div>

          {/* </div> */}

          {/* <div className="mt-10 bg-white rounded-xl p-6"> */}

          <h2 className="text-xl font-semibold mb-6">
            Check List of Papers Submitted
          </h2>

          <div className="space-y-4">

            {[
              "Date of Birth Certificate (High School) Coloured Copy",
              "10+2 Examination Certificate & Marksheet Coloured Copy",
              "Certificate Extra Curricular Activities",
              "Character Certificate",
              "Passport Size Coloured Photo",
              "Declaration by Candidate",
              "Declaration by Parent / Guardian",
              "Cash / Bank Draft Details",
              "Income Certificate",
              "Aadhar Card Coloured Copy",
            ].map((doc, i) => (

              <div key={i} className="flex justify-between border-b pb-3">

                <span>{i + 1}. {doc}</span>

                <div className="flex gap-6">
                  <label>
                    <input type="radio" name={`doc${i}`} />
                    {" "}
                    Yes
                  </label>

                  <label>
                    <input
                      type="radio"
                      name={`doc${i}`}
                    />{" "}
                    No
                  </label>
                </div>
              </div>
            ))}

          </div>
          <h2 className="text-xl font-semibold text-center mb-6">
            DECLARATION
          </h2>
          <div className="flex items-center">

            <input
              type="checkbox"
              id="agree"
              className="w-4 h-4 mx-4 accent-blue-600 cursor-pointer"
            />
            <label htmlFor="agree" className="text-gray-700 leading-8">

              We further solemnly affirm and declare that the contents
              submitted at the time of admission are true and correct
              to the best of my knowledge.

            </label>
          </div>
          <div className="flex items-center justify-center mt-5 gap-3">
            <span>Please Enter the Captha</span>
            {/* Captcha */}
            <div className="px-4 py-2 bg-gray-100 border rounded-md font-bold tracking-widest select-none">
              {captcha}
            </div>

            {/* Refresh */}
            <button
              type="button"
              onClick={() => setCaptcha(generateCaptcha())}
              className="px-3 py-2 border rounded-md hover:bg-gray-100"
            >
              ↻
            </button>

            {/* Input */}
            <input
              type="text"
              placeholder="Enter Captcha"
              className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>
          <button
            className="mt-8 w-80 bg-orange-500 mx-auto text-center hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            Submit Admission Form
          </button>


          {/* </div> */}
        </form>
      </div>
    </>
  );
}

function Input({
  label,
  type = "text",
  placeholder = "",
}) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function TextArea({ label }) {
  return (
    <div className="md:col-span-2">
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <textarea
        rows="3"
        className="w-full border rounded-lg p-3"
      />
    </div>
  );
}

function Radio({ text }) {
  return (
    <label className="flex items-center gap-2">
      <input type="radio" name="gender" />
      {text}
    </label>
  );
}

function Check({ text }) {
  return (
    <label className="flex items-center gap-2">
      <input type="checkbox" />
      {text}
    </label>
  );
}









