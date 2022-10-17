
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem'

export const GifGrid = ({category}) => {
  const {imagen,isLoading}=useFetchGifs(category);

  return (
    <>
    <h3>{category}</h3>
    <div className="card-grid" >
      {/* Recorrer con map  */}
       { imagen.map((image)=>(
          <GifItem
           key={image.id}
           {...image}
           />
        ))
       }
    </div>
    </>
  )
}
