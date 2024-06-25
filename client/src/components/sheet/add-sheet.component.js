import React, { Component } from "react";
import SheetDataService from "../../services/sheet.service";
// import OriginsList from "../origin/origin-list.component";

export default class AddSheet extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangeLevel = this.onChangeLevel.bind(this);
    this.onChangeOrigin = this.onChangeOrigin.bind(this);
    this.onChangeClasse = this.onChangeClasse.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);

    this.saveSheet = this.saveSheet.bind(this);
    this.newSheet = this.newSheet.bind(this);

    this.state = {
      id: null,
      name: "",
      type: "",
      user: "",
      level: "",
      origin: "",
      classe: "",
      description: "",

      submitted: false,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeOrigin(e) {
    this.setState({
      origin: e.target.value,
    });
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value,
    });
  }

  onChangeUser(e) {
    this.setState({
      user: e.target.value,
    });
  }

  onChangeLevel(e) {
    this.setState({
      level: e.target.value,
    });
  }

  onChangeClasse(e) {
    this.setState({
      classe: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  saveSheet() {
    let data = {
      name: this.state.name,
      type: this.state.type,
      user: this.state.user,
      level: this.state.level,
      origin: this.state.origin,
      classe: this.state.classe,
      description: this.state.description,
    };

    SheetDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          type: response.data.type,
          user: response.data.user,
          level: response.data.level,
          origin: response.data.origin,
          classe: response.data.classe,
          description: response.data.description,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newSheet() {
    this.setState({
      id: "null",
      name: "",
      type: "",
      user: "",
      level: "",
      origin: "",
      classe: "",
      description: "",

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Sheet</h4>
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
            <div>
              <label>
                <strong>User:</strong>
              </label>{" "}
              {this.state.user}
            </div>
            <div>
              <label>
                <strong>Level:</strong>
              </label>{" "}
              {this.state.level}
            </div>
            <div>
              <label>
                <strong>Origin:</strong>
              </label>{" "}
              {this.state.origin}
            </div>
            <div>
              <label>
                <strong>Classe:</strong>
              </label>{" "}
              {this.state.classe}
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

            <div className="form-group">
              <label htmlFor="user">User</label>
              <input
                type="text"
                className="form-control"
                id="user"
                required
                value={this.state.user}
                onChange={this.onChangeUser}
                name="user"
              />
            </div>

            <div className="form-group">
              <label htmlFor="level">Level</label>
              <input
                type="number"
                className="form-control"
                id="level"
                required
                value={this.state.level}
                onChange={this.onChangeLevel}
                name="level"
                min="1"
                max="100"
              />
            </div>

            <div className="form-group">
              <label htmlFor="origin">Origine</label>
              <select
                className="form-select"
                name="origin"
                id="origin"
                required
                onChange={this.onChangeOrigin}
              >
                <option defaultValue="Humain">Humain</option>
                <option value="Elfe">Elfe</option>
                <option value="Nain">Nain</option>
                <option value="Gnome">Gnome</option>
                <option value="Homme-Ours-Porc">Homme-Ours-Porc</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="classe">Classe</label>
              <select
                className="form-select"
                name="classe"
                id="classe"
                required
                onChange={this.onChangeClasse}
              >
                <option defaultValue="Guerrier">Guerrier</option>
                <option value="Mage">Mage</option>
                <option value="Voleur">Voleur</option>
                <option value="Pretre">Pretre</option>
                <option value="Usurier">Usurier</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
                rows={5}
                cols={30}
              />
            </div>

            <button onClick={this.saveSheet} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
