import React, { useState } from 'react';
import avatar from './assets/avatar.png'; 
import { Camera } from 'lucide-react';
import externalJson from '../user.json';
import { useEffect } from 'react';

function UserProfile() {
  const [JsonData, setJsonData] = useState(externalJson);
  useEffect(() => {
    setJsonData((prevData) => ({
      ...prevData,
      photo: avatar,
    }));
  }, []);

  const [isEditing, setIsEditing] = useState(false); 

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newPhotoUrl = URL.createObjectURL(file); 
      setJsonData({ ...JsonData, photo: newPhotoUrl });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJsonData((prevJsonData) => ({
      ...prevJsonData,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 mx-auto p-4 sm:p-8">
      <div className="w-full max-w-2xl sm:max-w-4xl p-4 sm:p-8 bg-gray-800 rounded-lg shadow-2xl">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-4 sm:mb-8">
          <div className="relative">
            <img
              src={JsonData.photo}
              alt="JsonData Profile"
              className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-4 border-gray-600 object-cover transition duration-300 ease-in-out transform hover:scale-105"
            />
            <label className="absolute bottom-0 right-0 p-2 bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 transition duration-300">
              <Camera className="text-2xl text-white" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
                disabled={!isEditing}
              />
            </label>
          </div>
          <div>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={JsonData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="input input-ghost w-full max-w-xs"
              />
            ) : (
              <p className="text-lg font-semibold">{JsonData.name}</p>
            )}
            {isEditing ? (
              <input
                type="text"
                name="role"
                value={JsonData.role}
                onChange={handleChange}
                placeholder="Role"
                className="input input-ghost w-full max-w-xs mt-2"
              />
            ) : (
              <p className="text-lg font-semibold">{JsonData.role}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="font-semibold">Email</span>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={JsonData.email}
                onChange={handleChange}
                placeholder="Email"
                className="input input-ghost w-full max-w-xs"
              />
            ) : (
              <p className="text-lg">{JsonData.email}</p>
            )}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Phone</span>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={JsonData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="input input-ghost w-full max-w-xs"
              />
            ) : (
              <p className="text-lg">{JsonData.phone}</p>
            )}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Address</span>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={JsonData.address}
                onChange={handleChange}
                placeholder="Address"
                className="input input-ghost w-full max-w-xs"
              />
            ) : (
              <p className="text-lg">{JsonData.address}</p>
            )}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Website</span>
            {isEditing ? (
              <input
                type="url"
                name="website"
                value={JsonData.website}
                onChange={handleChange}
                placeholder="Website"
                className="input input-ghost w-full max-w-xs"
              />
            ) : (
              <p className="text-lg">{JsonData.website}</p>
            )}
          </div>
          <div className="flex flex-col sm:col-span-2">
            <span className="font-semibold">Bio</span>
            {isEditing ? (
              <textarea
                rows="4"
                name="bio"
                value={JsonData.bio}
                onChange={handleChange}
                placeholder="Bio"
                className="textarea textarea-ghost w-full"
              />
            ) : (
              <p className="text-lg">{JsonData.bio}</p>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
