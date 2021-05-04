import styled from "styled-components/macro";

export const Container = styled.div`
    background-color: #000;
    width: 250px;
    height: 400px;
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.4s ease-in-out;
    position: relative;

    :hover {
        border: 1px solid #FF1414;
        box-shadow: 2px 2px 12px rgba(184, 0, 0, 0.445);
        cursor: pointer;
    }

    @media (max-width: 1190px) {
		flex-grow: 1;
    }

    @media (max-width: 400px) {
        width: 100%;
        height:400px;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 60%;

    img {
        padding: 15px;
        margin-top: 40px;
        width: 100%;
        height: 50%;

        @media (max-width: 1190px) {
            object-fit: contain;
        }
    }
`;

export const TextContainer = styled.div`
    width: 100%;
    height: 40%;
    background-color:#000000;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;

    h2 {
        color: #fff;
    }

    p {
        margin: 0px;
        color: #ffffffa6;
        font-size: 1.1rem;
        font-family: 'Lato';
        display: block;
        display: -webkit-box;
        max-width: 80%;
        margin-top: 5px;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 10px;

        :hover{
            color: #fff;
        }
    }

    a {
        margin-top:15px ;
    }
`;