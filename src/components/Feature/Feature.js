import { FeatureBox } from "..";
import featureData from "../../data/featureData.json";
import {
    Container,
    SubContainer,
} from "./styledFeature";

const Feature = () => {
    return (
        <Container id="features">
            <h1>FEATURES</h1>
            <SubContainer className="a-container">
                {featureData.map(data => (
                    <FeatureBox
                        key={data.id}
                        image={data.image}
                        title={data.title}
                        text={data.text}
                    />
                ))}
            </SubContainer>
        </Container>
    );
};

export default Feature;
