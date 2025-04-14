import { use, useState } from "react";
import { Route, Routes } from "react-router";
import { useAuth } from "./utils/AuthContext";
import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";
import RootLayout from "./root/RootLayout";
import Home from "./root/Home";

function App() {
  const [count, setCount] = useState(0);
  const { user } = useAuth();
  console.log(user);

  return (
    <div data-theme="caramellatte" className="bg-base-100 text-base-content min-h-screen">
      <main className="flex h-screen text-white">
        <Routes>
          {/* Public Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
          </Route>

          {/* Private Routes */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
