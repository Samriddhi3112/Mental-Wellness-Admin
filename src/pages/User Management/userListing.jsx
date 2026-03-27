import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  setPage,
  toggleBlockUsers,
  exportUsers,
} from "../../features/User Management/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserListing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error, page, limit, total } = useSelector(
    (state) => state.users,
  );

  const [search, setSearch] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [filters, setFilters] = useState({
    language: "",
    mainFocus: "",
    persona: "",
    riskLevel: "",
    status: "",
  });

  useEffect(() => {
    const payload = { page, limit, search };

    if (filters.language) payload.language = filters.language;
    if (filters.mainFocus) payload.mainFocus = filters.mainFocus;
    if (filters.persona) payload.role = filters.persona;
    if (filters.riskLevel) payload.riskLevel = filters.riskLevel;
    payload.status = filters.status || "active";

    dispatch(fetchUsers(payload));
  }, [dispatch, page, limit, search, filters]);

  const buildPayload = () => {
    const payload = { page, limit, search };

    if (filters.language) payload.language = filters.language;
    if (filters.mainFocus) payload.mainFocus = filters.mainFocus;
    if (filters.persona) payload.role = filters.persona;
    if (filters.riskLevel) payload.riskLevel = filters.riskLevel;

    payload.status = filters.status || "active";

    return payload;
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  const handleUserSelect = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id],
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(users.map((u) => u._id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      language: "",
      mainFocus: "",
      persona: "",
      riskLevel: "",
      status: "",
    });
  };

  const mainFocusMap = {
    sleep: {
      label: "Sleep",
      icon: "fa-solid fa-moon",
      color: "#6f42c1", // purple
    },
    stress: {
      label: "Stress",
      icon: "fa-solid fa-bolt",
      color: "#0d6efd", // blue
    },
    anxiety: {
      label: "Anxiety",
      icon: "fa-solid fa-brain",
      color: "#fd7e14", // orange (good for anxiety)
    },
    not_sure: {
      label: "Not Sure",
      icon: "fa-solid fa-circle-question",
      color: "#6c757d", // grey
    },
  };

  const handleBulkAction = async () => {
    if (selectedUsers.length === 0) return;

    const isBlocking = filters.status !== "blocked";

    try {
      await dispatch(
        toggleBlockUsers({
          userIds: selectedUsers,
          block: isBlocking,
        }),
      ).unwrap();

      toast.success(
        `${selectedUsers.length} users ${
          isBlocking ? "deactivated" : "activated"
        } successfully`,
      );

      setSelectedUsers([]);

      dispatch(fetchUsers(buildPayload()));
    } catch (err) {
      toast.error(err || "Action failed");
    }
  };

  const handleExport = async () => {
    try {
      const res = await dispatch(exportUsers()).unwrap();

      // ✅ Create file from blob
      const blob = new Blob([res], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = "users.xlsx"; // file name
      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Export error", err);
    }
  };

  // Bulk deactivate action
  // const handleDeactivateSelected = async () => {
  //   if (selectedUsers.length === 0) return;

  //   try {
  //     await dispatch(
  //       toggleBlockUsers({ userIds: selectedUsers, block: true }),
  //     ).unwrap();

  //     toast.success(`${selectedUsers.length} users deactivated successfully`);

  //     setSelectedUsers([]);

  //     const payload = { page, limit, search };

  //     if (filters.language) payload.language = filters.language;
  //     if (filters.mainFocus) payload.mainFocus = filters.mainFocus;
  //     if (filters.persona) payload.role = filters.persona;
  //     if (filters.riskLevel) payload.riskLevel = filters.riskLevel;

  //     // ⭐ MOST IMPORTANT
  //     payload.status = filters.status || "active";

  //     dispatch(fetchUsers(payload));
  //   } catch (err) {
  //     toast.error(err || "Failed to deactivate users");
  //   }
  // };

  return (
    <main className="main-content">
      <div className="container-fluid">
        {/* Top Action Bar */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center gap-2">
            <div className="br-12 border bg-white d-inline-block searchbar">
              <input
                type="text"
                placeholder="Search by name"
                className="w-100 searchinput"
                value={search}
                onChange={handleSearchChange}
              />
              <i className="fa-solid fa-magnifying-glass f-grey position-absolute magglass" />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div>
              <button
                onClick={handleExport}
                className="me-3 d-inline-flex align-items-center gap-2 btn btn-trans p-black f-14"
              >
                <i className="fa-solid fa-download" /> Export list
              </button>
              {/* Uncomment if Add User is needed */}
              {/* <button className="d-inline-flex align-items-center gap-2 btn btn-orange text-white f-14">
              <i className="fa-solid fa-plus" /> Add user
            </button> */}
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center gap-2">
            <label className="fw-400 f-12 p-black">Filters:</label>
            <select
              name="language"
              value={filters.language}
              onChange={handleFilterChange}
              className="bg-white br-50 border2px py-2 px-3 o-none p-grey fw-400 f-12"
            >
              <option value="">Language</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="spanish">Spanish</option>
            </select>
            <select
              name="mainFocus"
              value={filters.mainFocus}
              onChange={handleFilterChange}
              className="bg-white br-50 border2px py-2 px-3 o-none p-grey fw-400 f-12"
            >
              <option value="">Main focus</option>
              <option value="sleep">Sleep</option>
              <option value="anxiety">Anxiety</option>
              <option value="stress">Stress</option>
              <option value="not_sure">Not sure</option>
            </select>
            <select
              name="persona"
              value={filters.persona}
              onChange={handleFilterChange}
              className="bg-white br-50 border2px py-2 px-3 o-none p-grey fw-400 f-12"
            >
              <option value="">Persona</option>
            </select>
            <select
              name="riskLevel"
              value={filters.riskLevel}
              onChange={handleFilterChange}
              className="bg-white br-50 border2px py-2 px-3 o-none p-grey fw-400 f-12"
            >
              <option value="">Risk level</option>
            </select>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="bg-white br-50 border2px py-2 px-3 o-none p-grey fw-400 f-12"
            >
              <option value="">Status</option>
              <option value="active">Active</option>
              <option value="blocked">Inactive</option>
            </select>
          </div>

          <button
            onClick={handleClearFilters}
            className="d-inline-block text-red fw-400 f-12"
            style={{
              border: "none",
              backgroundColor: "#rgb(245 247 250)",
            }}
          >
            Clear all
          </button>
        </div>

        {/* Bulk Action Bar */}
        {selectedUsers.length > 0 && (
          <div className="bulk-action-bar mb-4 d-flex justify-content-between p-2 br-8">
            <div className="bulk-left">
              <span>{selectedUsers.length} Selected</span>
              <span>Apply bulk action to selected users</span>
            </div>
            <div className="bulk-right">
              <button
                className="bulk-btn bulk-btn-danger"
                onClick={handleBulkAction}
              >
                {filters.status === "blocked" ? "Activate" : "Deactivate"}
              </button>
            </div>
          </div>
        )}

        {/* Search Bar */}

        {/* Table */}
        <div className="normal-table">
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={
                      selectedUsers.length === users.length && users.length > 0
                    }
                    onChange={handleSelectAll}
                  />
                </th>
                <th>User</th>
                <th>Age/Gender</th>
                <th>Language</th>
                <th>Main Focus</th>
                {/* <th>Risk Level</th> */}
                {/* <th>Status</th> */}
                <th>Last Active</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={9}>Loading...</td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={9} style={{ color: "red" }}>
                    {error}
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={9}>No users found</td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user._id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user._id)}
                        onChange={() => handleUserSelect(user._id)}
                      />
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <figure className="m-0">
                          <img
                            src={user.avatar || "images/SarahJenkins.svg"}
                            alt=""
                          />
                        </figure>
                        <div>
                          <h6 className="fw-400 f-14 p-black m-0">
                            {user.name}
                          </h6>
                          {/* <p className="fw-400 f-10 p-grey m-0">
                            ID: {user.id}
                          </p> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <p className="fw-400 f-12 m-0 p-grey">{user.age}</p>
                        <i className="fa-solid fa-circle f-grey f-6" />
                        <p className="fw-400 f-12 m-0 p-grey">{user.gender}</p>
                      </div>
                    </td>
                    <td>
                      <p className="fw-400 f-12 m-0 p-grey">{user.language}</p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <i
                          className={
                            mainFocusMap[user.mainFocus]?.icon ||
                            "fa-solid fa-circle"
                          }
                          style={{
                            color:
                              mainFocusMap[user.mainFocus]?.color || "#999",
                            fontSize: "12px",
                          }}
                        />
                        <p className="fw-400 f-12 m-0">
                          {mainFocusMap[user.mainFocus]?.label ||
                            user.mainFocus}
                        </p>
                      </div>
                    </td>
                    {/* <td>
                      <p className="fw-400 f-12 m-0">{user.riskLevel}</p>
                    </td>
                    <td>
                      <p className="fw-400 f-12 m-0">{user.status}</p>
                    </td> */}
                    <td>
                      <p className="fw-400 f-12 m-0 p-grey">
                        {user.lastLogin
                          ? new Date(user.lastLogin).toLocaleString()
                          : "-"}
                      </p>
                    </td>
                    <td>
                      <span
                        onClick={() =>
                          navigate(`/user-listing/user-detail/${user._id}`)
                        }
                        className="p-grey fw-400 f-14 m-0 d-flex align-items-center gap-3"
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fa-solid fa-ellipsis-vertical" />
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="bg-grey p-3 d-flex align-items-center justify-content-between">
            <p className="m-0 fw-400 f-12 p-grey">
              Showing {(page - 1) * limit + 1} to{" "}
              {Math.min(page * limit, total)} of {total} admins
            </p>
            <div className="d-flex align-items-center gap-1">
              <div className="pagination">
                <button
                  className="d-inline-block px-3 py-2 br-8 border fw-400 f-12 bg-white"
                  disabled={page === 1}
                  onClick={() => handlePageChange(page - 1)}
                >
                  Previous
                </button>
                <button
                  className="px-3 py-2 br-8 border fw-400 f-12 bg-white"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
                <button
                  className="px-3 py-2 br-8 border fw-400 f-12 bg-white"
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page * limit >= total}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserListing;
