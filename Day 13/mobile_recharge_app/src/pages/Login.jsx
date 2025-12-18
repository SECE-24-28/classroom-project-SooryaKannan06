import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/auth";
import { AuthContext } from "../context/AuthContext";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import loginBg from "../assets/login.jpg";

export default function Login() {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (loginUser(emailOrMobile, password)) {
      login("dummy-token");
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div style={{ 
      backgroundImage: `url(${loginBg})`,
      backgroundSize: "150%",
      backgroundPosition: "center",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
    <div style={{ 
      padding: "50px", 
      width: "500px", 
      maxWidth: "90vw",
      backgroundColor: "rgba(255, 255, 255, 0.25)",
      backdropFilter: "blur(15px)",
      borderRadius: "20px",
      border: "2px solid rgba(255, 255, 255, 0.3)",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
      animation: "fadeInUp 0.8s ease-out"
    }}>
      <h1 style={{ 
        textAlign: "center", 
        color: "white", 
        fontSize: "32px", 
        fontWeight: "700", 
        marginBottom: "30px",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
      }}>Login</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>

          {/* Hidden dummy inputs to trap autofill */}
      <input
        type="text"
        name="fake-username"
        autoComplete="username"
        style={{ display: 'none' }}
      />
      <input
        type="password"
        name="fake-password"
        autoComplete="new-password"
        style={{ display: 'none' }}
      />


        {error && <p style={{ color: "#ff5252", backgroundColor: "rgba(255, 255, 255, 0.9)", padding: "12px", borderRadius: "8px", textAlign: "center", fontWeight: "600", marginBottom: "15px" }}>{error}</p>}
        
        <InputBox
          label="Email"
          type="email"
          value={emailOrMobile}
          onChange={(e) => setEmailOrMobile(e.target.value)}
          placeholder="Enter email"
          required
          borderRadius="12px"
        />

        <InputBox
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
        <Button type="submit" style={{ width: "100%", marginTop: "20px" }}>
          Login
        </Button>
      </form>
      <p style={{ marginTop: "20px", textAlign: "center", color: "white", textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
        Don't have an account? <Link to="/signup" style={{ color: "#4fc3f7", fontWeight: "600", textDecoration: "underline" }}>Sign up</Link>
      </p>
    </div>
    </div>
  );
}
