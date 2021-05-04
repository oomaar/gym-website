import {
    Container,
    Form,
    Input,
    TextArea,
} from "./styledContact";

const Contact = () => {
    return (
        <Container id="contact">
            <h1>CONTACT US</h1>
            <Form>
                <Input type="text" placeholder="Full Name" required />
                <Input type="email" placeholder="Email Address" required />
                <TextArea placeholder="Write here...." name="message"></TextArea>
                <Input type="submit" value="send" />
            </Form>
        </Container>
    );
};

export default Contact;
