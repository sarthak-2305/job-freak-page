export function Layout({ children, handleClick }) {
  return (
    <div
      style={{
        backgroundColor: "#C8E9A0",
        height: "100%",
        margin: -8,
        minHeight: "calc(100vh - 60px - 60px)",
        paddingBottom: "60px",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <SideBar handleClick={handleClick} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {children}
        </div>
        <BottomBar />
      </div>
    </div>
  );
}

function BottomBar() {
  return (
    <div
      style={{
        backgroundColor: "#E7BBE3",
        width: "100%",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Created by: Sarthak Tanwar
      </div>
    </div>
  );
}

function SideBar(props) {
  return (
    <div
      style={{
        backgroundColor: "#23C9FF",
        width: "12%",
        padding: "20px",
        minWidth: "120px",
        minHeight: "calc(100vh - 60px - 50px)",
        paddingTop: "30px",
      }}
    >
      <SideComponents name="Home" clicked={props.handleClick} data={1} />
      <SideComponents name="Contact" clicked={props.handleClick} data={2} />
      <SideComponents name="Information" clicked={props.handleClick} data={3} />
      <SideComponents name="Guide" clicked={props.handleClick} data={4} />
    </div>
  );
}

function SideComponents(props) {
  return (
    <div
      style={{
        border: "1px black solid",
        borderRadius: "10px",
        padding: "8px",
        marginBottom: "6px",
        fontWeight: "600",
      }}
      onClick={() => props.clicked(props.data)}
    >
      {props.name}
    </div>
  );
}
