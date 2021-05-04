import {
    Container,
    ImageContainer,
    TextContainer,
    Button,
} from "./styledAbout";

const About = () => {
    return (
        <Container>
            <ImageContainer>
                <img src="/images/about.png" alt="about"/>
            </ImageContainer>
            <TextContainer>
                <h1>LEARN MORE ABOUT US</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Perspiciatis, doloremque. Magnam, 
                    illo id dolore quidem possimus facilis culpa consequatur. Eligendi.
                    illo id dolore quidem possimus facilis culpa consequatur. Eligendi.
                    illo id dolore quidem possimus facilis culpa consequatur. Eligendi.
                </p>
                <Button>READ MORE</Button>
            </TextContainer>
        </Container>
    );
};

export default About;
