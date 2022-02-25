import React, { useState } from "react";
import axios from "axios";
import  { useRouter } from 'next/router';

const AddNewUser = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    age: 0,
  });
  const router=useRouter();
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onAddUser = async (e) => {
    e.preventDefault();
    const response = await axios.post("api/adduser", user);
     router.push("/AllUsers")
  };

 
  return (
    <section className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="card shadow-lg rounded">
          <div className="card-header bg-secondary text-center text-white">
            <h2>All User</h2>
          </div>
          <div className="card-body">
            <form action="" className="form" onSubmit={onAddUser}>
              <div className="form-group">
                <input
                  onChange={inputHandler}
                  value={user.userName}
                  name="userName"
                  type="text"
                  className="form-control"
                  placeholder="user name"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={inputHandler}
                  value={user.email}
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="email"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={inputHandler}
                  value={user.age}
                  name="age"
                  type="number"
                  className="form-control"
                  placeholder="age"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Add User"
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

// export const getServerSideProps = async () => {};

export default AddNewUser;
