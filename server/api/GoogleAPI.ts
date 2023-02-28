import axios from 'axios';
import type { AxiosResponse } from 'axios';

async function getBooksByQuery(query: string) {
    try {
        const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

        const { data }: AxiosResponse = await axios.get(URL);

        return data.items.map(({ volumeInfo, saleInfo }: any) => {
            return {
                title: volumeInfo.title,
                thumbnail: volumeInfo.imageLinks.smallThumbnail,
                authors: volumeInfo.authors,
                language: volumeInfo.language,
                buyLink: saleInfo.buyLink,
            };
        });
    } catch (err) {
        console.error(err);
    }
}

export { getBooksByQuery };
