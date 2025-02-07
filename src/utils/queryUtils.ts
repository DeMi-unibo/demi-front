// Utility to filter data based on a search term in any column
export const filterData = (data: any[], searchTerm: string) => {
    if (!searchTerm) return data;
    return data.filter((row) => {
        return Object.values(row).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        );
    });
};

// Utility to sort data based on a column
export const sortData = (
    data: any[],
    column: string,
    ascending: boolean = true
) => {
    return data.sort((a, b) => {
        const valueA = a[column];
        const valueB = b[column];

        if (valueA < valueB) return ascending ? -1 : 1;
        if (valueA > valueB) return ascending ? 1 : -1;
        return 0;
    });
};
