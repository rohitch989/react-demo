import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
//components
import List from "./common/List";
import UList from "./common/UList";
import Form from "./common/Form";
import UsersList from "./UserList";

// functions
import { mapStateToProps } from "../mockFile";
import { searchUser, fetchUser, addUser, deleteUser, resetState } from "../Action/user";




function Users({ users, searchUser, searched, fetchUser, error, addUser, formError, deleteUser, success, resetState }) {

  useEffect(() => {
    fetchUser({ url: 'users', method: 'get' });
    if (error || searched || success) {
      setPend(false);
      setTimeout(() => { resetState() }, 5000)
    }
  }, [fetchUser, error, searched, success, resetState]);

  const [loader, setLoader] = useState(false)

  const setPend = (value) => {
    setLoader(value)
  }


  return (
    <>
      <div className="page-header">
        <h1>React User Data Base</h1>
      </div>
      <Form searchUser={searchUser} error={error} addUser={addUser} formError={formError} success={success} setPend={setPend} />
      {success ? (
        <em className="text-success">{success}</em>
      ) : null}
      <div>
        <div className="grid-section">
          <UList className="grid-header user">
            <List className="id">Sr.No</List>
            <List className="name">Name</List>
            <List className="username">Username</List>
            <List className="age">Age</List>
            <List className="gender">Gender</List>
            <List className="contact">Contact</List>
            <List className="birth">No. of Post</List>
          </UList>
          {loader ? <h1>Loading...</h1> :

            <UsersList className="user-lists" userList={users} searchUser={searched} deleteUser={deleteUser} success={success} resetState={resetState} />
          }
        </div>
      </div>
    </>
  );
}
export default connect(mapStateToProps, { searchUser, fetchUser, addUser, deleteUser, resetState })(Users);
