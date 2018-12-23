import React from 'react';

class Filter extends React.Component {

    handleChange(searched) {
        this.setState({searched: searched.target.value})
    }

    constructor(props) {
        super(props)
        this.state = { searched: '' }
    }

    render() {
        return ( 
        <div className="search form-inline">
            <input type="text" className="form-control" placeholder="Filter..." onChange={this.handleChange.bind(this)} ></input> 
            <button className="btn btn-default" onClick = {() => this.props.onSearch(this.state.searched)}>Filtrer</button>
        </div>
        )
    }
}

export default Filter; 