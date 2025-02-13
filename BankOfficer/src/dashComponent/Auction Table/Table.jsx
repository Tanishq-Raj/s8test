import { useState } from "react";
import { Eye, Search, Users, Edit, Trash } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link component for routing
import { singlePostData } from "../../dummyData"; // Adjust the path accordingly
import * as XLSX from "xlsx"; // Import xlsx library
import "./table.scss";

const AuctionHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(singlePostData.length / itemsPerPage);

  const startEntry = (currentPage - 1) * itemsPerPage + 1;
  const endEntry = Math.min(currentPage * itemsPerPage, singlePostData.length);

  const currentData = singlePostData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPagination = () => {
    const pages = [];
    const range = 2; // Number of page numbers to show before and after the current page
  
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(1, currentPage - range);
      let end = Math.min(totalPages, currentPage + range);
  
      if (start > 1) pages.push(1);
      if (start > 2) pages.push("...");
  
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
  
      if (end < totalPages - 1) pages.push("...");
      if (end < totalPages) pages.push(totalPages);
    }
    return pages;
  };

  // Get Status of auction
  const getStatus = (auctionDate) => {
    const currentDate = new Date();
    const auctionDateObj = new Date(auctionDate);

    if (auctionDateObj < currentDate.setHours(0, 0, 0, 0)) {
      return "Closed";
    } else if (auctionDateObj.toDateString() === currentDate.toDateString()) {
      return "Ongoing";
    } else {
      return "Upcoming";
    }
  };


  // Export data to Excel
  const exportToExcel = () => {
    // Map data to a flat format for Excel
    const exportData = singlePostData.map((item, index) => ({
      "SR. NO.": index + 1,
      "PROPERTY NAME": item.title,
      PRICE: item.price,
      DATE: item.auctionDate,
      ADDRESS: item.address,
      CITY: item.city,
      STATE: item.state,
      STATUS: getStatus(item.auctionDate),
      AUCTION_TYPE: item.auctionType,
      CATEGORY: item.category,
      BORROWER: item.borrower,
      DUE_AMOUNT: item.dueAmount,
      DEPOSIT: item.deposit,
      BID_INC_AMOT:item.bidInc,
      INSPECTION_DATE: item.inspectDate,
      INSPECTION_TIME: item.inspectTime,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Auction Data");
    XLSX.writeFile(workbook, "AuctionHistory.xlsx");
  };

  return (
    <div className="auction-container">
      {/* <div className="auction-box"> */}
        <div className="auction-header">
          <h2>Auction List</h2>
          <div className="auction-actions">
            <div className="search-box">
              <Search className="search-icon" size={16} />
              <input type="text" placeholder="Search records" />
            </div>
            <Link to="/addNew" className="add-button">
              <Users size={16} /> Add New Assets
            </Link>
          </div>
        </div>
        <div className="table-options">
          <label>Show Entries: </label>
          <select value={itemsPerPage} onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
        <div className="download" style={{ display: "flex", justifyContent: "flex-end" }}>
          <button className="download-button" style={{ marginBottom: "25px", }} onClick={exportToExcel}>
            Download Excel
          </button>
        </div>
        <div className="table-container">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>SR. NO.</th>
                  <th>PROPERTY NAME</th>
                  <th>BORROWER</th>
                  <th>PRICE</th>
                  <th className="date-column">DATE</th>
                  <th>CATEGORY</th>
                  <th>ADDRESS</th>
                  <th>CITY</th>
                  <th>STATE</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.borrower}</td>        
                    <td>{item.price}</td>
                    <td>{item.auctionDate}</td>
                    <td>{item.category}</td>
                    <td>{item.address}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td>
                      <span className={getStatus(item.auctionDate) === "Closed" ? "closed" : getStatus(item.auctionDate) === "Ongoing" ? "ongoing" : "upcoming"}>
                        {getStatus(item.auctionDate)}
                      </span>
                    </td>
                    <td className="action-buttons">
                      <Link to={`/property/${item.id}`} className="view-button">
                        <Eye size={16} /> 
                      </Link>
                      <button className="edit-button">
                        <Edit size={16} />
                      </button>
                      <button className="delete-button">
                        <Trash size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="pagination-container">
          <div className="showing-entries">
            Showing {startEntry} to {endEntry} out of {singlePostData.length} results found
          </div>
          <div className="pagination-controls">
            <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>First</button>
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Prev</button>
            {getPagination().map((page, index) => (
              <button 
                key={index} 
                className={currentPage === page ? "active" : ""} 
                onClick={() => typeof page === "number" && setCurrentPage(page)}
                disabled={page === "..."}>{page}</button>
            ))}
            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
            <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>Last</button>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default AuctionHistory;
