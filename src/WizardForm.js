import React, {Component} from 'react';

class WizardForm extends Component {

    constructor() {
        super();
        this.state = {
            step: 1,
            finalStep: 3,

            name: '',
            email: '',

            shipping_line: '',
            shipping_city: '',
            shipping_zip: '',

            billing_line: '',
            billing_city: '',
            billing_zip: '',
        };
        this.goToNext = this.goToNext.bind(this);
        this.goToPrevious = this.goToPrevious.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    goToNext() {
        const { step, finalStep } = this.state;
        if (step !== finalStep) {
            this.setState({ step: step + 1 });
        } else {
            alert('Submitting');

            const values = {
                name: this.state.name,
                email: this.state.email,
                shipping: {
                    line: this.state.shipping_line,
                    city: this.state.shipping_city,
                    zip: this.state.shipping_zip,
                },
                billing: {
                    line: this.state.billing_line,
                    city: this.state.billing_city,
                    zip: this.state.billing_zip,
                },
            };
            // TODO submit `values` to the server here.
        }
    };

    goToPrevious() {
        const { step } = this.state;
        if (step !== 1) {
            this.setState({ step: step - 1 });
        }
    };

    handleChange(field) {
        return (event) => this.setState({ [field]: event.target.value });
    }

    render() {
        switch (this.state.step) {
            case 1:
                return <StepOne
                    key="stepOne"
                    name={this.state.name}
                    email={this.state.email}
                    onChangeName={this.handleChange('name')}
                    onChangeEmail={this.handleChange('email')}
                    onPrevious={this.goToPrevious}
                    onSubmit={this.goToNext} />;
            case 2:
                return <StepTwo
                    key="stepTwo"
                    shippingLine={this.state.shipping_line}
                    shippingCity={this.state.shipping_city}
                    shippingZip={this.state.shipping_zip}
                    onChangeShippingLine={this.handleChange('shipping_line')}
                    onChangeShippingCity={this.handleChange('shipping_city')}
                    onChangeShippingZip={this.handleChange('shipping_zip')}
                    onPrevious={this.goToPrevious}
                    onSubmit={this.goToNext} />;
            case 3:
                return <StepThree
                    key="stepThree"
                    billingLine={this.state.billing_line}
                    billingCity={this.state.billing_city}
                    billingZip={this.state.billing_zip}
                    onChangeBillingLine={this.handleChange('billing_line')}
                    onChangeBillingCity={this.handleChange('billing_city')}
                    onChangeBillingZip={this.handleChange('billing_zip')}
                    onPrevious={this.goToPrevious}
                    onSubmit={this.goToNext} />;
            default:
                return <StepOne
                    key="stepOne"
                    name={this.state.name}
                    email={this.state.email}
                    onChangeName={this.handleChange('name')}
                    onChangeEmail={this.handleChange('email')}
                    onPrevious={this.goToPrevious}
                    onSubmit={this.goToNext} />;
        }
    }
}

export default WizardForm;

class StepOne extends Component {

    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Personal info</h3>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={this.props.name}
                    onChange={this.props.onChangeName}
                />
                <input
                    type="text"
                    placeholder="Enter email"
                    value={this.props.email}
                    onChange={this.props.onChangeEmail}
                />

                <button type="submit">Next</button>
            </form>
        );
    }
}

class StepTwo extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit();
    }

    handlePrevious(event) {
        event.preventDefault();
        this.props.onPrevious();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Shipping</h3>
                <input
                    type="text"
                    placeholder="Address line"
                    value={this.props.shippingLine}
                    onChange={this.props.onChangeShippingLine}
                />
                <input
                    type="text"
                    placeholder="City"
                    value={this.props.shippingCity}
                    onChange={this.props.onChangeShippingCity}
                />
                <input
                    type="text"
                    placeholder="ZIP"
                    value={this.props.shippingZip}
                    onChange={this.props.onChangeShippingZip}
                />

                <button type="button" onClick={this.handlePrevious}>Previous</button>
                <button type="submit">Next</button>
            </form>
        );
    }
}

class StepThree extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit();
    }

    handlePrevious(event) {
        event.preventDefault();
        this.props.onPrevious();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Billing</h3>
                <input
                    type="text"
                    placeholder="Address line"
                    value={this.props.billingLine}
                    onChange={this.props.onChangeBillingLine}
                />
                <input
                    type="text"
                    placeholder="City"
                    value={this.props.billingCity}
                    onChange={this.props.onChangeBillingCity}
                />
                <input
                    type="text"
                    placeholder="ZIP"
                    value={this.props.billingZip}
                    onChange={this.props.onChangeBillingZip}
                />

                <button type="button" onClick={this.handlePrevious}>Previous</button>
                <button type="submit">Checkout</button>
            </form>
        );
    }
}