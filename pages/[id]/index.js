import React, { useState } from "react";
// import Users from "../../models/User";
import { useRouter } from "next/router";
import axios from "axios";

const EditUser = ({ user }) => {
  const router = useRouter();
  const [users, setUser] = useState({
    userName: user.userName,
    age: user.age,
    email: user.email,
  });

  const inputHandler = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };
  const onAddUser = async (e) => {
    e.preventDefault();
    const response = await axios.put(`api/adduser/${router.query.id}`, users);
    router.push("/AllUsers");
  };

  return (
    <section className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="card shadow-lg rounded">
          <div className="card-header bg-secondary text-center text-white">
            <h2>Edit User</h2>
          </div>
          <div className="card-body">
            <form action="" className="form" onSubmit={onAddUser}>
              <div className="form-group">
                <input
                  onChange={inputHandler}
                  value={users.userName}
                  name="userName"
                  type="text"
                  className="form-control"
                  placeholder="user name"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={inputHandler}
                  value={users.email}
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="email"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={inputHandler}
                  value={users.age}
                  name="age"
                  type="number"
                  className="form-control"
                  placeholder="age"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-secondary"
                  value="Update User"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-3"></div>
    </section>
  );
};

// export const getStaticPaths = async () => {
//   const oneUser = await Users.find();
//   console.log(oneUser);

//   return {
//     fallback: false,
//     paths: oneUser.map((user) => ({
//       params: { id: user._id },
//     })),
//   };
// };

// export const getStaticProps = async (context) => {
//   const { id } = context.params;
//   const newUser = await Users.findOne({ _id: id });
//   console.log(newUser);
//   return {
//     props: {
//       user: newUser.data.data,
//     },
//   };
// };

EditUser.getInitialProps = async ({ query: { id } }) => {
  const newUser = await axios.get(`/api/adduser/${id}`);
  return {
    user: newUser.data.data,
  };
};
export default EditUser;
