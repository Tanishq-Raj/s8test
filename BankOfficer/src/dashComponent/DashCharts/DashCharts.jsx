import { PieChart, Pie, Cell, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./dashCharts.scss";

const DashCharts = () => {
// Asset Data
const assetData = [
    { name: "Commercial", value: 25, color: "#6C63FF" },
    { name: "Industrial", value: 20, color: "#FFA500" },
    { name: "Residential", value: 15, color: "#3CB371" },
    { name: "Agriculture", value: 25, color: "#FF69B4" },
  ];

  // Pie Chart Data
  const pieData = [
    { name: "Commercial", value: 25, color: "#60A5FA" },
    { name: "Industrial", value: 20, color: "#86EFAC" },
    { name: "Residential", value: 15, color: "#FB923C" },
    { name: "Agriculture", value: 25, color: "#A78BFA" },
  ];

  // User Interactions Line Chart Data
  const userData = [
    { month: "Jan", views: 20 },
    { month: "Feb", views: 15 },
    { month: "Mar", views: 18 },
    { month: "Apr", views: 25 },
    { month: "May", views: 30 },
    { month: "Jun", views: 27 },
  ];

  return (
    <div className="dashboard-charts">
      {/* Total Assets */}
      <div className="total-assets">
        <div className="asset-card">
          <h3>Total Assets</h3>
          <h2>85</h2>
          <p>Current Assets</p>
        </div>
        <div className="asset-list">
          {assetData.map((item, index) => (
            <div key={index} className="asset-item" style={{ borderColor: item.color }}>
              <h3>{item.value}</h3>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* My Asset Analytics (Pie Chart) */}
      <div className="asset-analytics">
        <h3>My Asset Analytics</h3>
        <div className="filters">
          <select>
            <option>Location</option>
          </select>
          <select>
            <option>Today</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={250}>
        <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={50} // Makes it a donut chart
              outerRadius={80}
              paddingAngle={3}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* User Interactions (Line Chart) */}
      <div className="user-interactions">
        <div className="chart-header">
          <h3>User Interactions</h3>
          <select>
            <option>Monthly</option>
          </select>
        </div>
        <h2>5,000</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={userData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="views" stroke="#2563EB" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};


export default DashCharts
