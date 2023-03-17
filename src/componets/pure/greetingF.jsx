import React ,{useState} from 'react'
import PropTypes from 'prop-types'

export const GreetingF = (props) => {

/*
const [var, metodo] = valor inicial(29);
*/
const [age, setage] = useState(29);

const birthday = () =>{
    setage(age +1 );
}

  return (
    <div>
    hola  tu nombre es { props.name } desde una funcion y tu edad es { age }
        <div>
          <button onClick={birthday}>cumplir +1</button>
        </div>
 
    </div>
  )
}




GreetingF.propTypes = {
    name: PropTypes.string,
};