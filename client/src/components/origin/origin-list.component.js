import React, { Component } from "react";
import OriginDataService from "../../services/origin.service";

class OriginsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.onChangeOrigin = this.onChangeOrigin.bind(this);
    this.retrieveOrigins = this.retrieveOrigins.bind(this);
    this.setActiveOrigin = this.setActiveOrigin.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      origins: [],
      origin: "",
      activeOrigin: "",
      activeIndex: -1,
      searchName: "",
    };
  }

  componentDidMount() {
    this.retrieveOrigins();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName,
    });
  }

  onChangeOrigin(e) {
    this.setState({
      origin: e.target.value,
    });
    console.log(origin.name);
  }

  retrieveOrigins() {
    OriginDataService.getAll()
      .then((response) => {
        this.setState({
          origins: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  setActiveOrigin(origin, index) {
    this.setState({
      activeOrigin: origin,
      activeIndex: index,
    });
  }

  searchName() {
    OriginDataService.findByName(this.state.searchName)
      .then((response) => {
        this.setState({
          origins: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { origin, origins, index, activeOrigin, activeIndex } = this.state;
    return (
      <select className="form-select">
        {origins &&
          origins.map((origin, index) => (
            <option
              className={
                "list-group-item " + (index === activeIndex ? "active" : "")
              }
              key={index}
              value={origin.name}
            >
              {origin.name}
            </option>
          ))}
      </select>
    );
  }
}

export default OriginsList;
