const UserList = ({ users }) => {
  return (
    <div>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>not found</p>
      )}
    </div>
  );
};

export default UserList;
