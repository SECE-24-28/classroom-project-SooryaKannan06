import './InputBox.css';

export default function InputBox({ label, type = "text",inputMode ,value, onChange, placeholder, required, borderRadius }) {
  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    fontSize: "16px",
    border: "2px solid #e0e0e0",
    borderRadius: borderRadius || "8px",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
    backgroundColor: "#fafafa",
    height: "50px",
    minHeight: "50px",
    display: "block",
    outline: "none",
    fontFamily: "inherit",
    lineHeight: "1.5",
    color: "#333"
  };

  return (
    <div style={{ marginBottom: "20px", textAlign: "left" }}>
      {label && <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "white", textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>{label}</label>}
      <input
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete="new-password"
        autoCorrect="off"
        autoCapatalize="none"
        style={{...inputStyle, WebkitAppearance: "none", MozAppearance: "none", appearance: "none"}}
        onFocus={(e) => {
          e.target.style.borderColor = "#1976d2";
          e.target.style.backgroundColor = "white";
          e.target.style.boxShadow = "0 0 0 3px rgba(25, 118, 210, 0.1)";
          e.target.style.borderRadius = borderRadius || "8px";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "#e0e0e0";
          e.target.style.backgroundColor = "#fafafa";
          e.target.style.boxShadow = "none";
          e.target.style.borderRadius = borderRadius || "8px";
        }}
        onAnimationStart={(e) => {
          e.target.style.backgroundColor = "#fafafa";
          e.target.style.borderRadius = borderRadius || "8px";
        }}
      />
    </div>
  );
}
