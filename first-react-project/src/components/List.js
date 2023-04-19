
import Item from "./Item";

function List() {
   return(
      <>
         <h1>Minha Lista</h1>
         <ul>
            <Item marca="Ferrari" ano_lançamento={1985} />
            <Item marca="Fiat" ano_lançamento={1964} />
            <Item marca="Renault" />
            <Item marca="Chevrolet" ano_lançamento={1999} />
         </ul>
      </>
   )
}

export default List;