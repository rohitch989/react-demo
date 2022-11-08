// import { useEffect } from "react";
import UList from "./common/UList";
function UserList({ className, userList, searchUser, deleteUser, success, error }) {

  return (
    <div className={className}>
      {searchUser && searchUser.length > 0
        ? searchUser.map((user, index) => (
          <UList className="user" user={user} key={index} id={index} />
        ))
        : userList ? userList.map((user, index) => (
          <UList className="user" user={user} key={index} id={index} deleteUser={deleteUser} success={success} error={error} />
        )) : null}
    </div>
  );
}

export default UserList;
