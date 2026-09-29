import { useState } from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";

function Admission() {
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    gender: "",
    studentClass: "",
    fatherName: "",
    motherName: "",
    parentPhone: "",
    parentEmail: "",
    address: "",
    previousSchool: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "YOUR_GOOGLE_APPS_SCRIPT_URL",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setMessage(
          `Admission submitted successfully! Your Admission ID is ${result.admissionId}`
        );

        setFormData({
          studentName: "",
          dob: "",
          gender: "",
          studentClass: "",
          fatherName: "",
          motherName: "",
          parentPhone: "",
          parentEmail: "",
          address: "",
          previousSchool: "",
        });
      } else {
        setSuccess(false);
        setMessage("Unable to submit admission form.");
      }

    } catch (error) {
      console.error(error);

      setSuccess(false);
      setMessage(
        "Something went wrong. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <section id="admission" className="py-5">

      <Container style={{ maxWidth: "850px" }}>

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Admission Form
          </h2>

          <p className="text-muted">
            Fill in the details below to apply for admission.
          </p>
        </div>

        {message && (
          <Alert
            variant={success ? "success" : "danger"}
            className="mb-4"
          >
            {message}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>

          {/* Student Details */}

          <h5 className="fw-bold mb-3">
            Student Details
          </h5>

          <Row>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Student Name
                </Form.Label>

                <Form.Control
                  type="text"
                  name="studentName"
                  placeholder="Enter student name"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Date of Birth
                </Form.Label>

                <Form.Control
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

          </Row>

          <Row>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Gender
                </Form.Label>

                <Form.Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Applying For Class
                </Form.Label>

                <Form.Select
                  name="studentClass"
                  value={formData.studentClass}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Class
                  </option>

                  <option value="Nursery">
                    Nursery
                  </option>

                  <option value="LKG">
                    LKG
                  </option>

                  <option value="UKG">
                    UKG
                  </option>

                  <option value="1st">
                    Class 1
                  </option>

                  <option value="2nd">
                    Class 2
                  </option>

                  <option value="3rd">
                    Class 3
                  </option>

                  <option value="4th">
                    Class 4
                  </option>

                  <option value="5th">
                    Class 5
                  </option>

                  <option value="6th">
                    Class 6
                  </option>

                  <option value="7th">
                    Class 7
                  </option>

                  <option value="8th">
                    Class 8
                  </option>

                  <option value="9th">
                    Class 9
                  </option>

                  <option value="10th">
                    Class 10
                  </option>

                  <option value="11th">
                    Class 11
                  </option>

                  <option value="12th">
                    Class 12
                  </option>

                </Form.Select>
              </Form.Group>
            </Col>

          </Row>

          <hr className="my-4" />

          {/* Parent Details */}

          <h5 className="fw-bold mb-3">
            Parent / Guardian Details
          </h5>

          <Row>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Father Name
                </Form.Label>

                <Form.Control
                  type="text"
                  name="fatherName"
                  placeholder="Enter father's name"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Mother Name
                </Form.Label>

                <Form.Control
                  type="text"
                  name="motherName"
                  placeholder="Enter mother's name"
                  value={formData.motherName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

          </Row>

          <Row>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Parent Phone
                </Form.Label>

                <Form.Control
                  type="tel"
                  name="parentPhone"
                  placeholder="Enter phone number"
                  value={formData.parentPhone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Parent Email
                </Form.Label>

                <Form.Control
                  type="email"
                  name="parentEmail"
                  placeholder="Enter email address"
                  value={formData.parentEmail}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>

          </Row>

          <Form.Group className="mb-3">

            <Form.Label>
              Address
            </Form.Label>

            <Form.Control
              as="textarea"
              rows={3}
              name="address"
              placeholder="Enter complete address"
              value={formData.address}
              onChange={handleChange}
              required
            />

          </Form.Group>

          <hr className="my-4" />

          {/* Previous School */}

          <h5 className="fw-bold mb-3">
            Previous School Details
          </h5>

          <Form.Group className="mb-4">

            <Form.Label>
              Previous School
            </Form.Label>

            <Form.Control
              type="text"
              name="previousSchool"
              placeholder="Enter previous school name"
              value={formData.previousSchool}
              onChange={handleChange}
            />

          </Form.Group>

          {/* Submit */}

          <div className="text-center">

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={loading}
              className="px-5"
            >
              {loading
                ? "Submitting..."
                : "Submit Admission Form"}
            </Button>

          </div>

        </Form>

      </Container>

    </section>
  );
}

export default Admission;