// import React from "react";

// const Searchbar = () => {
//   return (
//     <div className="mb-3">
//       <div className="d-flex justify-content-between align-items-center">
//         <input
//           type="text"
//           className="form-control me-3"
//           placeholder="Search..."
//           style={{ maxWidth: "300px" }} 
//         />
//         <div>
//           <i
//             className="bi bi-bell me-3"
//             style={{ fontSize: "1.5rem", cursor: "pointer" }}
//           ></i>
//           <i
//             className="bi bi-chat-dots"
//             style={{ fontSize: "1.5rem", cursor: "pointer" }}
//           ></i>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Searchbar;




import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from "react-bootstrap";
import { FaBell, FaComment, FaUser } from "react-icons/fa";

const Searchbar = () => {
  return (
    <Navbar expand="lg" className="bg-light shadow-sm fixed-top w-100">
      <div className="container-fluid">
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="d-flex justify-content-between">
          
          {/* Search Bar */}
          <Form className="d-flex w-50">
            <FormControl type="search" placeholder="Search..." className="me-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>

          {/* Right Side Icons */}
          <Nav className="align-items-center">
            {/* Notifications */}
            <Nav.Link href="#">
              <FaBell size={20} className="text-dark" />
            </Nav.Link>

            {/* Chat */}
            <Nav.Link href="#">
              <FaComment size={20} className="text-dark" />
            </Nav.Link>

            {/* Profile Dropdown */}
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic" className="border-0">
                <FaUser size={22} className="text-dark" />
              </Dropdown.Toggle>

              <Dropdown.Menu align="end">
                <Dropdown.Item href="#">Add Vendor</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Searchbar;
