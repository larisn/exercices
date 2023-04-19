
import PropTypes from 'prop-types';

function Item({ marca, ano_lançamento }) {
   return (
      <>
         <li>{marca} - {ano_lançamento}</li>
         <p>Teste</p>
      </>
   )
}

Item.propTypes = { 
   marca: PropTypes.string.isRequired, // diz que a prop é do tipo string
   ano_lançamento: PropTypes.number,
}

Item.defaultProps = {
   marca: 'Faltou a marca',
   ano_lançamento: 0
}

export default Item;