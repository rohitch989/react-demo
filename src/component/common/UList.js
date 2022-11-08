import { useEffect, useState } from "react";
import List from "./List";
import { Link } from 'react-router-dom'
function UList({ className, user, children, id, deleteUser, success, error, match }) {
  const onhandleClick = e => {
    deleteUser(e.target.name);
    setPend(e.target.name);

  }
  const [pendingUI, setPend] = useState("")

  useEffect(() => {
    if (success || error) {
      setPend("")
    }
  }, [success, error])
  if (user)
    return (
      <>
        {pendingUI ?
          <div style={{ textAlign: 'center', backgroundColor: 'lightcoral', color: '#fff', borderRadius: "5px" }}>
            A User is deleted
          </div> : null
        }


        <ul className={className} style={{ opacity: pendingUI ? '0.25' : 1 }}>

          <List className="id"><button className="btn-delete" name={user._uuid} onClick={onhandleClick} >X</button>&nbsp;{id + 1}</List>
          <List className="name">{`${user.firstName} ${user.maidenName ? user.maidenName : "_"
            } ${user.lastName ? user.lastName : "_"}`}</List>
          <List className="username">{user.username ? user.username : "_"}</List>
          <List className="age">{user.age ? user.age : "_"}</List>
          <List className="gender">{user.gender}</List>
          <List className="contact">
            Email:{user.email ? user.email : "_"}
            <br /> phone: {user.phone ? user.phone : "_"}
          </List>
          <List className="post">
            <Link to={"./" + user._uuid}>
              <button className="btn btn-primary" style={{ fontSize: '10px', boxShadow: '2px 2px green' }} >{user?.post && user?.post?.length > 0 ? user.post.length : "+ Add Post"}</button>
            </Link></List>        </ul>


      </>
    );
  else {
    return children ? <ul className={className}>{children}</ul> : null;
  }
}

export default UList;
