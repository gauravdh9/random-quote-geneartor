import { useEffect } from "react";
const { default: QuoteBox } = require("./components/quoteBox");
const URL =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
function MyApp({ quotes, fetchData, myObject, showData, color }) {
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((response) => {
        fetchData(response.quotes);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      className="flex h-screen w-full justify-center items-center "
      style={{ background: `${color}` }}
    >
      <QuoteBox
        styles={"flex justify-center items-center flex-col bg-white p-12"}
        color={color}
        quotes={quotes}
        myObject={myObject}
        showData={showData}
      />
    </div>
  );
}
export default MyApp;
