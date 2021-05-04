import {
    Container,
    Heading,
    Details,
    Buttons,
    Button,
} from "./styledOffer";

const Offer = () => {
    return (
        <Container id="offer">
            <Heading>
                <h1>A BIG <span>OFFER</span> FOR THIS SUMMER</h1>
                <Details>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, qui.</Details>
                <Buttons>
                    <Button href="#">JOIN NOW</Button>
                </Buttons>
            </Heading>
        </Container>
    );
};

export default Offer;
