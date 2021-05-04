import {
    Container,
    ImageContainer,
    TextContainer,
} from "./styledFeatureBox";

const FeatureBox = ({ title, image, text }) => {
    return (
        <Container>
            <ImageContainer>
                <img src={image} alt="sponser" />
            </ImageContainer>
            <TextContainer>
                <h2>{title}</h2>
                <p>{text}</p>
            </TextContainer>
        </Container>
    );
};

export default FeatureBox;
