import styled from "styled-components/macro";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        color: #fff;
        font-size: 3rem;
    }
`;

export const Form = styled.form`
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;

    @media (max-width: 620px){
        width:90%;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 50px;
    margin: 5px 0px;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #ffffff2d;
    color: #fff;
    border-radius: 5px;

    &[type = "submit"] {
        height: 45px;
        background: linear-gradient(90deg, #FF1414 20%,#f70000);
        color: #fff;
        text-transform: uppercase;
        cursor: pointer;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 150px;
    margin: 5px 0px;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #ffffff2d;
    color: #fff;
    border-radius: 5px;
`;