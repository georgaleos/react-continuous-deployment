import React, {Component} from 'react';
import {Form, FormGroup, HelpBlock, FormControl} from "react-bootstrap";

class ProductForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            active: true,
            type: '',

            everFocusedName: false,
            everFocusedDescription: false,
            inFocus: '',
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleActiveChange = this.handleActiveChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static validate(name, description) {
        // true means invalid, so our conditions got reversed
        return {
            name: name.length === 0,
            description: description.length === 0,
        };
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handleDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    };

    handleActiveChange = (event) => {
        this.setState({ active: event.target.checked });
    };

    handleTypeChange = (event) => {
        this.setState({ type: event.target.value });
    };

    handleSubmit(event) {
        if (!this.canBeSubmitted()) {
            event.preventDefault();
            return;
        }
        const { email, password } = this.state;
        console.log(`Signed up with email: ${email} password: ${password}`);
    }

    canBeSubmitted() {
        const errors = ProductForm.validate(this.state.name, this.state.description);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }

    render() {

        const errors = ProductForm.validate(this.state.name, this.state.description);
        const submitDisabled = Object.keys(errors).some(x => errors[x]);

        return (
            <div>
                <Form horizontal>
                    <FormGroup
                        controlId="formBasicText"
                        // validationState={this.getValidationState()}
                    >

                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            className={errors.name ? "error" : ""}
                        />
                        <label>Name</label>
                        <textarea
                            value={this.state.description}
                            onChange={this.handleDescriptionChange}
                            className={errors.description ? "error" : ""}
                        />
                        <label>Description</label>
                        <input
                            type="checkbox"
                            value={this.state.active}
                            onChange={this.handleActiveChange}
                        />
                        <label>Active</label>
                        <input
                            type="radio"
                            value="TYPE 1"
                            checked={this.state.type === 'TYPE 1'}
                            onChange={this.handleTypeChange}
                        />
                        <label>Type 1</label>
                        <input
                            type="radio"
                            value="TYPE 2"
                            checked={this.state.type === 'TYPE 2'}
                            onChange={this.handleTypeChange}
                        />
                        <label>Type 2</label>
                        <button disabled={submitDisabled}>Sign up</button>

                        <FormControl.Feedback />
                        <HelpBlock>Validation is based on string length.</HelpBlock>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default ProductForm;