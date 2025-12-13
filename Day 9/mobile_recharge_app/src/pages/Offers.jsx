import { useState } from "react";
import offerImage from '../assets/offer.png';

export default function Offers() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    { title: "Festival Bonus", description: "25% extra talk time on all plans", code: "FEST25", color: "#ffc107", icon: "🎊", gradient: "linear-gradient(135deg, #ffc107, #ffca28)" }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);
  };

  return (
    <div style={{
      minHeight: "100vh",
      margin: 0,
      padding: 0
    }}>
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center"
      }}>
      {/* Left Side - Background Image */}
      <div style={{
        flex: "1",
        height: "100vh",
        background: `url(${offerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative"
      }}>
        <div style={{
          width: "520px",
          height: "340px",
          background: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          marginBottom: "30px",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "150px",
            height: "150px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "50%"
          }}></div>
          <h2 style={{
            color: "white",
            fontSize: "36px",
            fontWeight: "800",
            margin: "0 0 20px 0",
            textShadow: "0 4px 8px rgba(0,0,0,0.3)",
            zIndex: 1
          }}>Special Offers</h2>
          <p style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "18px",
            lineHeight: "1.6",
            maxWidth: "300px",
            zIndex: 1
          }}>Save more with our exclusive deals and promotional codes</p>
        </div>
      </div>

      {/* Right Side - Carousel */}
      <div style={{
        flex: "1",
        height: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{
          position: "relative",
          width: "680px",
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start"
        }}>
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              left: "-60px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.9)",
              border: "none",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              fontSize: "20px",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              zIndex: 10,
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "white";
              e.target.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255,255,255,0.9)";
              e.target.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            ←
          </button>

          {/* Card Container */}
          <div style={{
            width: "640px",
            height: "100%",
            overflow: "hidden",
            position: "relative"
          }}>
            <div style={{
              display: "flex",
              transform: `translateX(-${currentIndex * 320}px)`,
              transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              height: "100%",
              gap: "20px"
            }}>
            {offers.map((offer, index) => {
              const isActive = index === currentIndex;
              const isVisible = Math.abs(index - currentIndex) <= 1;
              return (
                <div
                  key={index}
                  style={{
                    minWidth: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: isActive ? 1 : (isVisible ? 0.5 : 0),
                    transform: isActive ? "scale(1)" : "scale(0.85)",
                    transition: "all 0.8s ease",
                    filter: isActive ? "blur(0px)" : "blur(2px)"
                  }}
                >
                  <div style={{
                    width: "300px",
                    height: "420px",
                    background: "rgba(255, 255, 255, 0.98)",
                    borderRadius: "20px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    position: "relative",
                    border: "1px solid rgba(255,255,255,0.2)"
                  }}>
                    {/* Header with Gradient */}
                    <div style={{
                      background: offer.gradient,
                      padding: "25px",
                      position: "relative",
                      overflow: "hidden",
                      height: "35%"
                    }}>
                      <div style={{
                        position: "absolute",
                        top: "-30px",
                        right: "-30px",
                        width: "80px",
                        height: "80px",
                        background: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "50%"
                      }}></div>
                      
                      <div style={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        alignItems: "center", 
                        textAlign: "center",
                        position: "relative", 
                        zIndex: 1,
                        height: "100%",
                        justifyContent: "center"
                      }}>
                        <div style={{
                          fontSize: "40px",
                          marginBottom: "15px"
                        }}>{offer.icon}</div>
                        <h3 style={{
                          color: "white",
                          margin: "0",
                          fontSize: "24px",
                          fontWeight: "700",
                          textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)"
                        }}>{offer.title}</h3>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div style={{ padding: "25px", height: "65%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <p style={{
                        margin: "0 0 15px 0",
                        fontSize: "14px",
                        color: "#666",
                        lineHeight: "1.5",
                        textAlign: "center"
                      }}>{offer.description}</p>
                      
                      {/* Promo Code Section */}
                      <div style={{
                        background: `linear-gradient(135deg, ${offer.color}10, ${offer.color}05)`,
                        padding: "18px",
                        borderRadius: "12px",
                        border: `1px solid ${offer.color}30`,
                        textAlign: "center"
                      }}>
                        <span style={{
                          fontSize: "11px",
                          color: "#999",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "1px"
                        }}>Promo Code</span>
                        <div style={{
                          fontWeight: "800",
                          color: offer.color,
                          fontSize: "18px",
                          letterSpacing: "2px",
                          marginTop: "6px",
                          marginBottom: "12px"
                        }}>{offer.code}</div>
                        
                        <button style={{
                          background: offer.gradient,
                          color: "white",
                          border: "none",
                          padding: "8px 16px",
                          borderRadius: "8px",
                          fontSize: "11px",
                          fontWeight: "600",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px"
                        }}
                        onClick={() => navigator.clipboard.writeText(offer.code)}>📋 Copy</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: "-60px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.9)",
              border: "none",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              fontSize: "20px",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              zIndex: 10,
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "white";
              e.target.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255,255,255,0.9)";
              e.target.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            →
          </button>
          
          {/* Navigation Dots */}
          <div style={{
            position: "absolute",
            bottom: "-40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px"
          }}>
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  border: "none",
                  background: index === currentIndex ? "white" : "rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
      
      {/* Contact Section */}
      <div
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          padding: "50px 20px 0",
          backgroundColor: "#2c2b2bff",
          borderTop: "1px solid #ddd",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "40px",
          }}
        >
          {/* Company Info */}
          <div style={{ flex: "1", minWidth: "250px" }}>
            <h2 style={{ color: "#fffcfcff", marginBottom: "15px" }}>Contact Us</h2>
            <p style={{ color: "#faf7f7ff", lineHeight: "1.6" }}>
              Have questions about your recharge? We are here to help you.  
              Reach out to us anytime!
            </p>
          </div>

          {/* Contact Details */}
          <div style={{ flex: "1", minWidth: "250px" }}>
            <h3 style={{ color: "#fcf7f7ff", marginBottom: "15px" }}>Customer Support</h3>
            <p style={{ margin: "6px 0", color: "#f4f0f0ff" }}>📧 Email: support@rechargeapp.com</p>
            <p style={{ margin: "6px 0", color: "#f6f3f3ff" }}>📞 Phone: +91 98765 43210</p>
            <p style={{ margin: "6px 0", color: "#eeebebff" }}>⏰ Available: 9 AM – 9 PM (IST)</p>
          </div>

          {/* Quick Links */}
          <div style={{ flex: "1", minWidth: "200px" }}>
            <h3 style={{ color: "#f2eeeeff", marginBottom: "15px" }}>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "#f8f4f4ff", textDecoration: "none" }}>About Us</a></li>
              <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "#f4f0f0ff", textDecoration: "none" }}>Privacy Policy</a></li>
              <li style={{ marginBottom: "8px" }}><a href="#" style={{ color: "#f9f4f4ff", textDecoration: "none" }}>Help Center</a></li>
              <li><a href="#" style={{ color: "#f7f6f6ff", textDecoration: "none" }}>Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            color: "#eeededff",
            fontSize: "14px",
            borderTop: "1px solid #eee",
            paddingTop: "20px",
            paddingBottom: "40px",
          }}
        >
          © {new Date().getFullYear()} Mobile Recharge App. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}