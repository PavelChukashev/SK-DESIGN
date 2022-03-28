import React from 'react'
import { Formik } from 'formik'
import { TextField, Button } from '@mui/material'

export const Form = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                    mail: '',
                    profile: '',
                }}
                validateOnBlur
                onSubmit={ (values) => {console.log(values)} }
            >
                { ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div>
                        <TextField id="outlined-basic" label="Ваше имя *" variant="outlined" placeholder='Иван' />
                        <TextField id="outlined-basic" label="Номер телефона *" variant="outlined" placeholder='Иван' />
                        <TextField id="outlined-basic" label="E-mail *" variant="outlined" placeholder='Иван' />
                        <TextField id="outlined-basic" label="Ссылка на профиль *" variant="outlined" placeholder='Иван' />
                        <Button variant="contained">Отправить</Button>
                    </div>
                ) }
            </Formik>
        </div>
  )
}