import React, { useEffect, useState } from "react";
import List from "./common/List";
import UList from "./common/UList";
import { connect } from "react-redux";
import Form from "./common/Form";
import { NavLink } from "react-router-dom";
import UsersList from "./UserList";
import { mapStateToProps } from "../mockFile";
import { searchUser } from "../Action/user";
function Users({ users, searchUser, searched }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // if (searchUser.length > 0) setShow(true);
    if (searched.length) {
      const timout = setTimeout(() => {
        setShow(!show);
      }, 2000);

      if(searched)
      clearTimeout(timout);

      console.log(timout);
    }
  }, [show, searched.length]);

  console.log(show);
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="logo">
          Remix
        </NavLink>

        <ul className="nav">
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="page-header">
          <h1>Remix User Data Base</h1>
        </div>
        <Form searchUser={searchUser} />
        <div>
          <div className="grid-section">
            <UList className="grid-header user">
              <List className="id">Sr.No</List>
              <List className="name">Name</List>
              <List className="username">Username</List>
              <List className="age">Age</List>
              <List className="gender">Gender</List>
              <List className="contact">Contact</List>
              <List className="birth">Birth Date</List>
            </UList>
            {show ? (
              <UsersList className="user-lists" userList={searched} />
            ) : (
              <UsersList className="user-lists" userList={users} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default connect(mapStateToProps, { searchUser })(Users);
