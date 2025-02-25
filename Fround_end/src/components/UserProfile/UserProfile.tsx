import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="profile-page">
      {/* Sidebar */}
      <div className='profile-navbar'></div>

      {/* Main Profile Section */}
      <div className='profile-container'>
        
        {/* Profile Picture Upload */}
        <div className='image_container'>
          <input type="file" accept="image/*" id="fileInput" />
          <label htmlFor="fileInput" className='image-upload-button'>
            <img src="./pic/images (4).png" alt="Profile" />
          </label>
        </div>

        {/* Profile Information */}
        <div className='profile_information'>
          <ul>
            <li><span>Name:</span> Aswanth C</li>
            <li><span>Email:</span> aswant@gmail.com</li>
            <li><span>Mobile:</span> 1234567892</li>
            <li><span>Gender:</span> Male</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
