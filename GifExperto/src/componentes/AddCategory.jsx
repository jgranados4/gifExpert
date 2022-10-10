import { useState } from "react";

export const AddCategory = ({onNewCategoria}) => {
  const [inputValue, setinputValue] = useState("");
// evento para implementar
  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };
    //funciones de recargar pagina
    const onSubmit=(event)=>{
      event.preventDefault();
      if(inputValue.trim().length <= 1) return;

    //setcategoria( categories=> [inputValue,...categories])
      // vacio del input
      setinputValue('');
      onNewCategoria(inputValue.trim());
    }
  return (
    <form  onSubmit={onSubmit} >
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
