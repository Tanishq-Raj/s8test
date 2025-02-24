import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "./dashCharts.scss";
import { AppContext } from "../../context/context";

const DashCharts = () => {
  // **State for Assets & Filters**
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedDate, setSelectedDate] = useState(""); // State for selected date

  const { serverUrl } = useContext(AppContext);

  // **Fetch Data from API**
  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const { data } = await axios.get(`${serverUrl}/api/v1/bank-user/get-property`, {
          withCredentials: true,
        });

        if (data.success) {
          setAssets(data.properties);
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

  // **Extract Unique City Names & Categories**
  const cityOptions = ["All", ...new Set(assets.map(item => item.address?.city).filter(Boolean))];
  const categoryOptions = ["All", ...new Set(assets.map(item => item.category).filter(Boolean))];

  // **Filter Data Based on Selection**
  const filteredData = assets.filter(asset =>
    (selectedCity === "All" || asset.address?.city === selectedCity) &&
    (selectedCategory === "All" || asset.category === selectedCategory) &&
    (selectedStatus === "All" || asset.status?.toLowerCase() === selectedStatus.toLowerCase()) &&
    (selectedDate === "" || new Date(asset.auctionDate).toISOString().split("T")[0] === selectedDate)
  );

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
      Commercial: "#A78BFA",
      Industrial: "#FB923C",
      Land: "#86EFAC", // Fixed "Land" to "Agricultural"
    };
    return colors[category] || "#F472B6"; // Default color if category is missing
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
          {/* ✅ Total Assets & Asset Analytics (1st Row) */}
          <div className="total-assets">
            <div className="asset-card">
              <h3>Total Assets:</h3>
              <h2>{totalAssets}</h2>
            </div>
            <div className="asset-list">
            {Object.keys(categoryCount).map((category, index) => {
              const percentage = (categoryCount[category] / totalAssets) * 100;
              return (
                <div key={index} className="asset-item">
                  <div className="fill-bar" style={{
                    width: `${percentage}%`,
                    backgroundColor: getCategoryColor(category),
                  }}></div>
                  <div className="text-content">
                    <h3>{categoryCount[category]}</h3>
                    <p>{category}</p>
                  </div>
                </div>
              );
             })}
            </div>
          </div>

 {/* My Asset Analytics (Donut Pie Chart) */}
          <div className="asset-analytics">
            <h3>My Asset Analytics</h3>
            <div className="filters">
              <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
              <option value="All">All Location</option>
                {cityOptions.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
              <select>
                <option>Today</option>
              </select>
            </div>
            <div className="donut-chart">
             <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={3} dataKey="value">
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


          {/* ✅ User Interactions & Price Range Analysis (2nd Row) */}
          <div className="user-interactions">
            <h3>User Interactions</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={userData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="views" stroke="#2563EB" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* price Range Analysis (2nd Row) */}
          <div className="price-range-analysis">
            <h3>Analysis using price range</h3>
            <div className="filters">
              <input type="text" placeholder="From" />
              <input type="text" placeholder="To" />
              <select>
                <option>Status</option>
                <option>Upcoming</option>
                <option>Ongoing</option>
                <option>Closed</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={90} paddingAngle={3} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Table (3rd Row) */}
          <div className="dash-table">
      <h3>Assets Table</h3>
      
      {/* City Filter Dropdown */}
      <div className="table-filters">
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="All">All Location</option>
          {cityOptions.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>

        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">Select Category</option>
          {categoryOptions.map((category, index) => (
           <option key={index} value={category}>{category}</option>
          ))}
        </select>

          <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
            {/* < option value="" disabled>Select Status</option> */}
            <option value="All">All Status</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Closed">Closed</option>
          </select>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                placeholder="Select Date"
              />
            </div>


      {/* Table Display */}
      <div className="table-container">
     
          <table>
            <thead>
              <tr>
              <th style={{ width: "30px",wordWrap: "break-word", whiteSpace: "normal", overflowWrap: "break-word"}}>Sr.no</th>
                <th>Title</th>
                <th>Category</th>
                <th>City / State</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((asset, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{asset.title}</td>
                    <td>{asset.category}</td>
                    <td>{asset.address?.city || "N/A"}</td>
                    <td>{asset.auctionDate || "N/A"}</td>
                    <td className={`status ${asset.status?.toLowerCase() || "unknown"}`}>
                      {asset.status || "Unknown"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>No assets available</td>
                </tr>
              )}
            </tbody>
          </table>
      </div>
    </div>
        </>
      )}
    </div>
  );
};

export default DashCharts;
