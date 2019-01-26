import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from "./views/Search/Search";
import Main from "./views/Main/Main";
import { getAllBooks } from "./modules/books/books-actions";

class AppRouter extends React.Component {
  componentDidMount() {
    this.props.getAllBooks();
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Main} />
          <Route path="/search/" component={Search} />
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { getAllBooks }
)(AppRouter);
