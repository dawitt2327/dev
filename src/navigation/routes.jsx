import ChooseSignupType from "../pages/Auth/signup/ChooseSignupType";
import ClientSignup from "../pages/Auth/signup/ClientSignup";
import LoginPage from "../pages/Auth/login/LoginPage";
import ForgotPassword from "../pages/Auth/password/ForgotPassword";
import ResetPassword from "../pages/Auth/password/ResetPassword";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import FreelancerSignup from "../pages/Auth/signup/FreelancerSignup";
import NotificationPage from "../pages/User/Freelancer/Notification/NotificationPage";
import MessagingPage from "../pages/User/Freelancer/Messaging/MessagingPage";
import JobPage from "../pages/User/Freelancer/Jobs/JobPage";
import FreelancerHomePage from "../pages/User/Freelancer/Home/FreelancerHomePage";
import ClientHomePage from "../pages/User/client/home/HomePage";
import LandingHomePage from "../pages/landingPage/LandingHomePage";
import SignupSuccess from "../pages/Auth/components/SignupSuccess";
import VerificationSuccess from "../pages/Auth/components/AccountVerificationSuccess";
import ClientJobDetail from "../pages/User/client/components/job/JobDetail";
import ApplicationList from "../pages/User/client/components/job/ApplicationList";
import ApplicationDetail from "../pages/User/client/components/job/ApplicationDetail";
import PostJob from "../pages/User/client/components/job/PostJob";
import CompleteProfile from "../pages/Auth/components/CompleteProfile";
import ProjectSection from "../pages/User/client/components/workspace/project/ProjectSection";
import TeamSection from "../pages/User/client/components/workspace/team/TeamSection";
import ProgressSection from "../pages/User/client/components/workspace/progress/ProgressSection";
import DashboardSection from "../pages/User/client/components/workspace/dashboard/DashboardSection";
import JobDetail from "../pages/User/Freelancer/Jobs/components/JobDetail";
import ApplyPage from "../pages/User/Freelancer/Jobs/components/ApplyPage";
import FreelancerWorkspaceDashboardSection from "../pages/User/Freelancer/Workspace/components/dashboard/FreelancerWorkspaceDashboardSection";
import FreelancerWorkspaceProjectSection from "../pages/User/Freelancer/Workspace/components/project/FreelancerWorkspaceProjectSection";
import FreelancerWorkspaceProgressSection from "../pages/User/Freelancer/Workspace/components/progress/FreelancerWorkspaceProgressSection";
import FreelancerWorkspaceTeamSection from "../pages/User/Freelancer/Workspace/components/team/FreelancerWorkspaceTeamSection";
import FreelancerWorkspaceProjectDetail from "../pages/User/Freelancer/Workspace/components/projectdetail/FreelancerWorkspaceProjectDetail";
import AddProject from "../pages/User/client/components/workspace/project/AddProject";
import ProjectDetail from "../pages/User/client/components/workspace/project/ProjectDetail";
import UpdateTeamSection from "../pages/User/client/components/workspace/team/UpdateTeamSection";
import MyHireRecord from "../pages/User/client/components/talent/MyHireRecord";
import DiscoverFreelancer from "../pages/User/client/components/talent/DiscoverFreelancer";
import EditProject from "../pages/User/client/components/workspace/project/components/EditProject";
import PostDetailPage from "../pages/User/Freelancer/Home/components/PostDetailPage";
import VerificationSection from "../pages/User/admin/components/verification/VerificationSection";
import DisputeSection from "../pages/User/admin/components/disputes/DisputeSection";
import UserSection from "../pages/User/admin/components/user/UserSection";
import AdminAccountSetting from "../pages/User/admin/components/account/AccountSetting";
import VerificationDetail from "../pages/User/admin/components/verification/VerificationDetail";
import DisputeDetail from "../pages/User/admin/components/disputes/DisputeDetail";
import WorkHistory from "../pages/User/Freelancer/profile/components/workhistory/WorkHistorySection";
import FreelancerProfileAccountSection from "../pages/User/Freelancer/profile/components/account/FreelancerProfileAccountSection";
import GetVerifiedSection from "../pages/User/Freelancer/profile/components/getverified/GetVerifiedSection";

