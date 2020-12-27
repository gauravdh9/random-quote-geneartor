import { Myaction } from "./action";

const initialState = {
  quotes: [],
  color: "rgb(0,0,0)",
  myObject: { quote: "Welcome", author: "SSY" },
};
const mycolors = () => {
  var r = Math.floor(256 * Math.random());
  var g = Math.floor(256 * Math.random());
  var b = Math.floor(256 * Math.random());
  return `rgb(${r},${g},${b})`;
};
export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case Myaction.Fetch:
      return {
        quotes: action.payload,
        color: mycolors(),
        myObject: {
          quote: state.myObject.quote,
          author: state.myObject.author,
        },
      };
    case Myaction.Change:
      return {
        quotes: state.quotes,
        color: mycolors(),
        myObject: {
          quote: action.payload.quote,
          author: action.payload.author,
        },
      };
    default:
      return state;
  }
};
