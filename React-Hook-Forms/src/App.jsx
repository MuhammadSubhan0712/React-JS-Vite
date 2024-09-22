import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { School } from 'lucide-react';
function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const Submission = (data) => {
    setSubmitted(true); // Mark form as submitted
    console.log('Form Data:', data);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        
        <div className='p-5 flex justify-between bg-blue-700 w-full'>
        <div className=" text-xl text-white">
         Code Craft Academy
        </div>
        <div className=' text-white' >
        <School />
     
        </div>
        </div>
          

                           {/* Buttons Field */}
        <div className="text-center mb-6 mt-3 p-2 border-sky-100 rounded-lg bg-slate-50">
          <button className="btn bg-slate-50">Admission Form</button>
          <button className="btn bg-slate-50">Verify Admission</button>
        </div>


        <div className="text-center text-2xl text-black mb-6 mt-1 p-1" >
          <h2>
            Admission Form
          </h2>
        </div>


        <div className="w-full max-w-8xl bg-white shadow-md rounded-lg p-8">

          {submitted ? (
            <div className="alert alert-success">
              <h3>Form has been submitted.</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit(Submission)} className="space-y-6">
              <div className="grid grid-cols-2 gap-7">

                {/* Full Name input field*/}
                <label className="block">
                  <span className="text-gray-700">Full Name</span>
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register('fullName', { required: "Full Name is required" })}
                    className={`input input-bordered w-full mt-1 ${errors.fullName && 'border-red-500'}`}
                  />
                  {errors.fullName && <span className="text-red-500">{errors.fullName.message}</span>}
                </label>


                {/* Father's Name input field*/}
                <label className="block">
                  <span className="text-gray-700">Father Name</span>
                  <input
                    type="text"
                    placeholder="Father Name"
                    {...register('fatherName', { required: "Father Name is required" })}
                    className={`input input-bordered w-full mt-1 ${errors.fatherName && 'border-red-500'}`}
                  />
                  {errors.fatherName && <span className="text-red-500">{errors.fatherName.message}</span>}
                </label>


                {/* Email input field*/}
                <label className="block">
                  <span className="text-gray-700">Email</span>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register('email', {
                      required: "Email is required",
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Invalid email format"
                      }
                    })}
                    className={`input input-bordered w-full mt-1 ${errors.email && 'border-red-500'}`}
                  />
                  {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </label>


                {/* Phone Number input field */}
                <label className="block">
                  <span className="text-gray-700">Phone Number</span>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    {...register('phone', { required: "Phone Number is required" })}
                    className={`input input-bordered w-full mt-1 ${errors.phone && 'border-red-500'}`}
                  />
                  {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                </label>


                {/* CNIC input field*/}
                <label className="block">
                  <span className="text-gray-700">National ID (CNIC)</span>
                  <input
                    type="text"
                    placeholder="CNIC"
                    {...register('cnic', {
                      required: "CNIC is required",
                      pattern: {
                        value: /^\d{5}-\d{7}-\d{1}$/,
                        message: "Invalid CNIC format (XXXXX-XXXXXXX-X)"
                      }
                    })}
                    className={`input input-bordered w-full mt-1 ${errors.cnic && 'border-red-500'}`}
                  />
                  {errors.cnic && <span className="text-red-500">{errors.cnic.message}</span>}
                </label>


                {/* Date of Birth input field*/}
                <label className="block">
                  <span className="text-gray-700">Date of Birth</span>
                  <input
                    type="date"
                    {...register('dob', { required: "Date of Birth is required" })}
                    className={`input input-bordered w-full mt-1 ${errors.dob && 'border-red-500'}`}
                  />
                  {errors.dob && <span className="text-red-500">{errors.dob.message}</span>}
                </label>


                {/* Gender select field*/}
                <label className="block">
                  <span className="text-gray-700">Gender</span>
                  <select
                    {...register('gender', { required: "Gender is required" })}
                    className={`select select-bordered w-full mt-1 ${errors.gender && 'border-red-500'}`}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <span className="text-red-500">{errors.gender.message}</span>}
                </label>


                {/* Laptop select field */}
                <label className="block">
                  <span className="text-gray-700">Do you have a laptop?</span>
                  <select
                    {...register('laptop', { required: "Laptop status is required" })}
                    className={`select select-bordered w-full mt-1 ${errors.laptop && 'border-red-500'}`}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  {errors.laptop && <span className="text-red-500">{errors.laptop.message}</span>}
                </label>

              
                {/* Address input field*/}
                <label className="block">
                  <span className="text-gray-700">Address</span>
                  <input
                    type="text"
                    placeholder="Address"
                    {...register('address', { required: "Address is required" })}
                    className={`input input-bordered w-full mt-1 ${errors.address && 'border-red-500'}`}
                  />
                  {errors.address && <span className="text-red-500">{errors.address.message}</span>}
                </label>


                {/* Last Qualification select field*/}
                <label className="block">
                  <span className="text-gray-700">Last Qualification</span>
                  <select
                    {...register('qualification', { required: "Qualification is required" })}
                    className={`select select-bordered w-full mt-1 ${errors.qualification && 'border-red-500'}`}
                  >
                    <option value="matric">Matric</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="bachelors">Bachelors</option>
                    <option value="masters">Masters</option>
                  </select>
                  {errors.qualification && <span className="text-red-500">{errors.qualification.message}</span>}
                </label>


                  {/* Profile Image input field */}
                  <label className="block">
                  <span className="text-gray-700">Profile Image</span>
                  <input
                    type="file"
                    id="file"
                    className="input input-bordered w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Choose file"
                  />
                  <ul className="text-sm text-gray-500">
                    <li>With white or blue background</li>
                    <li>File type: jpg, jpeg, png</li>
                    <li>Upload your recent passport-size picture</li>
                    <li>Your face should be clearly visible without any glasses</li>
                  </ul>
                </label>
              </div>


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
