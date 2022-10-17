import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [imagen, setimagen] = useState([]);
  const [isLoading,setLoading]=useState(true);

  const getImagen=async()=>{
    const newImg = await getGifs(category);
    setimagen(newImg);
    setLoading(false);
  }
  useEffect(() => {
    getImagen();
  }, []);
  return {
    imagen,
    isLoading
  };
}
