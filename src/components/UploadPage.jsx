// UploadDocument.jsx (Dummy DB Version with classNames)
import React, { useState } from "react";
import { Card, Form, Button, Alert, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./UploadPage.css";  
const UploadPage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [documents, setDocuments] = useState([]); // acts like dummy DB
  const [counter, setCounter] = useState(1);

  // Handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setStatus("");
  };

  // Simulate upload
  const handleUpload = () => {
    if (!file) {
      setStatus("Please select a file first.");
      return;
    }

    const newDoc = {
      id: counter,
      name: file.name,
      url: URL.createObjectURL(file),
    };

    setDocuments([...documents, newDoc]);
    setCounter(counter + 1);
    setFile(null);
    setStatus("Upload successful (dummy DB)!");
  };

  // Simulate delete
  const handleDelete = (id) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
    setStatus("Document deleted (dummy DB)!");
    navigate("/dashboard");
  };

  return (
    <Card className="upload-card shadow-sm p-4 mb-4">
      <Card.Title className="upload-card-title">📤 Upload Document (Dummy Mode)</Card.Title>

      <Form className="upload-form">
        <Form.Group controlId="formFile" className="mb-3 upload-form-group">
          <Form.Control type="file" onChange={handleFileChange} className="upload-file-input" />
        </Form.Group>
        <Button variant="primary" onClick={handleUpload} className="upload-btn">
          Upload
        </Button>
      </Form>

      {status && (
        <Alert
          className={`upload-status mt-3 ${
            status.includes("successful") ? "upload-success" : "upload-info"
          }`}
        >
          {status}
        </Alert>
      )}

      <hr className="upload-divider" />
      <h5 className="upload-list-title">📑 Uploaded Documents</h5>
      <ListGroup className="upload-list mt-2">
        {documents.length > 0 ? (
          documents.map((doc) => (
            <ListGroup.Item
              key={doc.id}
              className="upload-list-item d-flex justify-content-between align-items-center"
            >
              <a href={doc.url} target="_blank" rel="noopener noreferrer" className="upload-doc-link">
                {doc.name}
              </a>
              <Button
                variant="danger"
                size="sm"
                className="upload-delete-btn"
                onClick={() => handleDelete(doc.id)}
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item className="upload-empty">No documents uploaded yet.</ListGroup.Item>
        )}
      </ListGroup>
    </Card>
  );
};

export default UploadPage;
