import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "./dashCharts.scss";
import { AppContext } from "../../context/context";

const DashCharts = () => {
  // **State for Assets and City Filter**
  const [assets, setAssets] = useState([]);
  const [selectedCity, setSelectedCity] = useState("All");
  const [loading, setLoading] = useState(true);
  const { serverUrl } = useContext(AppContext); // Get API base URL

  // **Fetch Data from API**
  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const { data } = await axios.get(serverUrl + "/api/v1/bank-user/get-property", {
          withCredentials: true,
        });

        if (data.success) {
          setAssets(data.properties); // Assuming API returns { properties: [...] }
        } else {
          console.log("Error:", data.message);
        }
      } catch (error) {
        console.error("Error fetching assets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAssets();
  }, [serverUrl]);

  // **Extract Unique City Names**
  const cityOptions = ["All", ...new Set(assets.map(item => item.address?.city))];

  // **Filter Data by Selected City**
  const filteredData = selectedCity === "All" ? assets : assets.filter(item => item.address?.city === selectedCity);

  // **Total Assets Calculation**
  const totalAssets = filteredData.length;

  // **Category-wise Count Calculation**
  const categoryCount = filteredData.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  // **Formatted Data for Pie Chart**
  const pieData = Object.keys(categoryCount).map(category => ({
    name: category,
    value: categoryCount[category],
    color: getCategoryColor(category),
  }));

  // **Function to Assign Colors to Categories**
  function getCategoryColor(category) {
    const colors = {
      Residential: "#60A5FA",
      Commercial: "#86EFAC",
      Industrial: "#FB923C",
      Agricultural: "#A78BFA",
    };
    return colors[category] || "#F472B6"; // Default color if category not listed
  }

  // **User Interactions Line Chart Data (Placeholder)**
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
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          {/* Total Assets Section */}
          <div className="total-assets">
            <div className="asset-card">
              <h3>Total Assets</h3>
              <h2>{totalAssets}</h2>
              <p>Current Assets</p>
            </div>
            <div className="asset-list">
              {pieData.map((item, index) => (
                <div key={index} className="asset-item" style={{ borderColor: item.color }}>
                  <h3>{item.value}</h3>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* My Asset Analytics (Donut Pie Chart) */}
          <div className="asset-analytics">
            <h3>My Asset Analytics</h3>
            <div className="filters">
              {/* Location Filter */}
              <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                {cityOptions.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>

              {/* Date Filter */}
              <select>
                <option>Today</option>
              </select>
            </div>
            <div className="donut-chart">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60} // Donut effect
                    outerRadius={90}
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
              {/* Centered Text for Total Assets */}
              <div className="donut-center">
                <h2>{totalAssets}</h2>
                <p>Total</p>
              </div>
            </div>
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
        </>
      )}
    </div>
  );
};

export default DashCharts;
