import styled from "styled-components/macro";

export const Container = styled.div`
    margin-top: 100px;
	width: 100%;
	height: 120vh;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 50px 5% 0px 5%;
	position: relative;

    @media (max-width: 970px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const ImageContainer = styled.div`
    width: 50%;

    img {
        width: 600px;

        @media(max-width: 1190px) {
            width: 400px;
        }

        @media(max-width: 400px) {
            width: 200px;
        }
    }

    @media(max-width: 970px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextContainer = styled.div`
    width: 45%;
    color: #fff;
    list-style: circle;

    h1 {
        font-size: 3rem;
        color: #FF1414;
        font-weight: 500;
        margin: 0px;
        padding: 0px;

        @media (max-width: 970px) {
            font-size: 4rem;
        }

        @media (max-width: 500px) {
            font-size: 2rem;
        }
    }

    p {
        width: 80%;
        font-size: 1.2rem;
        color:#cecece;

        @media (max-width: 970px) {
            width: 100%;
        }
    }

    @media(max-width: 970px){
        width: 90%;
	}
`;

export const Button = styled.button`
    margin-top: 20px;
	width: 140px;
	height: 45px;
	border-radius: 10px;
	border: none;
    outline: none;
    color: #fff;
	background-color:#FF1414;
    cursor: pointer;

    :hover {
        box-shadow: 5px 10px 30px rgba(255, 2, 2, 0.336);
        background-color: rgb(0, 0, 0);
        transition: all ease 0.3s;
        color: #fff;
    }
`;