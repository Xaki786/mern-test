/** @format */

import React from "react";

class CreditCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      street: "",
      houseNumber: "",
      addressLine2: "",
      zipcode: "",
      city: "",
      region: "",
      country: "",
      creditCardNumber: "",
      expirationDate: "",
      cvc: "",
      filledPercentage: 0,
      missingFields: [],
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.checkFields, 250);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  checkFields = () => {
    const fields = [
      "firstName",
      "lastName",
      "street",
      "houseNumber",
      "addressLine2",
      "zipcode",
      "city",
      "region",
      "country",
      "creditCardNumber",
      "expirationDate",
      "cvc",
    ];
    let filledFields = fields.filter((field) => this.state[field]);
    let missingFields = fields.filter((field) => !this.state[field]);

    this.setState({
      filledPercentage: (filledFields.length / fields.length) * 100,
      missingFields: missingFields,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(`Error: ${data.error}`);
        } else {
          console.log(data);
        }
      })
      .catch((error) => alert(`Error: ${error.message}`));
  };

  render() {
    return (
      <div>
        <div>
          <p>{`Form filled: ${this.state.filledPercentage.toFixed(2)}%`}</p>
          {this.state.missingFields.length > 0 && (
            <p>
              Please fill out the following fields:{" "}
              {this.state.missingFields.join(", ")}
            </p>
          )}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <input
            type="text"
            name="street"
            value={this.state.street}
            onChange={this.handleChange}
            placeholder="Street"
          />
          <input
            type="text"
            name="houseNumber"
            value={this.state.houseNumber}
            onChange={this.handleChange}
            placeholder="House Number"
          />
          <input
            type="text"
            name="addressLine2"
            value={this.state.addressLine2}
            onChange={this.handleChange}
            placeholder="Address Line 2"
          />
          <input
            type="text"
            name="zipcode"
            value={this.state.zipcode}
            onChange={this.handleChange}
            placeholder="Zip Code"
          />
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
            placeholder="City"
          />
          <input
            type="text"
            name="region"
            value={this.state.region}
            onChange={this.handleChange}
            placeholder="Region"
          />
          <input
            type="text"
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
            placeholder="Country"
          />
          <input
            type="text"
            name="creditCardNumber"
            value={this.state.creditCardNumber}
            onChange={this.handleChange}
            placeholder="Credit Card Number"
          />
          <input
            type="text"
            name="expirationDate"
            value={this.state.expirationDate}
            onChange={this.handleChange}
            placeholder="Expiration Date (MM/YY)"
          />
          <input
            type="text"
            name="cvc"
            value={this.state.cvc}
            onChange={this.handleChange}
            placeholder="CVC"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreditCardForm;
