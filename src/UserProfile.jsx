

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
    <div className="h-screen flex items-center justify-center bg-gray-900 mx-auto">
      <div className="max-w-4xl p-8 bg-gray-800 rounded-lg shadow-2xl">
        <div className="flex items-center gap-6 mb-8">
          <div className="relative">
            <img
              src={JsonData.photo}
              alt="JsonData Profile"
              className="w-32 h-32 rounded-full border-4 border-gray-600 object-cover transition duration-300 ease-in-out transform hover:scale-105"
            />
            <label className="absolute bottom-0 right-0 p-2 bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 transition duration-300">
              <Camera className="text-2xl text-white" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
                disabled={!isEditing} // Only allow photo upload when in edit mode
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

        <table className="w-full">
          <tbody>
            <tr>
              <td className="px-6 py-4 font-semibold">Email</td>
              <td className="px-6 py-4">
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
              </td>
              <td className="px-6 py-4 font-semibold">Phone</td>
              <td className="px-6 py-4">
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
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-semibold">Address</td>
              <td className="px-6 py-4">
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
              </td>
              <td className="px-6 py-4 font-semibold">Website</td>
              <td className="px-6 py-4">
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
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-semibold">Bio</td>
              <td className="px-6 py-4" colSpan="3">
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
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

