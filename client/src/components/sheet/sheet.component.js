import React, { Component } from "react";
import SheetDataService from "../../services/sheet.service";
import { withRouter } from "../../common/with-router";

class Sheet extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangeLevel = this.onChangeLevel.bind(this);
    this.onChangeOrigin = this.onChangeOrigin.bind(this);
    this.onChangeClasse = this.onChangeClasse.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);

    this.updateName = this.updateName.bind(this);
    this.updateType = this.updateType.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.updateLevel = this.updateLevel.bind(this);
    this.updateOrigin = this.updateOrigin.bind(this);
    this.updateClasse = this.updateClasse.bind(this);
    this.updateDescription = this.updateDescription.bind(this);

    this.getSheet = this.getSheet.bind(this);
    this.updateSheet = this.updateSheet.bind(this);
    this.deleteSheet = this.deleteSheet.bind(this);

    this.state = {
      // disabled: true,
      currentSheet: {
        id: "",
        name: "",
        type: "",
        user: "",
        level: 1,
        origin: "",
        classe: "",
        description: "",
      },
      name: "",
      message: "",
    };
  }

  componentDidMount() {
    this.getSheet(this.props.router.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        name: name,
      };
    });
  }

  onChangeType(e) {
    const type = e.target.value;

    this.setState(function (prevState) {
      return {
        type: type,
      };
    });
  }

  onChangeUser(e) {
    const user = e.target.value;

    this.setState(function (prevState) {
      return {
        user: user,
      };
    });
  }

  onChangeLevel(e) {
    const level = e.target.value;

    this.setState(function (prevState) {
      return {
        level: level,
      };
    });
  }

  onChangeOrigin(e) {
    const origin = e.target.value;

    this.setState(function (prevState) {
      return {
        origin: origin,
      };
    });
  }

  onChangeClasse(e) {
    const classe = e.target.value;

    this.setState(function (prevState) {
      return {
        classe: classe,
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(function (prevState) {
      return {
        description: description,
      };
    });
  }

  getSheet(id) {
    SheetDataService.get(id)
      .then((response) => {
        this.setState({
          currentSheet: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateSheet() {
    SheetDataService.update(this.state.currentSheet.id, this.state.currentSheet)

      .then((response) => {
        console.log(response.data);
        this.setState({
          message: "The Sheet was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateName() {
    console.log(this.state.name);
    this.setState(
      function (prevState) {
        return {
          currentSheet: {
            ...prevState.currentSheet,
            name: this.state.name,
          },
        };
      },
      () => {
        console.log(this.state.currentSheet);
        this.updateSheet();
      }
    );
  }

  updateType() {
    console.log(this.state.type);
    this.setState(
      function (prevState) {
        return {
          currentSheet: {
            ...prevState.currentSheet,
            type: this.state.type,
          },
        };
      },
      () => {
        console.log(this.state.currentSheet);
        this.updateSheet();
      }
    );
  }

  updateUser() {
    console.log(this.state.user);
    this.setState(
      function (prevState) {
        return {
          currentSheet: {
            ...prevState.currentSheet,
            user: this.state.user,
          },
        };
      },
      () => {
        console.log(this.state.currentSheet);
        this.updateSheet();
      }
    );
  }

  updateLevel() {
    console.log(this.state.level);
    this.setState(
      function (prevState) {
        return {
          currentSheet: {
            ...prevState.currentSheet,
            level: this.state.level,
          },
        };
      },
      () => {
        console.log(this.state.currentSheet);
        this.updateSheet();
      }
    );
  }

  updateOrigin() {
    console.log(this.state.origin);
    this.setState(
      function (prevState) {
        return {
          currentSheet: {
            ...prevState.currentSheet,
            origin: this.state.origin,
          },
        };
      },
      () => {
        console.log(this.state.currentSheet);
        this.updateSheet();
      }
    );
  }

  updateClasse() {
    console.log(this.state.classe);
    this.setState(
      function (prevState) {
        return {
          currentSheet: {
            ...prevState.currentSheet,
            classe: this.state.classe,
          },
        };
      },
      () => {
        console.log(this.state.currentSheet);
        this.updateSheet();
      }
    );
  }

  updateDescription() {
    console.log(this.state.description);
    this.setState(
      function (prevState) {
        return {
          currentSheet: {
            ...prevState.currentSheet,
            description: this.state.description,
          },
        };
      },
      () => {
        console.log(this.state.currentSheet);
        this.updateSheet();
      }
    );
  }

  deleteSheet() {
    SheetDataService.delete(this.state.currentSheet.id)
      .then((response) => {
        console.log(response.data);
        this.props.router.navigate("/sheets");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handleGameClik() {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    const { currentSheet } = this.state;

    return (
      <div>
        {currentSheet ? (
          <div className="edit-form">
            <h4>Sheet</h4>
            <div>
              <div>
                <label>
                  <strong>ID:</strong>
                </label>{" "}
                {currentSheet.id}
              </div>
              <div className="flex flex-row">
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentSheet.name}
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                  placeholder={currentSheet.name}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
                {/* <button
                  type="submit"
                  className="btn ms-0 me-3 my-2 btn-primary btn-sm"
                  onClick={this.handleGameClik.bind(this)}
                >
                  Edit
                </button> */}
                <button
                  type="submit"
                  name="name"
                  className="btn ms-0 me-3 my-3 btn-primary btn-sm"
                  onClick={this.updateName}
                >
                  Update
                </button>
              </div>
              <div>
                <label>
                  <strong>Type:</strong>
                </label>{" "}
                {currentSheet.type}
                <input
                  type="text"
                  name="type"
                  id="type"
                  className="form-control"
                  value={this.state.type}
                  onChange={this.onChangeType}
                  placeholder={currentSheet.type}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
                {/* <button
                  type="submit"
                  className="btn ms-0 me-3 my-2 btn-primary btn-sm"
                  onClick={this.handleGameClik.bind(this)}
                >
                  Edit
                </button> */}
                <button
                  type="submit"
                  name="type"
                  className="btn ms-0 me-3 my-4 btn-primary btn-sm"
                  onClick={this.updateType}
                >
                  Update
                </button>
              </div>
              <div>
                <label>
                  <strong>User:</strong>
                </label>{" "}
                {currentSheet.user}
                <input
                  type="text"
                  name="user"
                  id="user"
                  className="form-control"
                  value={this.state.user}
                  onChange={this.onChangeUser}
                  placeholder={currentSheet.user}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
                {/* <button
                  type="submit"
                  className="btn ms-0 me-3 my-2 btn-primary btn-sm"
                  onClick={this.handleGameClik.bind(this)}
                >
                  Edit
                </button> */}
                <button
                  type="submit"
                  name="user"
                  className="btn ms-0 me-3 my-4 btn-primary btn-sm"
                  onClick={this.updateUser}
                >
                  Update
                </button>
              </div>
              <div>
                <label>
                  <strong>Level:</strong>
                </label>{" "}
                {currentSheet.level}
                <input
                  type="number"
                  name="level"
                  id="level"
                  className="form-control"
                  value={this.state.level}
                  onChange={this.onChangeLevel}
                  placeholder={currentSheet.level}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
                {/* <button
                  type="submit"
                  className="btn ms-0 me-3 my-2 btn-primary btn-sm"
                  onClick={this.handleGameClik.bind(this)}
                >
                  Edit
                </button> */}
                <button
                  type="submit"
                  name="level"
                  className="btn ms-0 me-3 my-4 btn-primary btn-sm"
                  onClick={this.updateLevel}
                >
                  Update
                </button>
              </div>
              <div>
                <label>
                  <strong>Origin:</strong>
                </label>{" "}
                {currentSheet.origin}
                <select
                  defaultValue="Humain"
                  className="form-select"
                  name="origin"
                  id="origin"
                  required
                  onChange={this.onChangeOrigin}
                >
                  <option value="Humain">Humain</option>
                  <option value="Elfe">Elfe</option>
                  <option value="Nain">Nain</option>
                  <option value="Gnome">Gnome</option>
                  <option value="Homme-Ours-Porc">Homme-Ours-Porc</option>
                </select>
                {/* <button
                  type="submit"
                  className="btn ms-0 me-3 my-2 btn-primary btn-sm"
                  onClick={this.handleGameClik.bind(this)}
                >
                  Edit
                </button> */}
                <button
                  type="submit"
                  name="origin"
                  className="btn ms-0 me-3 my-4 btn-primary btn-sm"
                  onClick={this.updateOrigin}
                >
                  Update
                </button>
              </div>
              <div>
                <label>
                  <strong>Classe:</strong>
                </label>{" "}
                {currentSheet.classe}
                <select
                  defaultValue="Guerrier"
                  className="form-select"
                  name="classe"
                  id="classe"
                  required
                  onChange={this.onChangeClasse}
                >
                  <option value="Guerrier">Guerrier</option>
                  <option value="Mage">Mage</option>
                  <option value="Voleur">Voleur</option>
                  <option value="Pretre">Pretre</option>
                  <option value="Usurier">Usurier</option>
                </select>
                {/* <button
                  type="submit"
                  className="btn ms-0 me-3 my-2 btn-primary btn-sm"
                  onClick={this.handleGameClik.bind(this)}
                >
                  Edit
                </button> */}
                <button
                  type="submit"
                  name="classe"
                  className="btn ms-0 me-3 my-4 btn-primary btn-sm"
                  onClick={this.updateClasse}
                >
                  Update
                </button>
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentSheet.description}
                <textarea
                  name="description"
                  rows="5"
                  id="description"
                  className="form-control"
                  value={this.state.type}
                  onChange={this.onChangeDescription}
                  placeholder={currentSheet.description}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
                {/* <button
                  type="submit"
                  className="btn ms-0 me-3 my-2 btn-primary btn-sm"
                  onClick={this.handleGameClik.bind(this)}
                >
                  Edit
                </button> */}
                <button
                  type="submit"
                  name="description"
                  className="btn ms-0 me-3 my-4 btn-primary btn-sm"
                  onClick={this.updateDescription}
                >
                  Update
                </button>
              </div>
            </div>
            <button
              type="submit"
              name="description"
              className="btn ms-0 me-3 my-3 btn-danger btn-sm"
              onClick={this.deleteSheet}
            >
              Delete
            </button>

            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Sheet...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Sheet);
