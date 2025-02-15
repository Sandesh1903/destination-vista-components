// import * as React from "react";
// import { SimpleForm, TextInput, required, email, Edit } from "react-admin";

// export const VendorUpdate = () => (
//   <Edit>
//     <SimpleForm>
//       <TextInput source="agencyTitle" validate={[required()]} />
//       <TextInput source="email" validate={[required(), email()]} />
//       <TextInput source="contactNumber" validate={[required()]} />
//     </SimpleForm>
//   </Edit>
// );


import React, { FC } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const VendorUpdate: FC = () => {
  // Handle Form Submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <h4>Vendor edit </h4>
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <h5>Profile</h5>
            <p className="text-muted">The information can be edited</p>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>First name *</Form.Label>
                    <Form.Control type="text" defaultValue="Raj" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Last name *</Form.Label>
                    <Form.Control type="text" defaultValue="Kumar" required />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address *</Form.Label>
                    <Form.Control
                      type="email"
                      defaultValue="raj@kumar.io"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="tel" placeholder="1234567819" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Form.Select>
                      <option>Select State</option>
                      <option>Maharashtra</option>
                      <option>Gujarat</option>
                      <option>Kashmir</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" />
                  </Form.Group>
                </Col>
              </Row>

              <Button type="submit" variant="primary" className="w-100">
                Save details
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VendorUpdate;










































// final


// import * as React from "react";
// import { Create, SimpleForm, TextInput, required, email } from "react-admin";
// import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

// export const VendorCreate = () => (
//   // <Create>
//   //   <SimpleForm>
//   //     {/* <ReferenceInput source="userId" reference="user" >
//   //       <SelectInput optionText="email"  />
//   //     </ReferenceInput> */}
//   //     <TextInput source="userId" validate={[required()]} />
//   //     <TextInput source="agencyTitle" validate={[required()]} />
//   //     <TextInput source="email" validate={[required(), email()]} />
//   //     <TextInput source="contactNumber" validate={[required()]} />
//   //     <TextInput source="createdBy" validate={[required()]} />
//   //     <TextInput source="updatedBy" validate={[required()]} />
//   //   </SimpleForm>
//   // </Create>


//   <Container className="mt-5">
//       <Row className="justify-content-center">
//         <h4>Vendor Edit</h4>
//         <Col md={6}>
//           <Card className="p-4 shadow-sm">
//             <h5>Profile</h5>
//             <p className="text-muted">The information can be edited</p>
//             <Form >
//               <Row>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>First name *</Form.Label>
//                     <Form.Control type="text" defaultValue="Raj" required />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Last name *</Form.Label>
//                     <Form.Control type="text" defaultValue="Kumar" required />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Email address *</Form.Label>
//                     <Form.Control
//                       type="email"
//                       defaultValue="raj@kumar.io"
//                       required
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Phone number</Form.Label>
//                     <Form.Control type="tel" placeholder="1234567819" />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>State</Form.Label>
//                     <Form.Select>
//                       <option>Select State</option>
//                       <option>Maharashtra</option>
//                       <option>Gujarat</option>
//                       <option>Kashmir</option>
//                     </Form.Select>
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>City</Form.Label>
//                     <Form.Control type="text" placeholder="City" />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Button type="submit" variant="primary" className="w-100">
//                 Save details
//               </Button>
//             </Form>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
// );
