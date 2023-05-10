import React,{Fragment,useState} from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

  //Crear State de Citas

  const [cita, actualizarCita] = useState({
    mascota:'',
    propietario:'',
    fecha:'',
    hora:'',
    sintomas:''

  });
  const [error,actualizarError] = useState(false)

  // Funcion 



  //  Funcion que se ejecuta cada que el usuario escribe en un input

  const actualizarState = e => {

    actualizarCita({
      ...cita,
      [e.target.name] : e.target.value
    })
  }

  //Extraer los valores

  const {mascota,propietario,fecha,hora,sintomas} = cita;

  // Cuando el usuario presiona agregar cita

  const submitCita = e => {
   e.preventDefault();

   // Validar 

   if(mascota.trim() === ''|| propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
    actualizarError(true);
    return;
   }

   // Eliminar el mensaje previo
   actualizarError(false);

   // Asignar un ID
   cita.id = uuid();
   console.log(cita);

   // Crear la cita
   crearCita(cita);

   actualizarCita({
       mascota: '',
       propietario: '',
       fecha: '',
       hora: '',
       sintomas: ''
   })
}

    return (
      <Fragment>
        <h2>Crear Cita</h2>

        {error ? <p className="alerta-error-caja">Todos los campos son obligatorios</p>   :null}

        <form
        onSubmit={submitCita}
        >
          <label className="login">Nombre Mascota</label>
          <input
            type="text"
            name="mascota"
            className="style"
            placeholder="Nombre Mascota"
            onChange={actualizarState}
            value={mascota}
          />

          <label className="login">Nombre Dueño</label>
          <input
             type="text"
             name="propietario"
             className="style"
             placeholder="Nombre Dueño de la mascota"
             onChange={actualizarState}
             value={propietario}
          />
          <label className="login">Fecha</label>
          <input
             type="date"
             name="fecha"
             className="style"
             placeholder="Nombre Dueño de la mascota"
             onChange={actualizarState}
             value={fecha}
          />
          <label className="login">Hora</label>
          <input
               type="time"
               name="hora"
               className="style"
               onChange={actualizarState}
               value={hora}
          />
          <label className="login">Sintomas</label>
          <textarea     
               className="style"
               name="sintomas"
               onChange={actualizarState}
               value={sintomas}
               >
        
          </textarea>
          
          <button
          type="submit"  className="top-danger"
          >Agregar Cita</button>
        </form>
       
      </Fragment>

    );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Formulario;