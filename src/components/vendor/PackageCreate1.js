
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const PackageCreate: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    startDate: "",
    endDate: "",
    destination: "",
    availableSlots: "",
    approvedBy: "",
    createdBy: "",
    updatedBy: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    
    <Container className="mt-5" >
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-sm">
            <h3 className="text-center mb-4">Add Tour Package</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Title *</Form.Label>
                <Form.Control type="text" name="title" required value={formData.title} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description *</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" required value={formData.description} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price (₹) *</Form.Label>
                <Form.Control type="number" name="price" required value={formData.price} onChange={handleChange} />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Start Date *</Form.Label>
                    <Form.Control type="date" name="startDate" required value={formData.startDate} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>End Date *</Form.Label>
                    <Form.Control type="date" name="endDate" required value={formData.endDate} onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Destination *</Form.Label>
                <Form.Control type="text" name="destination" required value={formData.destination} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Available Slots *</Form.Label>
                <Form.Control type="number" name="availableSlots" required value={formData.availableSlots} onChange={handleChange} />
              </Form.Group>

              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Approved By</Form.Label>
                    <Form.Control type="text" name="approvedBy" value={formData.approvedBy} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Created By</Form.Label>
                    <Form.Control type="text" name="createdBy" value={formData.createdBy} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Updated By</Form.Label>
                    <Form.Control type="text" name="updatedBy" value={formData.updatedBy} onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Button type="submit" variant="primary" className="w-100">
                Submit Tour Package
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PackageCreate;
















    // import React, { useState } from "react";
    // import { Container, Grid, TextField, Button, Typography, Card, Box } from "@mui/material";

    // export const PackageCreate = () => {
    //   const [formData, setFormData] = useState({
    //     title: "",
    //     description: "",
    //     price: "",
    //     startDate: "",
    //     endDate: "",
    //     destination: "",
    //     availableSlots: "",
    //     approvedBy: "",
    //     createdBy: "",
    //     updatedBy: "",
    //   });

    //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    //   };

    //   const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log("Form Submitted", formData);
    //   };

    //   return (
    //     <Container maxWidth="md" sx={{ mt: 5 }}>
    //       <Grid container justifyContent="center">
    //         <Grid item md={8}>
    //           <Card sx={{ p: 4, boxShadow: 3 }}>
    //             <Typography variant="h5" align="center" sx={{ mb: 4 }}>
    //               Add Tour Package
    //             </Typography>
    //             <form onSubmit={handleSubmit}>
    //               <TextField
    //                 label="Title *"
    //                 name="title"
    //                 fullWidth
    //                 required
    //                 value={formData.title}
    //                 onChange={handleChange}
    //                 sx={{ mb: 3 }}
    //               />
    //               <TextField
    //                 label="Description *"
    //                 name="description"
    //                 fullWidth
    //                 required
    //                 multiline
    //                 rows={3}
    //                 value={formData.description}
    //                 onChange={handleChange}
    //                 sx={{ mb: 3 }}
    //               />
    //               <TextField
    //                 label="Price (₹) *"
    //                 name="price"
    //                 fullWidth
    //                 required
    //                 type="number"
    //                 value={formData.price}
    //                 onChange={handleChange}
    //                 sx={{ mb: 3 }}
    //               />
    //               <Grid container spacing={3}>
    //                 <Grid item md={6}>
    //                   <TextField
    //                     label="Start Date *"
    //                     name="startDate"
    //                     fullWidth
    //                     required
    //                     type="date"
    //                     value={formData.startDate}
    //                     onChange={handleChange}
    //                     sx={{ mb: 3 }}
    //                     InputLabelProps={{
    //                       shrink: true,
    //                     }}
    //                   />
    //                 </Grid>
    //                 <Grid item md={6}>
    //                   <TextField
    //                     label="End Date *"
    //                     name="endDate"
    //                     fullWidth
    //                     required
    //                     type="date"
    //                     value={formData.endDate}
    //                     onChange={handleChange}
    //                     sx={{ mb: 3 }}
    //                     InputLabelProps={{
    //                       shrink: true,
    //                     }}
    //                   />
    //                 </Grid>
    //               </Grid>
    //               <TextField
    //                 label="Destination *"
    //                 name="destination"
    //                 fullWidth
    //                 required
    //                 value={formData.destination}
    //                 onChange={handleChange}
    //                 sx={{ mb: 3 }}
    //               />
    //               <TextField
    //                 label="Available Slots *"
    //                 name="availableSlots"
    //                 fullWidth
    //                 required
    //                 type="number"
    //                 value={formData.availableSlots}
    //                 onChange={handleChange}
    //                 sx={{ mb: 3 }}
    //               />
    //               <Grid container spacing={3}>
    //                 <Grid item md={4}>
    //                   <TextField
    //                     label="Approved By"
    //                     name="approvedBy"
    //                     fullWidth
    //                     value={formData.approvedBy}
    //                     onChange={handleChange}
    //                     sx={{ mb: 3 }}
    //                   />
    //                 </Grid>
    //                 <Grid item md={4}>
    //                   <TextField
    //                     label="Created By"
    //                     name="createdBy"
    //                     fullWidth
    //                     value={formData.createdBy}
    //                     onChange={handleChange}
    //                     sx={{ mb: 3 }}
    //                   />
    //                 </Grid>
    //                 <Grid item md={4}>
    //                   <TextField
    //                     label="Updated By"
    //                     name="updatedBy"
    //                     fullWidth
    //                     value={formData.updatedBy}
    //                     onChange={handleChange}
    //                     sx={{ mb: 3 }}
    //                   />
    //                 </Grid>
    //               </Grid>
    //               <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
    //                 Submit Tour Package
    //               </Button>
    //             </form>
    //           </Card>
    //         </Grid>
    //       </Grid>
    //     </Container>
    //   );
    // };
