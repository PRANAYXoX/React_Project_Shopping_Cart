import React from "react";

function Nav(props) {
  return (
    <div className="container-fluid bg-primary text-light">
      <div className="row nav-content py-2">
        <div className="col-1 offset-0">ICON</div>
        <div className="col-2 offset-8 bg-warning">TOTAL</div>
        <div className="col-1 offset-0 cart d-flex justify-content-center">
          <span className="noti d-flex justify-content-center align-items-center">
            {props.count}
          </span>
          <img
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
const styles = {
  image: {
    width: 30,
    height: 30,
  },
};

export default Nav;
