import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import UserHeader from "./User Detail/userHeader"
import UserTab from "./User Detail/userTabs"
import { getUserById } from "../../features/User Management/userSlice";

const UserDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { userDetail, userDetailLoading } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (id) dispatch(getUserById(id));
  }, [id]);

  if (userDetailLoading) return <p>Loading...</p>;

  return (
    <main className="main-content">
      <div className="container-fluid">
        <UserHeader />
        <UserTab />
      </div>
    </main>
  );
};

export default UserDetail