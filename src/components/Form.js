import { React, useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { TextField, Button } from '@mui/material'
import SelectCity from './SelectCity'
import SelectSource from './SelectSource'

export const Form = () => {
    const [isShow, setShow] = useState(true)

    const showFields = () => {
        setShow(!isShow)
    }

    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        phone: yup.number().typeError('Должно быть строкой').required('Обязательное поле'),
        mail: yup.string().email().required('Обязательное поле'),
        profile: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    })

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
                validationSchema={validationsSchema}
                onSubmit={ (values) => {console.log(values)} }
            >
                { ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div>
                        <TextField
                            id="outlined-basic" 
                            name={'name'} 
                            label="Ваше имя *" 
                            variant="outlined" 
                            placeholder='Иван' 
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <TextField 
                            id="outlined-basic" 
                            name='phone' 
                            label="Номер телефона *" 
                            variant="outlined" 
                            placeholder='+7 (000) 000-00-00'
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <TextField 
                            id="outlined-basic" 
                            name='mail' 
                            label="E-mail *" 
                            variant="outlined" 
                            placeholder='example@skdesign.ru'
                            value={values.mail}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <TextField 
                            id="outlined-basic" 
                            name='profile' 
                            label="Ссылка на профиль *" 
                            variant="outlined" 
                            placeholder='instagram.com/skde…'
                            value={values.profile}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <SelectCity />
                        <div onClick={showFields}>Скрыть дополнительные поля</div>
                        {isShow && 
                            <>
                                <TextField 
                                    id="outlined-basic" 
                                    name='name' 
                                    label="Получатель" 
                                    variant="outlined" 
                                    placeholder='ФИО' 
                                />
                                <SelectSource />
                            </>
                        }
                        <Button
                            disabled={!isValid && !dirty}
                            variant="contained"
                            onSubmit={handleSubmit}
                            type={'submit'}
                        >Отправить</Button>
                    </div>
                ) }
            </Formik>
        </div>
  )
}