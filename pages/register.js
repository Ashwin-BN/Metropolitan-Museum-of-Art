import { Form, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/router";
import { registerUser } from "@/lib/authenticate";

export default function Login(props) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [warning, setWarning] = useState("");
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        setWarning("");
        try {
            await registerUser(user, password, password2);
            router.push("/login");
        } catch (err) {
            setWarning(err.message);
        }
    }

    return (
        <>
            <div class="alert alert-dismissible alert-light">
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Register</p>
                <p className="text-secondary">Register for an account:</p>
            </div>

            <br />
            {warning && (
                <Card bg="danger" text="white" className="mb-3">
                    <Card.Body>
                        <strong>Error:</strong> {warning}
                    </Card.Body>
                </Card>
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>User:</Form.Label>
                    <Form.Control
                        type="text"
                        id="userName"
                        name="userName"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                    />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control
                        type="password"
                        id="password2"
                        name="password2"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        required
                    />
                </Form.Group>
                <br />
                <Button variant="primary" className="pull-right" type="submit">
                    Register
                </Button>
            </Form>
        </>
    );
}