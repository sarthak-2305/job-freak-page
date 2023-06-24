export function TitlePart(props) {
  return (
    <div
      style={{
        fontWeight: 900,
        fontSize: 30,
        marginBottom: "8px",
        width: "100%",
      }}
    >
      {props.name}
      <div
        style={{
          border: "1px grey solid",
          margin: "8px -28px",
        }}
      ></div>
    </div>
  );
}
