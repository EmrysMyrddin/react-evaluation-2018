import { connect } from 'react-redux'
import { searchRule } from '../../store/actions/rules'
import SearchBar from './SearchBar';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  const action = searchRule;
  return {
    onSearch: (value) => {
      dispatch(action(value))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)