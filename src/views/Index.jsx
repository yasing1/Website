import React from "react";
import Homepage from "../components/Homepage";


class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <div>
       <Homepage />
       </div>
       
    );
  }
}

export default Index;
