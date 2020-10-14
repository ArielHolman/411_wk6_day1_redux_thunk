import { connect } from "react-redux";
import Import from "../components/Import";
import { fetchMakes, deleteMakes } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    makes: state.makes,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    fetchMakes: () => dispatch(fetchMakes()),
    deleteMakes: (index) => dispatch(deleteMakes(index)),
  };
};

export default connect(mapStateToProps, mapsDispatchToProps)(Import);
