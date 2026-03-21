// import { Routes, Route, Navigate } from "react-router-dom";
// import AppLayout from "../layout/AppLayout";
// import Login from "../pages/Login/login";
// import ProtectedRoutes from "../routes/ProtectedRoutes";
// import EnterEmail from "../pages/Forgot Password/enterEmail";
// import TwoStepVerification from "../pages/Forgot Password/twoStepVerification";
// import ConfirmPassword from "../pages/Forgot Password/confirmPassword";
// import Dashboard from "../pages/Dashboard/dashboard";
// import UserListing from "../pages/User Management/userListing";
// import UserDetail from "../pages/User Management/userDetail";
// import ActivityListing from "../pages/Activity Management/ActivityListing";
// import GamesListing from "../pages/Activity Management/Activity Types/Mindful Games/GamesListing";
// import MoviesListing from "../pages/Activity Management/Activity Types/Movies/MoviesListing";
// import UploadMovie from "../pages/Activity Management/Activity Types/Movies/UploadMovie";
// import FetchMusic from "../pages/Activity Management/Activity Types/Calm Music/FetchMusic";
// import MusicListing from "../pages/Activity Management/Activity Types/Calm Music/MusicListing";
// import MusicUpload from "../pages/Activity Management/Activity Types/Calm Music/MusicUpload";
// import YogiListing from "../pages/Activity Management/Activity Types/Wise Yogi/YogiListing";
// import AddYogi from "../pages/Activity Management/Activity Types/Wise Yogi/AddYogi";
// import EditYogi from "../pages/Activity Management/Activity Types/Wise Yogi/EditYogi";
// import HealthIsWealthListing from "../pages/Activity Management/Activity Types/Health Is Wealth/HealthIsWealthListing"
// import QuestionsListing from "../features/Onboarding Questions/QuestionsListing";
// import RiskRules from "../features/Risk Rules Config/RiskRules";
// import ContentListing from "../features/Content Management/ContentListing";
// import SafetyListing from "../features/Safety Alert/SafetyListing"
// import SubAdminListing from "../features/Sub Admin Management/SubAdminListing";
// import NotificationListing from "../features/Notification Management/NotificationListing"
// import ProfileDetails from "../features/Profile/ProfileDetails";


// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/forgotPassword" element={<EnterEmail />} />
//       <Route path="/two-step" element={<TwoStepVerification />} />
//       <Route path="/confirm-password" element={<ConfirmPassword />} />
//       <Route element={<ProtectedRoutes />}>
//         <Route element={<AppLayout />}>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/user-listing" element={<UserListing />} />
//         <Route path="/onboarding-question" element={<QuestionsListing />} />
//         <Route path="/risk-rules" element={<RiskRules />} />
//         <Route path="/content-listing" element={<ContentListing />} />
//         <Route path="/safety-alert" element={<SafetyListing />} />
//         <Route path="/subAdmin-listing" element={<SubAdminListing />} />
//         <Route path="/notification-listing" element={<NotificationListing />} />
//         <Route path="/profile" element={<ProfileDetails />} />
      
//         <Route path="/user-listing/user-detail/:id" element={<UserDetail />} />
//         <Route path="/activity-management" element={<ActivityListing />} />
//         <Route path="/activity-management/games" element={<GamesListing />} />
//         <Route path="/activity-management/movies" element={<MoviesListing />} />
//         <Route path="/activity-management/movies/upload" element={<UploadMovie />} />
//         <Route path="/activity-management/calm-music" element={<FetchMusic />} />
//         <Route path="/activity-management/calm-music/listing" element={<MusicListing />} />
//         <Route path="/activity-management/calm-music/upload" element={<MusicUpload />} />
//         <Route path="/activity-management/wise-yogi" element={<YogiListing />} />
//         <Route path="/activity-management/wise-yogi/add-yogi" element={<AddYogi />} />
//         <Route path="/activity-management/wise-yogi/edit-yogi/:id" element={<EditYogi />} />
//         <Route path="/activity-management/healthListing" element={<HealthIsWealthListing />} />
//         <Route path="/activity-management/healthListing/add-health" element={<HealthIsWealthListing />} />
//         <Route path="/activity-management/healthListing/edit-health/:id" element={<HealthIsWealthListing />} />
//         </Route>
//       </Route>

//       {/* Fallback */}
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// };

// export default AppRoutes;

import AppLayout from "../layout/AppLayout";
import ProtectedRoutes from "../routes/ProtectedRoutes";

import Login from "../pages/Login/login";
import EnterEmail from "../pages/Forgot Password/enterEmail";
import TwoStepVerification from "../pages/Forgot Password/twoStepVerification";
import ConfirmPassword from "../pages/Forgot Password/confirmPassword";

import Dashboard from "../pages/Dashboard/dashboard";
import UserListing from "../pages/User Management/userListing";
import UserDetail from "../pages/User Management/userDetail";

