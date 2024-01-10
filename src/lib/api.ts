const staticDataUrl = process.env.STATIC_DATA_URL;

const api = {
    adhocCulturaData: {
        /**
         * Fetches data from the specified file name.
         * 
         * @param fileName - The name of the file to fetch data from.
         * @returns A Promise that resolves to the fetched data, or null if the fetch request fails.
         */
        async getData(fileName: string): Promise<any> {
            const response: Response = await fetch(`${staticDataUrl}/${fileName}.json`, {
                next: { revalidate: 3600 },});
            const data: any = response.status !== 200 ? null : await response.json();
            return data;
        },
    },
};

export default api;
