import { useState } from "react";
import OperatorCard from "../components/OperatorCard";
import jioLogo from "../assets/Jio.png";
import airtelLogo from "../assets/airtel.jpg";
import viLogo from "../assets/VI.jpg";
import bsnlLogo from "../assets/bsnl.jpg";
import banner1 from "../assets/recharge-banner01.jpg";
import banner2 from "../assets/recharge-banner02.jpg";
import banner3 from "../assets/recharge-banner03.jpg";

export default function Recharge() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [banner1, banner2, banner3];

      const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      };

      const prevSlide = () => {
        setCurrentIndex((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        );
      };

      const operators = [
        { name: "Jio", logo: jioLogo, operator: "jio" },
        { name: "Airtel", logo: airtelLogo, operator: "airtel" },
        { name: "VI", logo: viLogo, operator: "vi" },
        { name: "BSNL", logo: bsnlLogo, operator: "bsnl"}
      ];

      return (
        <div style={{
          minHeight: "80vh",
          background: "linear-gradient(135deg, #cd1919ff 0%, #383737af 100%)",
          padding: "40px 20px 0"
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

            {/* Full Width Image Slider */}
            <div
              style={{
                width: "100vw",
                marginLeft: "calc(-50vw + 50%)",
                marginTop: "-40px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "300vw",
                  transform: `translateX(-${currentIndex * 100}vw)`,
                  transition: "transform 0.6s ease-in-out",
                }}
              >
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`slide-${index}`}
                    style={{
                      width: "100vw",
                      height: "500px",
                      objectFit: "cover",
                    }}
                  />
                ))}
              </div>

              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "20px",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.4)",
                  color: "white",
                  border: "none",
                  padding: "12px 18px",
                  borderRadius: "50%",
                  fontSize: "24px",
                  cursor: "pointer",
                }}
              >
                ❮
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "20px",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.4)",
                  color: "white",
                  border: "none",
                  padding: "12px 18px",
                  borderRadius: "50%",
                  fontSize: "24px",
                  cursor: "pointer",
                }}
              >
                ❯
              </button>
            </div>

            <div style={{ textAlign: "center", marginBottom: "50px", marginTop: "60px" }}>
              <h1 style={{
                fontSize: "36px",
                fontWeight: "700",
                color: "#0e0101ff",
                marginBottom: "16px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)"
              }}>Select Your Operator</h1>
              <p style={{
                fontSize: "18px",
                color: "#0a0202ff",
                maxWidth: "500px",
                margin: "0 auto"
              }}>Choose your mobile network operator to view available recharge plans</p>
            </div>
            
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "30px",
                marginTop: "40px"
              }}
            >
              {operators.map((op) => (
                <OperatorCard key={op.operator} {...op} />
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div
            style={{
              width: "100vw",
              marginTop: "80px",
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
 