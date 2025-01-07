import React from "react";
import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/vendor/DashboardContent";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbar from "./components/Searchbar";
import DailyReports from "./components/vendor/DailyReports";
import ChatInterface from "./components/vendor/ChatInterface";
import EmailUpdates from "./components/vendor/EmailUpdates";
import PendingRequests from "./components/vendor/PendingRequests";
import RevenueChart from "./components/vendor/RevenueChart";
import ApprovedRequests from "./components/vendor/ApprovedRequests";
import RaiseTickets from "./components/vendor/RaiseTickets";
import RevenueStatistics from "./components/vendor/RevenueStatistics";
import SendBills from "./components/vendor/SendBills";
import TripUpdates from "./components/vendor/TripUpdates";
import Wallet from "./components/vendor/Wallet";

import { Container, Row, Col } from 'react-bootstrap';
import Dashboard from "./components/superAdmin/WebsiteOperations";
import VendorOperations from "./components/superAdmin/VendorOperations";
import UserOperations from "./components/superAdmin/UserOperations";
import Settings from "./components/superAdmin/Settings";
import Notifications from "./components/superAdmin/Notifications";

// ReactDOM.render(<Dashboard />, document.getElementById("root"));
// ReactDOM.render(<VendorDashboard />, document.getElementById("root"));
// ReactDOM.render(<UserDashboard />, document.getElementById("root"));
const App = () => {
  return (
    <div className="d-flex">
       <Sidebar />
      {/* <Searchbar/> */}
      
      {/* <DashboardContent /> */}
      {/* <DailyReports/> */}
      {/* <ChatInterface/> */}
      {/* <EmailUpdates/> */}
      {/* <PendingRequests/> */}
      {/* <ApprovedRequests/> */}
      {/* <RaiseTickets/> */}
      {/* <RevenueStatistics/> */}
      {/* <SendBills/> */}
      {/* <TripUpdates/> */}
      {/* <Wallet/> */}
     
     
     
     
     
      {/* <RevenueChart/> */}


      {/* SuperAdmin */}
      {/* <Dashboard/> */}
      {/* <VendorOperations/> */}
      <UserOperations/>
      {/* <Settings/> */}
      {/* <Notifications/> */}
    </div>
  );
};

export default App;






// function App() {
//   return (
//     <div>
//       <Container fluid>
//         <Row className="mb-4">
//           <Col>
//             <Searchbar />
//           </Col>
//         </Row>
//         <Row>
//           <Col xs={3} className="p-0">
//             <Sidebar />
//           </Col>
//           <Col xs={8} className="p-0">
//             <DashboardContent />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default App;
