// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import NavigationBar from '../NavigationBar/NavigationBar';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  // User Profile States
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "https://via.placeholder.com/80",
  });

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  // Dark Mode Toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Notifications Toggle
  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  // Handle Profile Edit
  const handleEditProfile = () => {
    setIsEditingProfile(true);
  };

  // Handle Profile Save
  const handleSaveProfile = () => {
    setProfile(updatedProfile);
    setIsEditingProfile(false);
  };

  // Handle Input Changes for Profile Editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({ ...updatedProfile, [name]: value });
  };

  // Handle Profile Picture Change
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUpdatedProfile({ ...updatedProfile, profilePicture: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Language Change
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <>
      <div className='w-full flex'>
        <NavigationBar />
        <div className={`grow overflow-y-auto flex sm:flex-row h-screen ${darkMode ? "bg-gray-800 text-white" : "bg-[#F6F4F2] text-[#8D5A5A]"}`}>
          <main className="flex-1 p-2">
        {/* Header */}
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-bold">Settings</h1>
          <div className="flex items-center">
            <PersonIcon className={`${darkMode ? "text-white" : "text-[#8D5A5A]"} mr-2`} />
            <span>Admin</span>
          </div>
        </header>

        {/* Profile Section */}
        <section className="mb-4 bg-white dark:bg-gray-700 p-4 rounded-3xl shadow-md border border-[#E8D5CF] dark:border-gray-600">
          {isEditingProfile ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src={updatedProfile.profilePicture}
                  alt="User Avatar"
                  className="w-20 h-20 rounded-full border-4 border-[#8D5A5A] dark:border-gray-500"
                />
                <label
                  htmlFor="profile-picture"
                  className="px-4 py-2 bg-[#8D5A5A] text-white rounded-md cursor-pointer hover:bg-[#733F3F] dark:bg-gray-800 dark:hover:bg-gray-900"
                >
                  Change Picture
                  <input
                    type="file"
                    id="profile-picture"
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfilePictureChange}
                  />
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={updatedProfile.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-[#E8D5CF] dark:border-gray-500 bg-[#FFF9F6] dark:bg-gray-600 text-[#8D5A5A] dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={updatedProfile.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-[#E8D5CF] dark:border-gray-500 bg-[#FFF9F6] dark:bg-gray-600 text-[#8D5A5A] dark:text-white"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleSaveProfile}
                  className="px-4 py-2 bg-[#8D5A5A] text-white rounded-md hover:bg-[#733F3F] dark:bg-gray-800 dark:hover:bg-gray-900"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditingProfile(false)}
                  className="px-4 py-2 bg-gray-300 text-[#8D5A5A] rounded-md hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <img
                src={profile.profilePicture}
                alt="User Avatar"
                className="w-20 h-20 rounded-full border-4 border-[#8D5A5A] dark:border-gray-500"
              />
              <div>
                <h2 className="text-lg font-bold">{profile.name}</h2>
                <p className="text-sm text-[#C5AFAF] dark:text-gray-400">Admin</p>
                <p className="text-sm text-[#8D5A5A] dark:text-white">{profile.email}</p>
              </div>
              <button
                onClick={handleEditProfile}
                className="ml-auto px-4 py-2 bg-[#8D5A5A] text-white rounded-md hover:bg-[#733F3F] dark:bg-gray-800 dark:hover:bg-gray-900"
              >
                Edit Profile
              </button>
            </div>
          )}
        </section>

        {/* Preferences */}
        <section className="mt-4 bg-white dark:bg-gray-700 p-4 rounded-3xl shadow-md border border-[#E8D5CF] dark:border-gray-600">
          <h2 className="font-bold mb-4">Preferences</h2>
          <div className="space-y-4">
            {/* Dark Mode */}
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <button
                onClick={toggleDarkMode}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition ${darkMode ? "bg-[#8D5A5A]" : "bg-gray-300"}`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transform transition ${darkMode ? "translate-x-6" : ""}`}
                ></div>
              </button>
            </div>

            {/* Notifications */}
            <div className="flex items-center justify-between">
              <span>Enable Notifications</span>
              <button
                onClick={toggleNotifications}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition ${notificationsEnabled ? "bg-[#8D5A5A]" : "bg-gray-300"}`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transform transition ${notificationsEnabled ? "translate-x-6" : ""}`}
                ></div>
              </button>
            </div>

            {/* Language Selection */}
            <div>
              <label className="block text-sm font-medium mb-1">Language</label>
              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="w-full px-4 py-2 rounded-md border border-[#E8D5CF] dark:border-gray-500 bg-[#FFF9F6] dark:bg-gray-600 text-[#8D5A5A] dark:text-white"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </select>
            </div>
          </div>
        </section>

        {/* Password Update */}
        <section className="mt-4 bg-white dark:bg-gray-700 p-4 rounded-3xl shadow-md border border-[#E8D5CF] dark:border-gray-600">
          <h2 className="font-bold mb-4">Change Password</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Current Password</label>
              <input
                type="password"
                placeholder="Enter current password"
                className="w-full px-4 py-2 rounded-md border border-[#E8D5CF] dark:border-gray-500 bg-[#FFF9F6] dark:bg-gray-600 text-[#8D5A5A] dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full px-4 py-2 rounded-md border border-[#E8D5CF] dark:border-gray-500 bg-[#FFF9F6] dark:bg-gray-600 text-[#8D5A5A] dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-[#8D5A5A] text-white rounded-md hover:bg-[#733F3F] dark:bg-gray-800 dark:hover:bg-gray-900"
            >
              Update Password
            </button>
          </form>
        </section>
      </main>
    </div>
    </div>
    </>

  );
};

export default Settings;
