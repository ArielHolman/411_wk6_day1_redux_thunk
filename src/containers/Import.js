import { connect } from "react-redux";
import Import from "../components/Import";
import { fetchMakes, deleteMake } from "../redux/actions"

const mapStateToProps = (state) => {
  return {
    makes: state.makes,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    fetchMakes: () => dispatch(fetchMakes()),
    deleteMake: (MakeId) => dispatch(deleteMake(MakeId))
  };
};

export default connect(mapStateToProps, mapsDispatchToProps)(Import);
