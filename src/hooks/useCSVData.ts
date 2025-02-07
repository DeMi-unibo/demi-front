// src/hooks/useCSVData.ts
import { useQuery } from "@tanstack/react-query";
import { fetchCSV } from "../services/fetchCSV";
import { filterData, sortData } from "../utils/queryUtils";

export const useCSVData = (url: string, searchTerm: string = "", sortColumn: string = "", ascending: boolean = true) => {
  const { data, ...queryInfo } = useQuery({
    queryKey: ["csvData", url],
    queryFn: () => fetchCSV(url),
    enabled: !!url,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  // If data is available, apply filtering and sorting
  const filteredData = data ? filterData(data, searchTerm) : [];
  const sortedData = sortColumn ? sortData(filteredData, sortColumn, ascending) : filteredData;

  return {
    data: sortedData,
    ...queryInfo,
  };
};
