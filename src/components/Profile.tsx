import { useNavigate } from "react-router";

export function Profile() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    navigate("/");
  };

  return (
    <div className="w-48 bg-slate-500">
      <p>Profile</p>
      <p>Email Goes Here</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
