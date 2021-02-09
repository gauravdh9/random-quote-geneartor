import React, { useEffect } from "react";
import { FaInstagram, FaQuoteLeft, FaTwitter } from "react-icons/fa";
const Data = [{ Icon: FaTwitter }, { Icon: FaInstagram }];

const QuoteBox = ({ quotes, styles, color, showData, myObject }) => {
  const handleClick = () => {
    let myObj = quotes[Math.floor(Math.random() * quotes.length)];
    showData(myObj["quote"], myObj["author"]);
  };
  console.log(quotes);
  useEffect(() => {
    if (quotes?.length > 0) {
      handleClick();
    }
  }, [quotes]);

  return (
    <div className={styles} style={{ width: "600px", color: `${color}` }}>
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-row">
          <FaQuoteLeft size={50} />
          <span className="text-3xl m-2 font-semibold">{myObject.quote}</span>
        </div>
      </div>
      <div className="flex flex-row justify-end items-center w-full p-8">
        <span className="text-xl">-{myObject.author}</span>
      </div>
      <div className="flex justify-between items-center flex-row p-4 w-full">
        <div className="flex justify-center items-center flex-row">
          {Data.map((Item, index) => (
            <a
              href="##"
              className="m-1 p-4 text-white rounded-sm"
              style={{ background: `${color}` }}
              key={index}
            >
              <Item.Icon size={35} />
            </a>
          ))}
        </div>
        <button
          className="m-4 p-4 text-white rounded-sm"
          onClick={handleClick}
          style={{ background: `${color}` }}
        >
          New Quote
        </button>
      </div>
      <span>
        -by <span className="text-xl mr-0.5 font-bold">G</span>aurav
        <span className="text-xl mr-0.5 font-bold">D</span>himan
      </span>
    </div>
  );
};

export default QuoteBox;
