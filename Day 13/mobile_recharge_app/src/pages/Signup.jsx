import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/auth";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import signupBg from "../assets/signup.jpg";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({ name, email, mobile, password });
    navigate("/login");
  };

  return (
    <div style={{ 
      backgroundImage: `url(${signupBg})`,
      backgroundSize: "cover",
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
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
    }}>
      <h1 style={{ 
        textAlign: "center", 
        color: "white", 
        fontSize: "32px", 
        fontWeight: "700", 
        marginBottom: "30px",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
      }}>Sign Up</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
        <InputBox
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <InputBox
          label="Email"
          type="text"
          inputMode="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />

        <InputBox
          label="Mobile"
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter mobile number"
          required
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
          Sign Up
        </Button>
      </form>
      <p style={{ marginTop: "20px" }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
    </div>
  );
}
