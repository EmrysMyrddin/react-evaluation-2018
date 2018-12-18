import { connect } from 'react-redux'
import { deleteRule } from '../../store/actions/rules'

import DeleteBtn from './DeleteBtn'

const mapDispatchToProps = (dispatch, { id }) => {
    return {
        onClick: () => dispatch(deleteRule(id))
    };
};


export default connect(
    null,
    mapDispatchToProps,
)(DeleteBtn)