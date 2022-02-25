import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
const AllUsers = (props) => {
  const router = useRouter();
  const onDeleteHandler = async (id) => {
    const response = await axios.delete(`/api/adduser/${id}`);
  };

  const onEditHandler = (id) => {
    router.push(`/${id}`);
  };

  return (
    <section className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8 text-center">
        <h2>All Users Details</h2>
        <table className="table  rounded table-hover shadow-lg">
          <thead className="bg-teal text-white text-center text-capitalize">
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Age</th>
              <th>operation</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody className=" text-center">
            {props.myAllUser.map((user) => (
              <tr key={user._id}>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button
                    className="btn  btn-sm btn-outline-danger "
                    onClick={() => onDeleteHandler(user._id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn  btn-sm btn-outline-secondary "
                    onClick={() => onEditHandler(user._id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-md-2"></div>
    </section>
  );
};

export const getServerSideProps = async () => {
  const response = await axios("http://localhost:3000/api/adduser");
  return {
    props: {
      myAllUser: response.data.data,
    },
  };
};

export default AllUsers;
