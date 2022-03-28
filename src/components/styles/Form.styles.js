import styled from "styled-components";
import Form from '../Form'

export const StyledForm = styled(Form)`

    width: 30vw;
    margin: 30px;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0px 5px 20px 0px rgba(53, 50, 56, 0.14);

    & .form-container {
        display: flex;
        flex-direction: column;
    }

    & .form-container-top {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
    }

    
    & .form-container-top .form-input{
        width: 47%;
    }
    
    & .form-input{
        margin: 20px 0px;
    }
    
    @media screen and (max-width: 1500px) {

        & .form-container-top {
            flex-direction: column;
        }

        & .form-container-top .form-input{
            width: 100%;
        }
    }

    @media screen and (max-width: 980px) {
        width: 50vw;

        & .form-container-top {
            flex-direction: row;
            width: 100%;
        }

    
        & .form-container-top .form-input{
            width: 47%;
        }
    }

    @media screen and (max-width: 640px) {

        & .form-container-top {
            flex-direction: column;
        }

        & .form-container-top .form-input{
            width: 100%;
        }
    }

    & button {
        width: 100%;
        margin-top: 10px;
    }

`