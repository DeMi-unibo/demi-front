import React, { useState } from "react";
import { useCSVData } from "../hooks/useCSVData";

const DataTable = ({ url }: { url: string }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [ascending, setAscending] = useState(true);

  const { data, isLoading, error } = useCSVData(url, searchTerm, sortColumn, ascending);
  console.log(data);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setAscending(!ascending); // Toggle the order if the same column is clicked
    } else {
      setSortColumn(column);
      setAscending(true); // Default to ascending if a new column is clicked
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching data!</p>}
      <table>
        <thead>
          <tr>
            {/* Dynamically create table headers based on CSV columns */}
            {data && data[0] && Object.keys(data[0]).map((column) => (
              <th key={column} onClick={() => handleSort(column)}>
                {column} {sortColumn === column && (ascending ? "↑" : "↓")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value as React.ReactNode}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;