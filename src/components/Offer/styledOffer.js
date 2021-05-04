import styled from "styled-components/macro";

export const Container = styled.div`
    padding-top: 30px;
    width: 100%;
    height: 768px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(/images/offer.png);
    text-align: center;
`;

export const Heading = styled.div`
    text-align: center;
	font-family: 'Lato';
	width: 600px;
	position: absolute;
    left: 50%;
	top: 55%;
	transform: translate(-50%,-55%);

    h1 {
        font-family: 'Lato';
        font-size: 4rem;
        margin: 0px;
        letter-spacing: 2px;
        color: #fff;

        @media (max-width: 1190px) {
            font-size: 3rem;
        }
    }

    span {
        color: #FF1414; 
    }

    @media (max-width: 1190px) {
        left: 50%;
		top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    @media (max-width: 970px) {
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

    @media(max-width: 600px) {
		width: 90%;
    }
`;

export const Details = styled.p`
    color: #c5c5c5;
    font-size: 1.2rem;

    @media (max-width: 1190px) {
        font-size: 1rem;
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;

export const Button = styled.a`
	width: 160px;
	height: 50px;
	display: flex;
	justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    background-color: #FF1414;
    box-shadow: 5px 10px 30px rgba(255, 2, 2, 0.336);
    border-radius: 5px;
	color: #fff;

    :hover {
        background-color: transparent;
        transition: all ease 0.5s;
        color: #ffffff;
        border: 2px solid #FF1414;
    }

    @media (max-width: 970px) {
        margin-top: 20px;
    }
`;