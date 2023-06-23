import React from "react";

export default function App() {
  const [showHome, setShowHome] = React.useState(true);

  function handleClick() {
    setShowHome((home) => !home);
  }

  return (
    <div
      style={{
        backgroundColor: "cyan",
        height: "100vh",
        margin: -8,
        display: "flex",
      }}
    >
      <SideBar handleClick={handleClick} />
      {showHome ? <MainContent /> : <ContactInfo />}
    </div>
  );
}

function SideBar(props) {
  return (
    <div
      style={{
        backgroundColor: "green",
        width: "250px",
        padding: "20px",
      }}
    >
      <SideComponents name="Home" clicked={props.handleClick} />
      <SideComponents name="Contact" clicked={props.handleClick} />
      <SideComponents name="Information" clicked={props.handleClick} />
      <SideComponents name="Guide" clicked={props.handleClick} />
    </div>
  );
}

function SideComponents(props) {
  return (
    <div
      style={{
        border: "1px black solid",
        padding: "8px",
        marginBottom: "6px",
        fontWeight: "600",
      }}
      onClick={props.clicked}
    >
      {props.name}
    </div>
  );
}

function MainContent() {
  return (
    <div
      style={{
        padding: "28px",
      }}
    >
      This is the main content
    </div>
  );
}

function ContactInfo() {
  return (
    <div
      style={{
        padding: "28px",
      }}
    >
      This is contact info
    </div>
  );
}
