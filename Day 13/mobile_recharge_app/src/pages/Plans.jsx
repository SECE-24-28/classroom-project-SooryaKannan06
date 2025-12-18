import { useParams } from "react-router-dom";
import { useState } from "react";
import { getPlans } from "../services/api";
import PlanCard from "../components/PlanCard";

export default function Plans() {
  const { operator } = useParams();
  const allPlans = getPlans(operator);
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPlans = allPlans?.filter(plan => {
    const typeMatch = selectedType === "all" || plan.type === selectedType;
    const categoryMatch = selectedCategory === "all" || plan.category === selectedCategory;
    return typeMatch && categoryMatch;
  }) || [];

  return (
    <div style={{ 
      padding: "20px", 
      background: "linear-gradient(135deg, #dc2626 0%, #000000 100%)",
      minHeight: "100vh",
      width: "100%"
    }}>
      <h1 style={{ 
        textTransform: "capitalize",
        color: "white",
        textAlign: "center",
        marginBottom: "30px"
      }}>{operator} Recharge Plans</h1>
      
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px", justifyContent: "flex-start" }}>
        <select 
          value={selectedType} 
          onChange={(e) => setSelectedType(e.target.value)}
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            border: "2px solid #ff4444",
            backgroundColor: "#1a1a1a",
            color: "white",
            fontSize: "16px"
          }}
        >
          <option value="all">All Types</option>
          <option value="prepaid">Prepaid</option>
          <option value="postpaid">Postpaid</option>
        </select>
        
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            border: "2px solid #ff4444",
            backgroundColor: "#1a1a1a",
            color: "white",
            fontSize: "16px"
          }}
        >
          <option value="all">All Categories</option>
          <option value="data">Data Packs</option>
          <option value="calls">Call Packs</option>
        </select>
      </div>
      
      {filteredPlans && filteredPlans.length > 0 ? (
        <div style={{ marginTop: "30px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {filteredPlans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      ) : (
        <p style={{ color: "white", textAlign: "center" }}>No plans available for the selected filters</p>
      )}
    </div>
  );
}
