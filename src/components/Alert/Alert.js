import { Alert } from "react-bootstrap";

function AlertForm({ state }) {

    if (state) {
        return (
            <div>
                <Alert className="my-5" variant="danger">
                    <Alert.Heading>Chequeá la info</Alert.Heading>
                    <p>
                        Al parecer, los correos electrónicos introducidos no coinciden
                    </p>
                </Alert>
            </div>
        );
    }
}

export default AlertForm