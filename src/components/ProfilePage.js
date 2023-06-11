import React from 'react';
import './ProfilePage.css'; // Import the CSS file for styling

function ProfilePage({ firstName, lastName, email }) {
  return (
    <div className="container">
      <div className="title-container">
        <h2 className="title">Profile Details</h2>
      </div>
      <div className="form-container">
        <div >
          <label htmlFor="firstName" className="form-label">First Name:</label><span>            </span>
          <label>{firstName}</label>
        </div>

        <div>
          <label htmlFor="lastName" className="form-label">Last Name:</label><span>            </span>
          <label>{lastName}</label>
        </div>

        <div>
          <label htmlFor="email" className="form-label">Email:</label><span>            </span>
          <label>{email}</label>
        </div>
      </div>
    </div>
  );
}

// Generate dummy text using Lorem Ipsum

const dummyFirstName = "volutpat";
const dummyLastName = "blandit";
const dummyEmail = "volutpatblandit@example.com";

function ProfilePageDummy() {
  return <ProfilePage firstName={dummyFirstName} lastName={dummyLastName} email={dummyEmail} />;
}

export default ProfilePageDummy;
