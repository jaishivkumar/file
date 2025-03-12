'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card, Button, Form } from 'react-bootstrap';
import HeaderOne from '@/components/HeaderOne';
import 'bootstrap/dist/css/bootstrap.min.css';

const page = () => {
  const [enableAccountCreation, setEnableAccountCreation] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);

  return (
    <>
     <div className="vh-100 vw-100 d-flex flex-column text-white" style={{ backgroundColor: '#071328' }}>
        <HeaderOne />
        <Container fluid className="flex-grow-1 p-5 settings-container">
          <h2 className="text-white">Settings</h2>
          <Nav variant="tabs" defaultActiveKey="security" className="mb-4">
            <Nav.Item>
              <Nav.Link eventKey="profile">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tribez">Tribez Prime</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link eventKey="channel">Channel & Videos</Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link eventKey="security" active>Security</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="notifications">Notifications</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="funds">Manage Funds</Nav.Link>
            </Nav.Item>
          </Nav>

          <Card className="p-4 bg-dark settings-card">
            <h4>Contact</h4>
            <p>Where we send important messages about your account</p>
            <Row className="mb-3">
              <Col md={8}>
                <Card className="p-3 bg-dark text-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6>Email Address</h6>
                      <p>This email will be linked to your account.</p>
                    </div>
                    <Button variant="primary">Change Email Address</Button>
                  </div>
                </Card>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={8}>
                <Card className="p-3 bg-dark text-white">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6>Enable additional account creation</h6>
                      <p>You must have a verified email address to modify this setting.</p>
                    </div>
                    <Form.Check 
                      type="switch"
                      checked={enableAccountCreation}
                      onChange={() => setEnableAccountCreation(!enableAccountCreation)}
                    />
                  </div>
                </Card>
              </Col>
            </Row>
          </Card>

          <Card className="settings-card bg-dark">
            <h4>Security</h4>
            <p>Keep your account safe and sound</p>

            <Card className="p-3 bg-dark text-white mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6>Password</h6>
                  <p>Improve your security with a strong password.</p>
                </div>
                <Button variant="primary">Change Password</Button>
              </div>
            </Card>

            <Card className="p-3 bg-dark text-white">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6>Turn on Two-factor Authentication</h6>
                  <p>This will add another security level to your account.</p>
                </div>
                <Form.Check 
                  type="switch"
                  checked={twoFactorAuth}
                  onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                />
              </div>
            </Card>
          </Card>
        </Container>
      </div>

  
    </>
  );
};

export default page;
