import React from "react";

const Profile = () => {
  return (
    <>
      <div className="py-10  flex flex-col items-center ">
        <div className="pt-3 flex flex-col  md:w-[60%] lg:w-[40%] ">
          <div className="flex justify-between pb-5  ">
            <div className="text-black text-5xl font-semibold flex items-center">
              Edit Profile
            </div>

            <img
              className="w-28 h-28 rounded-full"
              src="https://via.placeholder.com/120x120"
            />
          </div>
          {/* Name Fields */}
          <div className="flex md:flex-row gap-5 md:gap-8">
            <div className="w-[100%]">
              <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold">
                First Name
              </div>
              <input
                type="text"
                name="first_name"
                className="bg-white w-full rounded border border-zinc-500 h-12 px-3"
                placeholder="Mehrab"
              />
            </div>
            <div className="w-[100%]">
              <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold">
                Last Name
              </div>
              <input
                type="text"
                name="last_name"
                className="bg-white w-full rounded border border-zinc-500 h-12 px-3"
                placeholder="Bozorgi"
              />
            </div>
          </div>

          {/* Email */}
          <div className="pt-5">
            <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold">
              Email
            </div>
            <input
              type="email"
              name="email"
              className="bg-white w-full rounded border border-zinc-500 h-12 px-3"
              placeholder="Mehrabbozorgi.business@gmail.com"
            />
          </div>

          {/* address */}
          <div className="pt-5">
            <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold">
              Address
            </div>
            <input
              type="text"
              name="address"
              className="bg-white w-full rounded border border-zinc-500 h-12 px-3"
              placeholder="33062 Zboncak isle"
            />
          </div>

          {/* contact number */}
          <div className="pt-5">
            <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold">
              Contact Number
            </div>
            <input
              type="number"
              name="contact"
              className="bg-white w-full rounded border border-zinc-500 h-12 px-3"
              placeholder="58077.79"
            />
          </div>

          {/* city and state */}
          <div className="flex flex-col md:flex-row md:gap-8 pt-5">
            <div className="w-full">
              <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold">
                City
              </div>
              <input
                type="text"
                name="gender"
                className="bg-white w-full rounded border border-zinc-500 h-12 px-3"
                placeholder="Enter your city"
              />
            </div>

            <div className="w-full">
              <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold">
                State
              </div>
              <input
                type="text"
                name="state"
                className="bg-white w-full rounded border border-zinc-500 h-12 px-3"
                placeholder="Enter your state"
              />
            </div>
          </div>

          {/* Password */}
          <div className="pt-5">
            <div className="text-zinc-900 text-lg md:text-xl lg:text-2xl font-semibold">
              Password
            </div>
            <input
              type="password"
              name="password"
              className="bg-white w-full rounded border border-zinc-500 h-12 px-3"
              placeholder="Enter your password"
            />
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row md:justify-center md:items-center gap-4">
            <button
              type="button"
              className="bg-white rounded-sm border border-emerald-400 w-full md:w-32 lg:w-40 hover:cursor-pointer"
              onClick={() => handleCancel()}
            >
              <div className="text-emerald-400 text-lg md:text-xl lg:text-2xl font-normal p-2">
                Cancel
              </div>
            </button>
            <button
              type="button"
              className="bg-emerald-400 rounded-sm w-full md:w-32 lg:w-40 hover:cursor-pointer"
              onClick={() => handleSave()}
            >
              <div className="text-white text-lg md:text-xl lg:text-2xl font-semibold p-2">
                Save
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
