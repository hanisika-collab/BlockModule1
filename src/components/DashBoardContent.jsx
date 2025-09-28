import React from "react";
import { Card, Row, Col, Table } from "react-bootstrap";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const DashboardContent = () => {
  // Chart Data
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Uploads",
        data: [5, 8, 6, 12, 7, 10],
        backgroundColor: "rgba(54, 162, 235, 0.7)",
      },
    ],
  };

  const pieData = {
    labels: ["Verified", "Pending", "Rejected"],
    datasets: [
      {
        data: [12, 5, 3],
        backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
      },
    ],
  };

  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Activity",
        data: [3, 7, 4, 9],
        borderColor: "#007bff",
        backgroundColor: "rgba(0,123,255,0.3)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // Chart Options (for smaller size)
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // lets us control height
    plugins: {
      legend: {
        position: "bottom",
        labels: { boxWidth: 15, font: { size: 12 } },
      },
    },
  };

  return (
    <div className="p-4 w-100" style={{ height: "100vh", overflowY: "auto" }}>
      <h2 className="mb-4 fw-bold">Main Dashboard</h2>

      {/* Top Stat Cards */}
      <Row className="mb-4">
        <Col md={3}>
          <Card className="shadow-sm text-center p-3">
            <Card.Title>Total Works</Card.Title>
            <h3>37.5K</h3>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm text-center p-3">
            <Card.Title>NFTs Issued</Card.Title>
            <h3>5,279</h3>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm text-center p-3">
            <Card.Title>Pending Verifications</Card.Title>
            <h3>124</h3>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm text-center p-3">
            <Card.Title>Active Disputes</Card.Title>
            <h3>8</h3>
          </Card>
        </Col>
      </Row>

      {/* Charts */}
      <Row>
        <Col md={4}>
          <Card className="shadow-sm p-3 mb-4" style={{ height: "300px" }}>
            <Card.Title className="text-center">📊 Uploads</Card.Title>
            <div style={{ height: "220px" }}>
              <Bar data={barData} options={chartOptions} />
            </div>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm p-3 mb-4" style={{ height: "300px" }}>
            <Card.Title className="text-center">📊 Status</Card.Title>
            <div style={{ height: "220px" }}>
              <Pie data={pieData} options={chartOptions} />
            </div>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm p-3 mb-4" style={{ height: "300px" }}>
            <Card.Title className="text-center">📈 Activity</Card.Title>
            <div style={{ height: "220px" }}>
              <Line data={lineData} options={chartOptions} />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Table */}
      <Row>
        <Col md={12}>
          <Card className="shadow-sm p-3 h-100">
            <Card.Title>📋 Recent Works</Card.Title>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Work</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Research Paper</td>
                  <td>Verified</td>
                  <td>2025-09-20</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Design Document</td>
                  <td>Pending</td>
                  <td>2025-09-21</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardContent;