import { useState } from 'react';
import { AddCategory,GifGrid} from './componentes';


export const GifExpertApp=()=>{
  const [categoria, setcategoria] = useState(['one punch']);
  // Agregar input
  const onAddcategory=(NewCategoria)=>{
    // !validar solo buscar un elemento
    if(categoria.includes(NewCategoria)) return;
    // categoria.push(NewCategoria)
    setcategoria([NewCategoria,...categoria]);
    // setcategoria(cat =>[...cat,'valorant']);
  }
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
      onNewCategoria={ event=>onAddcategory(event)}
      // setcategoria={setcategoria}
      />
      {/* <button onClick={onAddcategory}>Agregar</button> */}
        {categoria.map((category) =>
           (
            <div key={category} >
              <GifGrid key={category}
              category={category}
              />
            </div>
          )
        )}
    </>
  );
}