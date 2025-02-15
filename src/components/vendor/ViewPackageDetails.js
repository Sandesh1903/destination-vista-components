import * as React from "react";
import { useState, useEffect } from "react";
import {
    ShowBase,
    useShowContext,
    useRecordContext,
} from "react-admin";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";

const ViewPackageDetailsContent = () => {
    const { record, isLoading } = useShowContext();

    if (isLoading) return <p>Loading...</p>;
    if (!record) return <p>No package details found.</p>;

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-sm">
                        <Card.Header className="bg-primary text-white">
                            <h4 className="mb-0">Package Details</h4>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item><strong>Title:</strong> {record.title}</ListGroup.Item>
                                <ListGroup.Item><strong>Description:</strong> {record.description}</ListGroup.Item>
                                <ListGroup.Item><strong>Price:</strong> ₹{record.price}</ListGroup.Item>
                                <ListGroup.Item><strong>Start Date:</strong> {record.startDate}</ListGroup.Item>
                                <ListGroup.Item><strong>End Date:</strong> {record.endDate}</ListGroup.Item>
                                <ListGroup.Item><strong>Destination:</strong> {record.destination}</ListGroup.Item>
                                <ListGroup.Item><strong>Available Slots:</strong> {record.availableSlots}</ListGroup.Item>
                                <ListGroup.Item><strong>Approved By:</strong> {record.approvedBy}</ListGroup.Item>
                                <ListGroup.Item><strong>Created By:</strong> {record.createdBy}</ListGroup.Item>
                                <ListGroup.Item><strong>Updated By:</strong> {record.updatedBy}</ListGroup.Item>
                            </ListGroup>
                            <div className="text-center mt-3">
                                <Button variant="primary">Edit Package</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export const ViewPackageDetails = ({ id }: { id: string }) => {
    // Dummy data for testing
    const dummyRecord = {
        id: id,
        title: "Himalayan Adventure",
        description: "A breathtaking adventure in the Himalayas.",
        price: 15000,
        startDate: "2025-05-01",
        endDate: "2025-05-10",
        destination: "Manali, Himachal Pradesh",
        availableSlots: 20,
        approvedBy: "Admin",
        createdBy: "Travel Agency",
        updatedBy: "Admin",
    };

    return (
        <ShowBase resource="packages" id={id} record={dummyRecord}>
            <ViewPackageDetailsContent />
        </ShowBase>
    );
};

export default ViewPackageDetails;