export const routes = [
  {
    path: "/",
    element: <LandingHomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <ChooseSignupType />,
  },
  {
    path: "/signup/client",
    element: <ClientSignup />,
  },

  {
    path: "/signup/freelancer",
    element: <FreelancerSignup />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },
  {
    path: "/admin",
    element: <VerificationSection />,
  },
  {
    path: "/admin/verify-request",
    element: <VerificationSection />,
  },
  {
    path: "/admin/verify-request/:id",
    element: <VerificationDetail />,
  },
  {
    path: "/admin/dispute-request",
    element: <DisputeSection />,
  },
  {
    path: "/admin/dispute-request/:id",
    element: <DisputeDetail />,
  },
  {
    path: "/admin/users",
    element: <UserSection />,
  },
  {
    path: "/admin/my-account",
    element: <AdminAccountSetting />,
  },
  {
    path: "/feeds", //freelancerhome
    element: <FreelancerHomePage />,
  },
  {
    path: "/feeds/:postId",
    element: <PostDetailPage />,
  },
  {
    path: "/jobs",
    element: <JobPage />,
  },
  {
    path: "/jobs/:jobId",
    element: <JobDetail />,
  },
  {
    path: "/jobs/apply/:jobId",
    element: <ApplyPage />,
  },
  {
    path: "/profile-setting",
    element: <GetVerifiedSection />,
  },
  {
    path: "/freelancer-account-setting",
    element: <FreelancerProfileAccountSection />,
  },
  {
    path: "/freelancer-get-verified",
    element: <GetVerifiedSection />,
  },
  {
    path: "/messaging",
    element: <MessagingPage />,
  },
  {
    path: "/notification",
    element: <NotificationPage />,
  },
  {
    path: "/signup-success",
    element: <SignupSuccess />,
  },
  {
    path: "/verification-success",
    element: <VerificationSuccess />,
  },
  {
    path: "/complete-profile",
    element: <CompleteProfile />,
  },
  {
    path: "/client",
    element: <ClientHomePage />,
  },
  {
    path: "/client/jobs/:jobId",
    element: <ClientJobDetail />,
  },
  {
    path: "/post-job",
    element: <PostJob />,
  },
  {
    path: "/job/applications/list/:jobId",
    element: <ApplicationList />,
  },
  {
    path: "/job-applications/:jobId/:applicationId",
    element: <ApplicationDetail />,
  },
  {
    path: "/client/workspace/projects",
    element: <ProjectSection />,
  },
  {
    path: "/client/find-freelancer",
    element: <DiscoverFreelancer />,
  },
  {
    path: "/client/my-hire",
    element: <MyHireRecord />,
  },
  {
    path: "/client/workspace/teams",
    element: <TeamSection />,
  },
  {
    path: "/client/workspace/teams/:project-id",
    element: <UpdateTeamSection />,
  },
  {
    path: "/client/workspace/create-project",
    element: <AddProject />,
  },
  {
    path: "/client/workspace/projects/:projectId",
    element: <ProjectDetail />,
  },
  {
    path: "/client/workspace/edit-project/:projectId",
    element: <EditProject />,
  },
  {
    path: "/client/workspace/progress",
    element: <ProgressSection />,
  },
  {
    path: "/client/workspace",
    element: <DashboardSection />,
  },
  {
    path: "/workspace",
    element: <FreelancerWorkspaceDashboardSection />,
  },
  {
    path: "/workspace/projects",
    element: <FreelancerWorkspaceProjectSection />,
  },
  {
    path: "/workspace/progress",
    element: <FreelancerWorkspaceProgressSection />,
  },
  {
    path: "/workspace/teams",
    element: <FreelancerWorkspaceTeamSection />,
  },
  {
    path: "/workspace/:id/:projectName",
    element: <FreelancerWorkspaceProjectDetail />,
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
];
