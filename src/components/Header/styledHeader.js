import styled from "styled-components/macro";

export const Main = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('/images/banner.png');
    position: relative;
    z-index: 0;

    ::before{
        position: absolute;
        content: "";
        background: 
        -moz-radial-gradient(center, 
            ellipse cover, 
            rgba(181, 8, 8, 0.38) 0%, 
            rgba(0, 0, 0, 0.6) 100%);
        background: 
        -webkit-radial-gradient(center, 
            ellipse cover, 
            rgba(181, 8, 8, 0.38) 0%, 
            rgba(0, 0, 0, 0.6) 100%);
        background: radial-gradient(ellipse at center, rgba(181, 8, 8, 0.38) 0%, rgba(0, 0, 0, 0.6) 100%);
        filter: progid:
        DXImageTransform.Microsoft.gradient( startColorstr='#61b50808', 
        endColorstr='#99000000',GradientType=1 );
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    @media(max-width: 1190px){
		background-size: 1150px !important;
	}

    @media (max-width: 970px) {
        height: 650px;
    }
`;

export const Heading = styled.div`
    text-align: center;
	font-family: 'Montserrat';
	width: 100%;
	position: absolute;
    left: 50%;
	top: 55%;
	transform: translate(-50%,-55%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        font-family: 'Lato';
        font-size: 2.7rem;
        margin: 0px;
        letter-spacing: 2px;
        color: #fff;

        @media (max-width: 1190px) {
            font-size: 1.5rem;
        }
    }

    h1{
        font-family: 'Lato';
        font-size: 5rem;
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
        transform: translate(-50%,-50%);
        text-align: center;
    }

    @media (max-width: 970px) {
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
`;

export const Details = styled.p`
    font-size: 23px;
    color: #c5c5c5;

    @media (max-width: 1190px ) {
        font-size: 1rem;
    }
`;

export const HeaderBtns = styled.div`
    display: flex;
    margin-top: 40px;

    @media(max-width: 1100px) {
        margin: 0;
    }
`;

export const HeaderBtn = styled.a`
	width:160px;
	height: 50px;
	display: flex;
	justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    background-color: #FF1414;
    box-shadow: 5px 10px 30px rgba(255, 2, 2, 0.336);
    border-radius: 5px;
	color:#ffffff;
    margin: auto;

    :hover{
        background-color: transparent;
        transition: all ease 0.5s;
        color: #ffffff;
        border: 2px solid #FF1414;
    }

    @media (max-width: 970px) {
        margin-left: 20%;
        margin-top: 20px;
    }
`;
