import React from "react";

export default function App() {
  const [showHome, setShowHome] = React.useState(1);

  function handleClick(number) {
    setShowHome(() => number);
  }

  function renderBody() {
    if (showHome === 1) {
      return <MainContent />;
    } else if (showHome === 2) {
      return <ContactInfo />;
    } else if (showHome === 3) {
      return <InformationPanel />;
    } else {
      return <GuidePanel />;
    }
  }

  return (
    <div
      style={{
        backgroundColor: "#c9e7f2",
        height: "100vh",
        margin: -8,
        display: "flex",
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
          }}
        >
          {renderBody()}
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
        backgroundColor: "#99ffe0",
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
        backgroundColor: "#c4c8ff",
        width: "200px",
        padding: "20px",
        minWidth: "200px",
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

function MainContent() {
  return (
    <div
      style={{
        padding: "28px",
      }}
    >
      <TitlePart name="Home" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus
        mi a velit vehicula ullamcorper. Nullam lobortis ornare leo, et auctor
        sapien egestas tempus. Nunc vulputate metus nibh, eu dapibus nibh
        laoreet at. Aliquam ultrices leo ac magna eleifend, a faucibus sem
        venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec eget sagittis dolor. Maecenas eget erat at magna maximus
        elementum. Proin tempus malesuada sapien, non dignissim ipsum porta sed.
        Sed at justo et metus faucibus lacinia. Nulla accumsan diam velit, sit
        amet porttitor erat blandit in.
      </p>
      <p>
        Mauris tincidunt convallis odio. Ut elementum tellus id ex rutrum, vel
        varius diam accumsan. Duis aliquam commodo urna quis ornare. Integer
        lobortis justo ac vehicula varius. Vestibulum vitae facilisis tortor.
        Nam nisl tellus, pharetra ac tortor vehicula, gravida ullamcorper mi. Ut
        ac purus quis mauris tristique vehicula ac non lacus. Mauris non ligula
        vel sapien sodales viverra. Quisque varius porta mauris, at tempor
        mauris. Etiam nisi leo, tincidunt volutpat nisi sit amet, egestas
        pretium ipsum. Vivamus congue vestibulum diam, vitae tristique dolor
        pretium eget. Phasellus commodo sapien sed placerat commodo.
      </p>
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
      <TitlePart name="Contact Us" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "24px",
          marginTop: "30px",
        }}
      >
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
        <Contacts />
      </div>
    </div>
  );
}

function TitlePart(props) {
  return (
    <div
      style={{
        fontWeight: 900,
        fontSize: 30,
        marginBottom: "8px",
      }}
    >
      {props.name}
      <div
        style={{
          border: "1px grey solid",
          width: "100vd",
          margin: "8px 0px",
        }}
      ></div>
    </div>
  );
}

function Contacts() {
  return (
    <div
      style={{
        border: "1px #A9C3B6 solid",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <div>Name: John Smith</div>
      <div>Address: 123 Main Street, City, State, ZIP </div>
      <div>Phone: (123) 456 - 7890 </div>
      <div>Email: johnsmith@example.com</div>
    </div>
  );
}

function InformationPanel() {
  return (
    <div
      style={{
        padding: "28px",
      }}
    >
      <TitlePart name="Information" />
    </div>
  );
}

function GuidePanel() {
  return (
    <div
      style={{
        padding: "28px",
      }}
    >
      <TitlePart name="Guide" />
    </div>
  );
}
