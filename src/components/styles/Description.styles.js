import styled from "styled-components";
import Description from '../Description'

export const StyledDescription = styled(Description)`
    display: flex;
    flex-direction: column;
    width: 60vw;
    margin-left: 40px;

    & img {
        height: 4.71vw;
        width: 32vw;
    }

    & h2 {
        margin: 40px 0px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        color: rgba(53, 50, 56, 1);
    }

    & p {
        margin: 10px 0px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #353238;
    }
`