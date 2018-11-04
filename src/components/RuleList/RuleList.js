import PropTypes from 'prop-types';
import React from 'react';

import Rule from '../Rule';

class RuleList extends React.Component
{
	static propTypes = {
		rules: PropTypes.array,
		loadRules: PropTypes.func,
		filter: PropTypes.string
	}

	static defaultProps = {
		rules: [],
		filter: ""
	}

	componentDidMount = () =>
	{
		this.props.loadRules()
	}

	render()
	{
		const { rules, filter } = this.props

		const filtered = rules.filter( rule => (
			( rule.title || "" ).includes( filter )						// filtre titre
			|| ( rule.description || "" ).includes( filter )			// filtre desc
			|| ( rule.tags || [] ).some( k => k.includes( filter ) )	// filtre tags
		) )

		return filtered.map( rule => <Rule key={ rule.id } rule={ rule } /> )
	}
}

export default RuleList
