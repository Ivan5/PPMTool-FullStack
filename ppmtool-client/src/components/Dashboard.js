import React from "react";
import PropTypes from "prop-types";
import ProjectItem from "./Project/ProjectItem";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Dashboard</h1>
        <ProjectItem />
      </div>
    );
  }
}

export default Dashboard;
