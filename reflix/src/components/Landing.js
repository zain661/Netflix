import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="landing-page">
        {/* <h1>who is watching</h1> */}
        {/* <div className="Users"> */}
          {this.props.users.map((u) => {
            return (
              
                <div className = "user" key={u.id} style={{ backgroundColor: u.color }}>
                  {u.name}
               
              </div>
            );
          })}
        </div>
    //   </div>
    );
  }
}

export default Landing;
