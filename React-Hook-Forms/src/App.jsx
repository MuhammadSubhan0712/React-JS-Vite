import React, { useState } from 'react';

function App() {
  const [submitted, setSubmitted] = useState(false);

  const Submission = (event) => {
    event.preventDefault(); // Prevent page refresh
    setSubmitted(true); // Mark form as submitted
  };
        <div className="text-center mb-6 mt-3 p-1 bg-black">
            <button className="btn">Admission Form</button>
            <button className="btn">Verify Admission</button>
        </div>

        <div className="w-f
              </label>

              {/* Father's Name */}
              <label className="block">
                <span className="text-gray-700">Father Name</span>
                <input
                  type="text"
                  name="fatherName"
                  placeholder="Father Name"
                  className="input input-bordered w-full mt-1"
                />
              </label>

              {/* Email */}
              <label className="block">
                <span className="text-gray-700">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full mt-1"
                />
              </label>

              {/* Phone Number */}
              <label className="block">
                <span className="text-gray-700">Phone Number</span>
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  className="input input-bordered w-full mt-1"
                />
              </label>

              {/* CNIC */}
              <label className="block">
                <span className="text-gray-700">National ID (CNIC)</span>
                <input
                  type="text"
                  name="cnic"
                  placeholder="CNIC"
                  className="input input-bordered w-full mt-1"
                />
              </label>

              {/* Date of Birth */}
              <label className="block">
                <span className="text-gray-700">Date of Birth</span>
                <input
                  type="date"
                  name="dob"
                  className="input input-bordered w-full mt-1"
                />
              </label>

              {/* Gender */}
              <label className="block">
                <span className="text-gray-700">Gender</span>
                <select
                  name="gender"
                  className="select select-bordered w-full mt-1"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>

              {/* Laptop */}
              <label className="block">
                <span className="text-gray-700">Do you have a laptop?</span>
                <select
                  name="laptop"
                  className="select select-bordered w-full mt-1"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>

              {/* Profile Image */}
              <label className="block">
                <span className="text-gray-700">Profile Image</span>
                <input
                  type="file"
                  id="file"
                  className="input input-bordered w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Choose file"
                />
              </label>

              {/* Address */}
              <label className="block">
                <span className="text-gray-700">Address</span>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="input input-bordered w-full mt-1"
                />
              </label>

              {/* Last Qualification */}
              <label className="block">
                <span className="text-gray-700">Last Qualification</span>
                <select
                  name="qualification"
                  className="select select-bordered w-full mt-1"
                >
                  <option value="matric">Matric</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="bachelors">Bachelors</option>
                  <option value="masters">Masters</option>
                </select>
              </label>

      <label className="block" htmlFor="">

      <span className="text-gray-700">Profile Image</span>
     <input
            type="file"
            id="file"
            className="input input-bordered w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Choose file" />
     <ul>
      <li>With white or blue background</li>
      <li>File type: jpg, jpeg, png</li>
      <li>Upload your recent passport size picture</li>
      <li>Your face should be clearly visible without any glasses</li>
     </ul>
     </label>
              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-full mt-4">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