import ActivityListing from "../pages/Activity Management/ActivityListing";
import GamesListing from "../pages/Activity Management/Activity Types/Mindful Games/GamesListing";
import MoviesListing from "../pages/Activity Management/Activity Types/Movies/MoviesListing";
import UploadMovie from "../pages/Activity Management/Activity Types/Movies/UploadMovie";

import FetchMusic from "../pages/Activity Management/Activity Types/Calm Music/FetchMusic";
import MusicListing from "../pages/Activity Management/Activity Types/Calm Music/MusicListing";
import MusicUpload from "../pages/Activity Management/Activity Types/Calm Music/MusicUpload";

import YogiListing from "../pages/Activity Management/Activity Types/Wise Yogi/YogiListing";
import AddYogi from "../pages/Activity Management/Activity Types/Wise Yogi/AddYogi";
import EditYogi from "../pages/Activity Management/Activity Types/Wise Yogi/EditYogi";

import HealthIsWealthListing from "../pages/Activity Management/Activity Types/Health Is Wealth/HealthIsWealthListing";

import QuestionsListing from "../features/Onboarding Questions/QuestionsListing";
import RiskRules from "../features/Risk Rules Config/RiskRules";
import ContentListing from "../features/Content Management/ContentListing";
import SafetyListing from "../features/Safety Alert/SafetyListing";
import SubAdminListing from "../features/Sub Admin Management/SubAdminListing";
import NotificationListing from "../features/Notification Management/NotificationListing";
import ProfileDetails from "../features/Profile/ProfileDetails";

import { Navigate } from "react-router-dom";

const AppRoutes = [
  // 🔓 Public Routes
  {
    path: "/",
    element: <Login />,
    handle: { title: "Login" },
  },
  {
    path: "/forgotPassword",
    element: <EnterEmail />,
    handle: { title: "Forgot Password" },
  },
  {
    path: "/two-step",
    element: <TwoStepVerification />,
    handle: { title: "OTP Verification" },
  },
  {
    path: "/confirm-password",
    element: <ConfirmPassword />,
    handle: { title: "Create New Password" },
  },

  // 🔐 Protected Routes
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
            handle: { title: "Dashboard" },
          },

          {
            path: "/user-listing",
            element: <UserListing />,
            handle: { title: "User Management" },
          },
          {
            path: "/user-listing/user-detail/:id",
            element: <UserDetail />,
            handle: { title: "User Details" },
          },

          {
            path: "/onboarding-question",
            element: <QuestionsListing />,
            handle: { title: "Onboarding Questions" },
          },
          {
            path: "/risk-rules",
            element: <RiskRules />,
            handle: { title: "Risk Rules Config" },
          },

          {
            path: "/content-listing",
            element: <ContentListing />,
            handle: { title: "Content Management" },
          },
          {
            path: "/safety-alert",
            element: <SafetyListing />,
            handle: { title: "Safety Alert" },
          },
          {
            path: "/subAdmin-listing",
            element: <SubAdminListing />,
            handle: { title: "Sub Admin Management" },
          },
          {
            path: "/notification-listing",
            element: <NotificationListing />,
            handle: { title: "Notification Management" },
          },
          {
            path: "/profile",
            element: <ProfileDetails />,
            handle: { title: "Profile" },
          },

          // 🔥 Activity Management
          {
            path: "/activity-management",
            element: <ActivityListing />,
            handle: { title: "Activity Management" },
          },
          {
            path: "/activity-management/games",
            element: <GamesListing />,
            handle: { title: "Mindful Games" },
          },
          {
            path: "/activity-management/movies",
            element: <MoviesListing />,
            handle: { title: "Movies" },
          },
          {
            path: "/activity-management/movies/upload",
            element: <UploadMovie />,
            handle: { title: "Upload Movie" },
          },

          {
            path: "/activity-management/calm-music",
            element: <FetchMusic />,
            handle: { title: "Calm Music" },
          },
          {
            path: "/activity-management/calm-music/listing",
            element: <MusicListing />,
            handle: { title: "Music Listing" },
          },
          {
            path: "/activity-management/calm-music/upload",
            element: <MusicUpload />,
            handle: { title: "Upload Music" },
          },

          {
            path: "/activity-management/wise-yogi",
            element: <YogiListing />,
            handle: { title: "Wise Yogi" },
          },
          {
            path: "/activity-management/wise-yogi/add-yogi",
            element: <AddYogi />,
            handle: { title: "Add Yogi" },
          },
          {
            path: "/activity-management/wise-yogi/edit-yogi/:id",
            element: <EditYogi />,
            handle: { title: "Edit Yogi" },
          },

          {
            path: "/activity-management/healthListing",
            element: <HealthIsWealthListing />,
            handle: { title: "Health Is Wealth" },
          },
          {
            path: "/activity-management/healthListing/add-health",
            element: <HealthIsWealthListing />,
            handle: { title: "Add Health Content" },
          },
          {
            path: "/activity-management/healthListing/edit-health/:id",
            element: <HealthIsWealthListing />,
            handle: { title: "Edit Health Content" },
          },
        ],
      },
    ],
  },

  // 🔁 Fallback
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default AppRoutes;