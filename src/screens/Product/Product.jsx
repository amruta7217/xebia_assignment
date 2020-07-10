import React, { PureComponent } from "react";

import { productList } from "../../external/ProductList";

class Product extends PureComponent {
  state = {
    list: [],
    searchInput: "",
    cart: 0,
  };
  componentDidMount() {
    try {
      this.setState({ list: productList });
    } catch (error) {
      alert(error);
    }
  }

  handleLogin = () => {
    this.props.history.push("/login");
  };

  handleLogout = () => {
    this.props.history.push({ pathname: "/", state: false });
  };

  handleSearchInput = (e) => {
    this.setState({ searchInput: e.target.value, list: productList });
  };

  handleSearchSubmit = () => {
    if (this.state.searchInput) {
      const searchData = this.state.list.filter(
        (data) => data.title === this.state.searchInput
      );
      this.setState({ list: searchData });
    } else {
      this.setState({ list: productList });
    }
  };

  handleFilter = (e, status) => {
    let filterData;
    if (status === "color") {
      filterData = this.state.list.filter(
        (data) => data.color === e.target.value
      );
    } else if (status === "price") {
      filterData = this.state.list.filter(
        (data) => data.price === e.target.value
      );
    } else if (status === "brand") {
      filterData = this.state.list.filter(
        (data) => data.brand === e.target.value
      );
    } else {
      filterData = this.state.list.filter(
        (data) => data.discount === e.target.value
      );
    }

    if (filterData.length === 0) {
      this.setState({ list: productList });
    } else {
      this.setState({ list: filterData });
    }
  };

  handleCart = () => {
    this.setState({ cart: this.state.cart + 1 });
  };

  render() {
    const { list, searchInput } = this.state;
    return (
      <div className="p-5">
        <div className="text-right">
          {this.props.location.state === true ? (
            <div>
              <span className="mr-2">amigo</span>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleLogin}
            >
              Login
            </button>
          )}
        </div>
        <h3 className="mt-2 mb-2 text-center">Welcome to product page</h3>
        <nav className="navbar navbar-light bg-light">
          <div className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.handleSearchInput}
            />
            <button
              className="btn btn-outline-success my-2 mr-sm-4"
              type="submit"
              onClick={this.handleSearchSubmit}
            >
              Search
            </button>
            <div className="mr-sm-2">Filter by</div>
            <select
              name="cars"
              className="form-control mr-sm-2"
              onChange={(e, color) => this.handleFilter(e, "color")}
            >
              <option value="">-SELECT-</option>
              <option value="black">Black</option>
              <option value="brown">Brown</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
              <option value="creame">Creame</option>
              <option value="white">White</option>
            </select>
            <select
              name="cars"
              className="form-control mr-sm-2"
              onChange={(e, brand) => this.handleFilter(e, "brand")}
            >
              <option value="">-SELECT-</option>
              <option value="huda">Huda</option>
              <option value="lakme">Lakme</option>
              <option value="nykaa">Nykaa</option>
              <option value="bru">Bru</option>
              <option value="ponds">Ponds</option>
              <option value="red label">Red label</option>
            </select>
            <select
              name="cars"
              className="form-control mr-sm-2"
              onChange={(e, discount) => this.handleFilter(e, "discount")}
            >
              <option value="">-SELECT-</option>
              <option value="10%">10%</option>
              <option value="15%">15%</option>
              <option value="20%">20%</option>
              <option value="50%">50%</option>
              <option value="60%">60%</option>
            </select>
            <select
              name="cars"
              className="form-control mr-sm-5"
              onChange={(e, price) => this.handleFilter(e, "price")}
            >
              <option value="">-SELECT-</option>
              <option value="90">90</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="500">500</option>
              <option value="700">700</option>
              <option value="1000">1000</option>
            </select>

            <div className="mr-sm-4">Cart - {this.state.cart}</div>
            <button
              className="btn btn-primary"
              onClick={() => this.setState({ cart: 0 })}
            >
              Reset
            </button>
          </div>
        </nav>
        <div className="">
          <div className="row">
            {list.map((val, key) => (
              <div className="col-lg-3 mt-4" key={key}>
                <div className="card">
                  <div className="card-header">{val.title}</div>
                  <div className="card-body row">
                    <div className="col-lg-4">
                      <h5 className="card-title">Brand</h5>
                      <div>{val.brand}</div>
                    </div>
                    <div className="col-lg-4">
                      <h5 className="card-title">Discount</h5>
                      <div>{val.discount}</div>
                    </div>
                    <div className="col-lg-4">
                      <h5 className="card-title">Price</h5>
                      <div>{val.price}</div>
                    </div>
                  </div>
                  <hr />
                  <div className="col-lg-4 mt-2 mb-2">
                    <h5 className="card-title">Color</h5>
                    <div>{val.color}</div>
                  </div>
                  <button className="btn btn-primary" onClick={this.handleCart}>
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
