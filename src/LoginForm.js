import React, {Component} from 'react';
import {Button, Checkbox, Col, ControlLabel, Form, FormControl, FormGroup, Grid, HelpBlock, Row} from "react-bootstrap";

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:  props.email || '',
            password:  props.password || '',

            touched: {
                email: false,
                password: false,
            },
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };

    handleSubmit(event) {
        if (!this.canBeSubmitted()) {
            event.preventDefault();
            return;
        }
        const { email, password } = this.state;
        console.log(`Logged in with email: ${email} password: ${password}`);
    }

    canBeSubmitted() {
        const errors = LoginForm.validate(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }

    static validate(email, password) {
        // true means invalid, so our conditions got reversed
        return {
            email: email.length === 0,
            password: password.length === 0,
        };
    }

    handleBlur = (field) => (event) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    };

    render() {

        const errors = LoginForm.validate(this.state.email, this.state.password);
        const submitDisabled = Object.keys(errors).some(x => errors[x]);

        const shouldMarkError = (field) => {
            const hasError = errors[field];
            const shouldShow = this.state.touched[field];
            return hasError ? shouldShow : false;
        };

        return <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8} mdOffset={2}>
                            <Form horizontal>
                                <FormGroup controlId="formHorizontalEmail" validationState={shouldMarkError('email') ? "error" : null}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Email
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl
                                            value={this.state.email}
                                            type="email"
                                            placeholder="Email"
                                            onBlur={this.handleBlur('email')}
                                            onChange={this.handleEmailChange} />
                                        <FormControl.Feedback />
                                        <HelpBlock>Help text with validation state.</HelpBlock>
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword" validationState={shouldMarkError('password') ? "error" : null}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Password
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl
                                            value={this.state.password}
                                            type="text"
                                            placeholder="Password"
                                            onBlur={this.handleBlur('password')}
                                            onChange={this.handlePasswordChange} />
                                        <FormControl.Feedback />
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col smOffset={2} sm={10}>
                                        <Checkbox>Remember me</Checkbox>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col smOffset={2} sm={10}>
                                        <Button disabled={submitDisabled} onClick={this.handleSubmit}>
                                            Sign in
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Grid>
    }

}

export default LoginForm;