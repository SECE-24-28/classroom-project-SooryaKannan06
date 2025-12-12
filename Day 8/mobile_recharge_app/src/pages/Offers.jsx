export default function Offers() {
  const offers = [
    { title: "Cashback Offer", description: "Get 10% cashback on recharges above ₹500", code: "CASH10", color: "#4caf50", icon: "💰", gradient: "linear-gradient(135deg, #4caf50, #66bb6a)" },
    { title: "First Recharge", description: "Get ₹50 off on your first recharge", code: "FIRST50", color: "#ff9800", icon: "🎉", gradient: "linear-gradient(135deg, #ff9800, #ffb74d)" },
    { title: "Weekend Special", description: "Extra 5% off on weekend recharges", code: "WEEKEND5", color: "#9c27b0", icon: "🎯", gradient: "linear-gradient(135deg, #9c27b0, #ba68c8)" },
    { title: "Student Discount", description: "15% off for students with valid ID", code: "STUDENT15", color: "#2196f3", icon: "🎓", gradient: "linear-gradient(135deg, #2196f3, #64b5f6)" },
    { title: "Family Pack", description: "₹100 off on recharges above ₹1000", code: "FAMILY100", color: "#e91e63", icon: "👨👩👧👦", gradient: "linear-gradient(135deg, #e91e63, #f06292)" },
    { title: "Flash Sale", description: "20% off for next 2 hours only!", code: "FLASH20", color: "#ff5722", icon: "⚡", gradient: "linear-gradient(135deg, #ff5722, #ff8a65)" },
    { title: "Loyalty Reward", description: "₹75 off for returning customers", code: "LOYAL75", color: "#795548", icon: "🏆", gradient: "linear-gradient(135deg, #795548, #a1887f)" },
    { title: "Midnight Deal", description: "12% off between 12 AM - 6 AM", code: "NIGHT12", color: "#607d8b", icon: "🌙", gradient: "linear-gradient(135deg, #607d8b, #90a4ae)" },
    { title: "Bulk Recharge", description: "₹200 off on recharges above ₹2000", code: "BULK200", color: "#009688", icon: "📦", gradient: "linear-gradient(135deg, #009688, #4db6ac)" },
    { title: "Festival Bonus", description: "25% extra talk time on all plans", code: "FEST25", color: "#ffc107", icon: "🎊", gradient: "linear-gradient(135deg, #ffc107, #ffca28)" },
    { title: "Senior Citizen", description: "30% off for users above 60 years", code: "SENIOR30", color: "#8bc34a", icon: "👴", gradient: "linear-gradient(135deg, #8bc34a, #aed581)" },
    { title: "Refer & Earn", description: "₹150 off when you refer 3 friends", code: "REFER150", color: "#673ab7", icon: "🤝", gradient: "linear-gradient(135deg, #673ab7, #9575cd)" }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "60px 20px",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "5%",
        width: "200px",
        height: "200px",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "50%",
        animation: "float 6s ease-in-out infinite"
      }}></div>
      <div style={{
        position: "absolute",
        top: "60%",
        right: "10%",
        width: "150px",
        height: "150px",
        background: "rgba(255, 255, 255, 0.08)",
        borderRadius: "50%",
        animation: "float 8s ease-in-out infinite reverse"
      }}></div>
      
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(255, 255, 255, 0.2)",
            padding: "12px 24px",
            borderRadius: "50px",
            marginBottom: "20px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)"
          }}>
            <span style={{ color: "white", fontSize: "14px", fontWeight: "600" }}>🔥 LIMITED TIME OFFERS</span>
          </div>
          <h1 style={{
            fontSize: "48px",
            fontWeight: "800",
            color: "white",
            marginBottom: "20px",
            textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            background: "linear-gradient(45deg, #fff, #f0f0f0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Special Offers</h1>
          <p style={{
            fontSize: "20px",
            color: "rgba(255, 255, 255, 0.9)",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>Save more with our exclusive deals and promotional codes</p>
        </div>
        
        {/* Offers Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "40px",
          marginTop: "60px"
        }}>
          {offers.map((offer, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "24px",
                padding: "0",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-12px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 30px 80px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0, 0, 0, 0.2)";
              }}
            >
              {/* Header with Gradient */}
              <div style={{
                background: offer.gradient,
                padding: "30px",
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "120px",
                  height: "120px",
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "50%"
                }}></div>
                <div style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "-30px",
                  width: "80px",
                  height: "80px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%"
                }}></div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative", zIndex: 1 }}>
                  <div style={{
                    fontSize: "40px",
                    background: "rgba(255, 255, 255, 0.2)",
                    padding: "12px",
                    borderRadius: "16px",
                    backdropFilter: "blur(10px)"
                  }}>{offer.icon}</div>
                  <h3 style={{
                    color: "white",
                    margin: "0",
                    fontSize: "28px",
                    fontWeight: "700",
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)"
                  }}>{offer.title}</h3>
                </div>
              </div>
              
              {/* Content */}
              <div style={{ padding: "30px" }}>
                <p style={{
                  margin: "0 0 30px 0",
                  fontSize: "18px",
                  color: "#555",
                  lineHeight: "1.7",
                  fontWeight: "500"
                }}>{offer.description}</p>
                
                {/* Promo Code Section */}
                <div style={{
                  background: `linear-gradient(135deg, ${offer.color}15, ${offer.color}08)`,
                  padding: "24px",
                  borderRadius: "16px",
                  border: `2px dashed ${offer.color}`,
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    height: "2px",
                    background: offer.gradient
                  }}></div>
                  
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "16px"
                  }}>
                    <div>
                      <span style={{
                        fontSize: "12px",
                        color: "#888",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "1px"
                      }}>Promo Code</span>
                      <div style={{
                        fontWeight: "800",
                        color: offer.color,
                        fontSize: "24px",
                        letterSpacing: "3px",
                        marginTop: "4px"
                      }}>{offer.code}</div>
                    </div>
                    
                    <button style={{
                      background: offer.gradient,
                      color: "white",
                      border: "none",
                      padding: "12px 24px",
                      borderRadius: "12px",
                      fontSize: "14px",
                      fontWeight: "700",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      boxShadow: `0 4px 15px ${offer.color}40`,
                      textTransform: "uppercase",
                      letterSpacing: "1px"
                    }} 
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 8px 25px ${offer.color}60`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = `0 4px 15px ${offer.color}40`;
                    }}
                    onClick={() => navigator.clipboard.writeText(offer.code)}>📋 Copy Code</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}