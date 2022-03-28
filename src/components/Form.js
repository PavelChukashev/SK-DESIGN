import { React, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";
import SelectCity from "./SelectCity";
import SelectSource from "./SelectSource";
import cities from "../features/data/cities.json";
import sources from "../features/data/sources.json";
import { sendRequest } from "../redux/request";
import { connect } from "react-redux";

const Form = ({ sendRequest, isRequestSend }) => {
  const [isShow, setShow] = useState(true);
  const showFields = () => {
    setShow(!isShow);
  };

  const validationsSchema = yup.object().shape({
    name: yup
      .string()
      .typeError("Должно быть строкой")
      .min(2)
      .required("Обязательное поле"),
    phone: yup
      .number()
      .typeError("Должно быть числом")
      .required("Обязательное поле"),
    mail: yup.string().email().required("Обязательное поле"),
    profile: yup
      .string()
      .typeError("Должно быть строкой")
      .min(3)
      .required("Обязательное поле"),
    city: yup.string().required("Обязательное поле"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          mail: "",
          profile: "",
          city: "",
          sources: "",
        }}
        validateOnBlur
        validationSchema={validationsSchema}
        onSubmit={(values) => {
          sendRequest(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => {
          return (
            <div>
              <TextField
                id="outlined-basic"
                name={"name"}
                label="Ваше имя *"
                variant="outlined"
                placeholder="Иван"
                error={errors.name}
                helperText={errors.name}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-basic"
                name="phone"
                label="Номер телефона *"
                variant="outlined"
                error={errors.phone}
                helperText={errors.phone}
                placeholder="+7 (000) 000-00-00"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-basic"
                name="mail"
                label="E-mail *"
                variant="outlined"
                placeholder="example@skdesign.ru"
                value={values.mail}
                onChange={handleChange}
                onBlur={handleBlur}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-basic"
                name="profile"
                label="Ссылка на профиль *"
                variant="outlined"
                placeholder="instagram.com/skde…"
                value={values.profile}
                onChange={handleChange}
                onBlur={handleBlur}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <SelectCity
                name="city"
                title="Выберите город *"
                value={values.city}
                values={cities}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                id="outlined-basic"
                name="organization"
                label="Название организации/студии"
                variant="outlined"
                placeholder="SK Design"
                onBlur={handleBlur}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <div onClick={showFields}>{isShow ? "Скрыть" : "Показать"} дополнительные поля</div>
              {isShow && (
                <>
                  <TextField
                    id="outlined-basic"
                    name="name"
                    label="Получатель"
                    variant="outlined"
                    placeholder="ФИО"
                  />
                  <SelectCity
                    value={values.sources}
                    name="sources"
                    title="Откуда узнали про нас?"
                    values={sources}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </>
              )}
              <Button
                disabled={!isValid || !dirty}
                variant="contained"
                onClick={handleSubmit}
                type={"submit"}
              >
                {!isRequestSend ? "Отправить" : "Загрузка"}
              </Button>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isRequestSend: state.request.requestSend,
});

const mapDispatchToProps = {
  sendRequest: sendRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
