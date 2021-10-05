import { Alert } from "react-bootstrap";

function AlertForm({ state, heading, text }) {

    if (state) {
        return (
            <div>
                <Alert className="my-5" variant="danger">
                    <Alert.Heading>{heading}</Alert.Heading>
                    <p>
                        {text}
                    </p>
                </Alert>
            </div>
        );
    }
}

export default AlertForm