import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function PlanCard({ plan }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        border: "2px solid #333333",
        borderRadius: "16px",
        padding: "24px",
        backgroundColor: "#1a1a1a",
        marginBottom: "20px",
        boxShadow: "0 4px 12px rgba(9, 1, 1, 0.08)",
        transition: "all 0.3s ease",
        position: "relative" 
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12)";
        e.currentTarget.style.borderColor = "#ff4444";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
        e.currentTarget.style.borderColor = "#333333";
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
        <h2 style={{ color: "#ff4444", margin: "0", fontSize: "32px", fontWeight: "700" }}>₹{plan.price}</h2>
        <span style={{ 
          backgroundColor: "#ff4444", 
          color: "#ffffff", 
          padding: "4px 12px", 
          borderRadius: "20px", 
          fontSize: "12px", 
          fontWeight: "600" 
        }}>POPULAR</span>
      </div>
      
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
          <span style={{ color: "#4caf50", marginRight: "8px", fontSize: "16px" }}></span>
          <p style={{ margin: "0", color: "#ffffff", fontSize: "16px" }}>Validity: <strong>{plan.validity}</strong></p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "#ff9800", marginRight: "8px", fontSize: "16px" }}></span>
          <p style={{ margin: "0", color: "#ffffff", fontSize: "16px" }}>Data: <strong>{plan.data}</strong></p>
        </div>
      </div>
      
      <Button 
        onClick={() => navigate("/payment", { state: { plan } })}
        style={{ width: "100%", padding: "14px" }}
        
      >
        Recharge Now →
      </Button>
    </div>
  );
}
