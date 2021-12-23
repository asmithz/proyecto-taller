import React , { useState } from 'react';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import BotonFormulario from '../../botones/BotonFormulario';
import FormularioAsignaturas from './FormularioAsignaturas';
import Horario from '../../horario/Horario'
import { horario } from '../../horario/Horario'

const validacion = () => {

}


const FormularioTutor = (props) => {

    const [displayHorario, setTipo] = useState(false);
    const updatedisplayHorario = () => {
        setTipo(true);
    }

    const [datos_tutor, setDatos] = useState([])
    const obtenerDatos = (values) => {
        updatedisplayHorario();
        setDatos(datos_tutor.push(values))
        alert(JSON.stringify(datos_tutor, null, 4));
    }

    return(
        <div>
            {displayHorario === false &&
                <Formik
                    initialValues={{
                        tipo: props.tipo, nombre: '', 
                        apellido: '', 
                        rut: '', 
                        edad: '', 
                        email: '',
                        asignaturas: [''],
                    }}
                    onSubmit={values => obtenerDatos(values)}
                >
                    <Form>
                        <div className="form-tutor">
                            <div>
                                <h4>Rellene el formulario</h4>
                            </div>
                            <div className="form-floating">
                                <Field placeholder="Nombre" className="form-control" id="floatingNombre" name="nombre" type="text"/>
                                <label for="floatingNombre">Nombre</label>
                                <ErrorMessage name="nombre"/>
                            </div>
                            <div className="form-floating">
                                <Field placeholder="Apellido" className="form-control" id="floatingApellido" name="apellido" type="text"/>
                                <label for="floatingApellido">Apellido</label>
                                <ErrorMessage name="apellido"/>
                            </div>
                            <div className="form-floating">
                                <Field placeholder="Rut" className="form-control" id="floatingRut" name="rut" type="text"/>
                                <label for="floatingRut">Rut</label>
                                <ErrorMessage name="rut"/>
                            </div>
                            <div className="form-floating">
                                <Field placeholder="Edad" className="form-control" id="floatingEdad" name="edad" type="text"/>
                                <label for="floatingEdad">Edad</label>
                                <ErrorMessage name="edad"/>
                            </div>
                            <div className="form-floating">
                                <Field placeholder="Email" className="form-control" id="floatingEmail" name="email" type="email"/>
                                <label for="floatingEmail">Email</label>
                                <ErrorMessage name="email"/>
                            </div>
                            <div>
                                <FormularioAsignaturas name="asignaturas" label="Agregue las asignaturas que realiza" />
                            </div>
                            <div>
                                <BotonFormulario className="boton-siguiente" name="boton" value="Siguiente"/>
                            </div>
                        </div>
                    </Form>
                </Formik> 
                }
                {displayHorario === true && 
                    <Horario name="horario" accion="registrar" datos={datos_tutor}/>
                }

       </div>
    );
}

export default FormularioTutor;