const staticDataUrl = process.env.STATIC_DATA_URL;

const getJson = (fileName: string): URL => new URL(`${staticDataUrl}/${fileName}.json`);
const getMd = (fileName: string): URL => new URL(`${staticDataUrl}/content/${fileName}.md`);

const getByFileType = (type: string, fileName: string): URL => {
    switch (type) {
        case 'json':
            return getJson(fileName);
        case 'md':
            return getMd(fileName);
        default:
            return getJson(fileName);
    }
};

const responseByFileType = (type: string, response: Response) => {
    switch (type) {
        case 'json':
            return response.json();
        case 'md':
            return response.text();
        default:
            return response.json();
    }
};

const api = {
    adhocCulturaData: {
        /**
         * Fetches data from the specified file name.
         * 
         * @param type - The type of the file to fetch data from.
         * @param fileName - The name of the file to fetch data from.
         * @returns A Promise that resolves to the fetched data, or null if the fetch request fails.
         */
        async getData(type: string, fileName: string): Promise<any> {
            const response: Response = await fetch(getByFileType(type, fileName), {
                next: { revalidate: 3600 },});
            const data: any = response.status !== 200 ? null : await responseByFileType(type, response);
            return data;
        },
    },
};

export default api;
