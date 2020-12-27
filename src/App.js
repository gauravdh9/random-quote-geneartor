import { connect } from "react-redux";
import "./App.css";
import MyApp from "./MyApp";
import { Changeaction, Fetchaction } from "./redux/action";

const mapStatetoProps = (state) => {
  return { quotes: state.quotes, color: state.color, myObject: state.myObject };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchData: (quotes) => dispatch(Fetchaction(quotes)),
    showData: (quote, author) => dispatch(Changeaction(quote, author)),
  };
};
const App = connect(mapStatetoProps, mapDispatchtoProps)(MyApp);

export default App;
