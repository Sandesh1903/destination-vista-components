// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Settings = () => {
//   const [settings, setSettings] = useState({
//     websiteName: "Travel Booking System",
//     contactEmail: "admin@example.com",
//     defaultCurrency: "USD ($)",
//     timezone: "UTC",
//   });

//   const handleSaveChanges = () => {
//     alert("Settings have been saved!");
//   };

//   return (
//     <div className="container mt-5">
//       <h4>Settings</h4>
//       <div className="card shadow-sm mt-3">
//         <div className="card-body">
//           <h5 className="mb-4">General Settings</h5>

          
//           <div className="mb-3">
//             <label className="form-label">Website Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={settings.websiteName}
//               onChange={(e) =>
//                 setSettings({ ...settings, websiteName: e.target.value })
//               }
//             />
//           </div>

          
//           <div className="mb-3">
//             <label className="form-label">Contact Email</label>
//             <input
//               type="email"
//               className="form-control"
//               value={settings.contactEmail}
//               onChange={(e) =>
//                 setSettings({ ...settings, contactEmail: e.target.value })
//               }
//             />
//           </div>

          
//           <div className="mb-3">
//             <label className="form-label">Default Currency</label>
//             <select
//               className="form-select"
//               value={settings.defaultCurrency}
//               onChange={(e) =>
//                 setSettings({ ...settings, defaultCurrency: e.target.value })
//               }
//             >
//               <option value="USD ($)">USD ($)</option>
//               <option value="EUR (€)">EUR (€)</option>
//               <option value="GBP (£)">GBP (£)</option>
//             </select>
//           </div>

          
//           <div className="mb-3">
//             <label className="form-label">Timezone</label>
//             <select
//               className="form-select"
//               value={settings.timezone}
//               onChange={(e) =>
//                 setSettings({ ...settings, timezone: e.target.value })
//               }
//             >
//               <option value="UTC">UTC</option>
//               <option value="GMT">GMT</option>
//               <option value="PST">PST</option>
//               <option value="EST">EST</option>
//             </select>
//           </div>

          
//           <div className="text-end">
//             <button
//               className="btn btn-primary"
//               onClick={handleSaveChanges}
//             >
//               Save Changes
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Settings = () => {
  const [settings, setSettings] = useState({
    name: "John",
    surname: "Doe",
    address: "123 Main Street",
    state: "California",
    postalCode: "90001",
    dob: "1990-01-01",
    mobileNo: "1234567890",
    email: "john.doe@example.com",
    timezone: "UTC",
  });

  const handleSaveChanges = () => {
    alert("Settings have been saved!");
  };

  const handleResetPassword = () => {
    alert("Password reset link has been sent to your email.");
  };

  const handleLogout = () => {
    alert("You have been logged out.");
    // logout code here
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      alert("Your account has been deleted.");
      // acc delete code here
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="fw-bold mb-4 text-primary">User Settings</h3>
      <div className="card shadow-lg">
        <div className="card-body">
          <h5 className="mb-4 text-secondary">Personal Information</h5>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={settings.name}
                onChange={(e) =>
                  setSettings({ ...settings, name: e.target.value })
                }
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Surname</label>
              <input
                type="text"
                className="form-control"
                value={settings.surname}
                onChange={(e) =>
                  setSettings({ ...settings, surname: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              value={settings.address}
              onChange={(e) =>
                setSettings({ ...settings, address: e.target.value })
              }
            />
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">State</label>
              <input
                type="text"
                className="form-control"
                value={settings.state}
                onChange={(e) =>
                  setSettings({ ...settings, state: e.target.value })
                }
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Postal Code</label>
              <input
                type="text"
                className="form-control"
                value={settings.postalCode}
                onChange={(e) =>
                  setSettings({ ...settings, postalCode: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              value={settings.dob}
              onChange={(e) =>
                setSettings({ ...settings, dob: e.target.value })
              }
            />
          </div>

          <h5 className="mb-4 text-secondary">Contact Information</h5>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Mobile No</label>
              <input
                type="text"
                className="form-control"
                value={settings.mobileNo}
                readOnly
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={settings.email}
                readOnly
              />
            </div>
          </div>

          <h5 className="mb-4 text-secondary">Other Settings</h5>

          <div className="mb-3">
            <label className="form-label">Timezone</label>
            <select
              className="form-select"
              value={settings.timezone}
              onChange={(e) =>
                setSettings({ ...settings, timezone: e.target.value })
              }
            >
              <option value="UTC">UTC</option>
              <option value="GMT">GMT</option>
              <option value="PST">PST</option>
              <option value="EST">EST</option>
            </select>
          </div>

          <div className="text-end mt-4">
            <button className="btn btn-primary px-4" onClick={handleSaveChanges}>
              Save Changes
            </button>
          </div>

          <hr className="my-4" />

          <div className="d-flex  gap-3">
            <button
              className="btn btn-warning"
              onClick={handleResetPassword}
            >
              Reset Password
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleLogout}
            >
              Logout
            </button>
            <button
              className="btn btn-danger"
              onClick={handleDeleteAccount}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
