import {
    Main,
    Heading,
    Details,
    HeaderBtns,
    HeaderBtn,
} from "./styledHeader";

const Header = () => {
    return (
        <Main id="main">
            <Heading>
                <h2>STEP UP YOUR</h2>
                <h1><span>FITNESS</span> WITH US</h1>
                <Details>
                    Build Your Body And Fitness With Professional Touch
                </Details>
                <HeaderBtns>
                    <HeaderBtn href="#">JOIN US</HeaderBtn>
                </HeaderBtns>
            </Heading>
        </Main>
    );
};

export default Header;
