import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import CoverLetter from "./Components/CoverLetter";
import CreateResume from "./Components/CreateResume";
import Updates from "./Components/Updates";
import History from "./Components/History";
import NotFound from "./Components/NotFound";
import AdminHome from "./Components/AdminHome";
import AdminDashboard from "./Components/AdminDashboard";
import RegisterCompany from "./Components/RegisterCompany";
import AdminHistory from "./Components/AdminHistory";
import RegisteredStudents from "./Components/RegisteredStudents";
import About from "./Components/About";
import Help from "./Components/Help";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster 
      toastOptions={{
        style: {
          background: 'hsl(var(--card))',
          color: 'hsl(var(--card-foreground))',
          border: '1px solid hsl(var(--border))',
        },
        classNames: {
          success: 'toast-success',
          error: 'toast-error',
        },
      }}
    />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminHome />}>
          <Route index element={<AdminDashboard />} />
          <Route path="register-company" element={<RegisterCompany />} />
          <Route path="history" element={<AdminHistory />} />
          <Route path="students" element={<RegisteredStudents />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/home" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="portfolio/cover-letter" element={<CoverLetter />} />
          <Route path="portfolio/resume" element={<CreateResume />} />
          <Route path="updates" element={<Updates />} />
          <Route path="history" element={<History />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<Help />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
