import React, { Component } from "react";
import SheetDataService from "../../services/sheet.service";
import { Link } from "react-router-dom";

export default class SheetsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveSheets = this.retrieveSheets.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveSheet = this.setActiveSheet.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      sheets: [],
      currentSheet: null,
      currentIndex: -1,
      searchName: "",
    };
  }

  componentDidMount() {
    this.retrieveSheets();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName,
    });
  }

  retrieveSheets() {
    SheetDataService.getAll()
      .then((response) => {
        this.setState({
          sheets: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveSheets();
    this.setState({
      currentSheet: null,
      currentIndex: -1,
    });
  }

  setActiveSheet(sheet, index) {
    this.setState({
      currentSheet: sheet,
      currentIndex: index,
    });
  }

  searchName() {
    SheetDataService.findByName(this.state.searchName)
      .then((response) => {
        this.setState({
          sheets: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { searchName, sheets, currentSheet, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Sheets List</h4>

          <ul className="list-group">
            {sheets &&
              sheets.map((sheet, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveSheet(sheet, index)}
                  key={index}
                >
                  {sheet.name}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          {currentSheet ? (
            <div>
              <h4>Sheet</h4>
              <div>
                <label>
                  <strong>ID:</strong>
                </label>{" "}
                {currentSheet.id}
              </div>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentSheet.name}
              </div>
              <div>
                <label>
                  <strong>Type:</strong>
                </label>{" "}
                {currentSheet.type}
              </div>
              <div>
                <label>
                  <strong>User:</strong>
                </label>{" "}
                {currentSheet.user}
              </div>
              <div>
                <label>
                  <strong>Level:</strong>
                </label>{" "}
                {currentSheet.level}
              </div>

              <Link
                to={"/sheets/" + currentSheet.id}
                className="btn btn-primary btn-sm pl-0 mt-2"
              >
                View
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Sheet...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
