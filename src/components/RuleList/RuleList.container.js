import { connect } from 'react-redux';

import { rulesLoaded } from '../../store/actions/rules';
import RuleList from './RuleList';

const mapStateToProps = state => ( {
	rules: state.rules,
	filter: state.filter.query
} )

const mapDispatchToProps = dispatch => ( {
	loadRules: () => dispatch( rulesLoaded() ),
} )

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)( RuleList )
