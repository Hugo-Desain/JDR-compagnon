import React, { Component } from "react";
import OriginDataService from "../../services/origin.service";

export default class AddOrigin extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeType = this.onChangeType.bind(this);

    this.saveOrigin = this.saveOrigin.bind(this);
    this.newOrigin = this.newOrigin.bind(this);

    this.state = {
      id: null,
      name: "",
      type: "",
      submitted: false,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value,
    });
  }

  saveOrigin() {
    var data = {
      name: this.state.name,
      type: this.state.type,
    };

    OriginDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          type: response.data.type,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newOrigin() {
    this.setState({
      id: "null",
      name: "",
      type: "",

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Origin</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {this.state.name}
            </div>
            <div>
              <label>
                <strong>Type:</strong>
              </label>{" "}
              {this.state.type}
            </div>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name ">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">Type</label>
              <input
                type="text"
                className="form-control"
                id="type"
                required
                value={this.state.type}
                onChange={this.onChangeType}
                name="type"
              />
            </div>

            <button onClick={this.saveOrigin} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
