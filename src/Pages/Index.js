import React, { Component } from "react";

class Index extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      initial: "",
      current: "",
      category: "",
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  IsValid = ({ initial, current, category }) => {
    const errorsMessage = [];

    if (initial) {
      if (initial.length <= 0 || initial > current)
        errorsMessage.push("Invalid initial amount");
    } else {
      errorsMessage.push("Initial number is required");
    }

    if (current) {
      if (current.length <= 0 || current < initial)
        errorsMessage.push("Invalid current amount");
    } else {
      errorsMessage.push("Current number is required");
    }

    if (!category) {
      errorsMessage.push("Category is required");
    }

    return { errorsMessage };
  };

  calculator = (event) => {
    event.preventDefault();

    const target = event.target;
    const { initial, current, category } = target.elements;

    const { errorsMessage } = this.IsValid({
      initial: initial.value,
      current: current.value,
      category: category.value,
    });

    if (errorsMessage.length) {
      alert(errorsMessage);
      return;
    }

    let difference = this.state.current - this.state.initial;
    // console.log(difference)
    let categoryData = this.state.category;
    let result;
    switch (categoryData) {
      case "PT":
        result = difference * 323;
        break;

      case "RE":
        if (difference >= 0 && difference <= 5) {
          result = difference * 340;
        } else if (difference >= 6 && difference <= 20) {
          result = difference * 720;
        } else if (difference >= 21 && difference <= 50) {
          result = difference * 845;
        } else {
          result = difference * 877;
        }
        break;

      case "NR":
        if (difference >= 0 && difference <= 50) {
          result = difference * 877;
        } else {
          result = difference * 895;
        }
        break;

      case "IN":
        result = difference * 736;
        break;
    }
    alert("The amount due is: " + result + " Rwf");
  };

  render() {
    return (
      <div style={{ padding: "12px" }}>
        <h2>Water bill calculator</h2>
        <form onSubmit={this.calculator}>
          <div>
            <span style={{ marginRight: "6px" }}>
              Initial number of m<sup>3</sup>
            </span>
            <input
              type="number"
              name="initial"
              placeholder="0.0 m3"
              onChange={this.handleChange}
            />
            <p>
              The number of m<sup>3</sup> after the last bill payment
            </p>
          </div>

          <div style={{ marginTop: "30px" }}>
            <span style={{ marginRight: "6px" }}>
              Current number of m<sup>3</sup>
            </span>
            <input
              type="number"
              name="current"
              placeholder="0.0 m3"
              onChange={this.handleChange}
            />
            <p>
              The current number of m<sup>3</sup> on the meter
            </p>
          </div>

          <div style={{ marginTop: "30px" }}>
            <span style={{ marginRight: "6px" }}>Category</span>
            <select
              name="category"
              placeholder="0.0 m3"
              onChange={this.handleChange}
            >
              <option value="">Select</option>
              <option value="PT">Public Tap</option>
              <option value="RE">Residential</option>
              <option value="NR">Non Residential</option>
              <option value="IN">Industries</option>
            </select>
            <p>Choose your category here</p>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button>Calculate</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Index;
