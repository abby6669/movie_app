import { Formik, Form, Field, ErrorMessage } from 'formik'
import './formStyle.css'

const validate = (values) => {
 const errors={}
if (!values.Email){
 errors.Email = 'Requerido'
} else if (!/\S+@\S+\.\S+/.test(values.Email)) {
 errors.Email = 'Email Invalido'
}
if (!values.Password){
 errors.Password = 'Requerido'
} else if (!/^(?=.*?[A-Z]).{8,}$/.test(values.Password)) {
 errors.Password = 'Debe tener más de 7 caracteres y una letra mayúscula'
}
if (!values.ConfirmPassword){
 errors.ConfirmPassword = 'Requerido'
} else if (values.ConfirmPassword != values.Password) {
 errors.ConfirmPassword = 'Debe ser igual al password, rey'
}
return errors
}

function App() {
  return (

    <Formik
        initialValues={{  Email: '', Password: '',  ConfirmPassword: '',}}
        validate={validate}
        onSubmit={values => console.log(values)}
      >
      <div className='Title'>Register
       <Form className='formLabel'>
          <label className='Label'></label>
          <br />
          <Field name='Email' type='Email' className='input' placeholder='Correo' />
          <ErrorMessage name='Email' className='inputError'/>
          <br/>
          <label className='Label'></label>
          <Field name='Password' type='Password' className='input' placeholder='Contraseña'/>
          <ErrorMessage name='Password' className='inputError' />
          <br/>
          <label className='Label'></label>
          <Field name='ConfirmPassword' type='Password' className='input' placeholder='Confirmar Contraseña'/>
          <ErrorMessage name='ConfirmPassword' className='inputError'/>
          <br/>
          <button className='button' type='submit' >Register</button>
          <br />
        </Form>
      </div>
  </Formik>
);
}

export default App;
//git checkout -b components/carousel

// //instale yarn add react-icons