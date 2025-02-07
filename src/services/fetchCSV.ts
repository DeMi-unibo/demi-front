import Papa from "papaparse";

export const fetchCSV = async (url: string) => {
  const response = await fetch(url);
  const csvText = await response.text();

  return new Promise<any[]>((resolve, reject) => {
    Papa.parse(csvText, {
      complete: (result) => {
        resolve(result.data); // CSV rows as array of objects
      },
      header: true, // Assumes the first row contains column names
      skipEmptyLines: true, // Skips empty lines
      dynamicTyping: true, // Automatically converts numeric values to numbers
    });
  });
};