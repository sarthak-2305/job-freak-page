import { TitlePart } from "../components/Title";

export function ContactInfo() {
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
