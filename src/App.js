import React from "react";
import { Layout } from "./components/Layout";
import {
  MainContent,
  ContactInfo,
  InformationPanel,
  GuidePanel,
} from "./pages";

export default function App() {
  const [showHome, setShowHome] = React.useState(1);

  function handleClick(number) {
    setShowHome(() => number);
  }

  return (
    <Layout handleClick={handleClick}>
      {showHome === 1 ? (
        <MainContent />
      ) : showHome === 2 ? (
        <ContactInfo />
      ) : showHome === 3 ? (
        <InformationPanel />
      ) : (
        <GuidePanel />
      )}
    </Layout>
  );
}
