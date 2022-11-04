import UList from "./common/UList";

const UsersList = ({ className, userList }) => {
  return (
    <div className={className}>
      {userList
        ? userList.map((user) => (
            <UList className="user" user={user} key={user.id} />
          ))
        : null}
    </div>
  );
};
export default UsersList;
