import axios from 'axios';
import type { AxiosResponse } from 'axios';

async function getBooksByQuery(query: string) {
    try {
        const URL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

        const { data }: AxiosResponse = await axios.get(URL);

        return data.items.map(({ volumeInfo, saleInfo }: any) => {
            const { title, imageLinks, authors, language } = volumeInfo;
            return {
                title: title || '',
                thumbnail: imageLinks?.smallThumbnail || '',
                authors: authors || [],
                language: language || '',
                buyLink: saleInfo?.buyLink || null,
            };
        });
    } catch (err) {
        console.error(err);
    }
}

export { getBooksByQuery };
