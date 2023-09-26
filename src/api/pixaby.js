import useSWR from 'swr';

const apiKey = '39091823-7ff365f4b5172a8c1ef75678d';
const urlApi = `https://pixabay.com/api/?key=${apiKey}`;

const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };



export const useGetImage = (imageId) => {
  const data =  useSWR(`${urlApi}&id=${encodeURIComponent(imageId)}&image_type=photo`, fetcher);

  return data
}

export const useGetImages = (queryString) => {
  const data =  useSWR(`${urlApi}&q=${encodeURIComponent(queryString)}&image_type=photo`, fetcher);

  return data
}