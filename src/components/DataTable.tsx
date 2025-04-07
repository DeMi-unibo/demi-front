import React, { useState, useEffect } from "react";
import { Table, HStack, Stack, Spinner, Text, Input } from "@chakra-ui/react";
import {
    PaginationRoot,
    PaginationItems,
    PaginationNextTrigger,
    PaginationPrevTrigger,
} from "../components/ui/pagination";
import { useCSVData } from "../hooks/useCSVData";

// Adjust the number of rows per page
const PAGE_SIZE = 10;

const DataTable = ({
    url,
    year,
    gender,
    permit,
    dataset, // Add dataset prop to filter by Dataset_code
}: {
    url: string;
    year: string;
    gender: string;
    permit?: string;
    dataset: string; // Accept dataset type (D4 or D5)
}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortColumn, setSortColumn] = useState("Value"); // Set default sort column to "Value"
    const [ascending, setAscending] = useState(false); // Set default sort order (ascending)
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredData, setFilteredData] = useState<any[]>([]); // Store filtered data

    const { data, isLoading, error } = useCSVData(
        url,
        searchTerm,
        sortColumn,
        ascending
    );

    // useEffect to filter data based on year, gender, permit, and dataset type (D4 or D5)
    useEffect(() => {
        if (!data) return;
      
        let newFilteredData = data.filter((row) => {
          if (dataset === "D4") {
            return (
              String(row.Year) === year &&
              row.Sex === gender &&
              row.Dataset_Code === dataset &&
              row.Country_Code !== "IT"
            );
          } else if (dataset === "D5") {
            return (
              String(row.Year) === year &&
              row.Sex === gender &&
              row.Dataset_Code === dataset &&
              (permit ? row.Permit_Type === permit : true) &&
              row.Country_Code !== "IT"
            );
          }
          return false;
        });
      
        if (sortColumn) {
          newFilteredData.sort((a, b) => {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];
      
            if (typeof aValue === "string" && typeof bValue === "string") {
              return ascending
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue);
            }
            if (typeof aValue === "number" && typeof bValue === "number") {
              return ascending ? aValue - bValue : bValue - aValue;
            }
            return 0;
          });
        }
      
        setFilteredData(newFilteredData);
      }, [data, year, gender, permit, dataset, sortColumn, ascending]);
      
    // Pagination logic
    const paginatedData = filteredData
        ? filteredData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
        : [];

    const handleSort = (column: string) => {
        if (sortColumn === column) {
            setAscending(!ascending);
        } else {
            setSortColumn(column);
            setAscending(true);
        }
    };

    return (
        <Stack width="full" gap="5">
            {/* Search Input */}
            <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                mb="4"
                width="300px"
            />

            {/* Loading & Error Handling */}
            {isLoading && <Spinner />}
            {error && <Text color="red.500">Error fetching data!</Text>}

            {/* Table */}
            <Table.Root size="sm" variant="outline" striped>
                <Table.Header>
                    <Table.Row>
                        {filteredData &&
                            filteredData[0] &&
                            Object.keys(filteredData[0]).map((column) => (
                                <Table.ColumnHeader
                                    key={column}
                                    onClick={() => handleSort(column)}
                                    cursor="pointer"
                                >
                                    {column}{" "}
                                    {sortColumn === column &&
                                        (ascending ? "↑" : "↓")}
                                </Table.ColumnHeader>
                            ))}
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {paginatedData.map((row, index) => (
                        <Table.Row key={index}>
                            {Object.values(row).map((value, i) => (
                                <Table.Cell key={i}>
                                    {value as React.ReactNode}
                                </Table.Cell>
                            ))}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>

            {/* Pagination Controls */}
            <PaginationRoot
                count={filteredData?.length || 0}
                pageSize={PAGE_SIZE}
                page={currentPage}
                onPageChange={({ page }) => setCurrentPage(page)}
            >
                <HStack wrap="wrap">
                    <PaginationPrevTrigger />
                    <PaginationItems />
                    <PaginationNextTrigger />
                </HStack>
            </PaginationRoot>
        </Stack>
    );
};

export default DataTable;
