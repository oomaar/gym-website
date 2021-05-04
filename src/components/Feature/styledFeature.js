import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    height: 120vh;
    box-sizing: border-box;
    font-family: 'Lato';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 40px ;
    background-color: #000;

    h1 {
        color: #fff;
        font-size: 3rem;
    }

    @media (max-width: 1190px) {
		height: auto;
    }

    @media (max-width: 970px) {
        margin-bottom: 100px;
    }
`;

export const SubContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;

    @media (max-width: 1190px) {
		flex-wrap: wrap;
    }
`;