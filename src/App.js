/*
 * HMR -Hot Module Replacement (For Reloding the page)
 * File Watcher Algorithm - C++(Parcel follow this algoright)
 * BUILDING
 * MINIFY
 * Cleaning Our Code
 * Dev and Production Build
 * Super Fast Build Algorithm
 * Image Optimization
 * Caching While Development
 * Compatible with older version of browser
 * HTTPS on dev (npx parcel index.html --https)
 * PORT NO
 * Consistent Hashing Algorith( for hasing or cacheing)
 * Zero Config
 * TRANSITIVE DEPENDENCIES (we have our pakage manager, which handles and take care of transitives dependies of our code)
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// const heading = React.createElement("h1", { id: "title", key: "h1" }, "Heading 1 from Parcel");

// const heading2 = React.createElement("h2", { id: "title", key: "h2" }, "Heading 2");

// console.log(heading);

// const container = React.createElement("div", { id: "container" }, [
//   heading,
//   heading2,
// ]);

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);
root.render(<AppLayout />);
