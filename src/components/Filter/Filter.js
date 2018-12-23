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
        <div className="search form-inline" id ="filter">
            <input type="text" className="form-control" placeholder="Filter..." onChange={this.handleChange.bind(this)} ></input> 
            <button className="btn btn-primary" onClick = {() => this.props.onSearch(this.state.searched)} id="buttonFiltre"><i className="glyphicon glyphicon-ok"></i></button>
        </div>
        )
    }
}

export default Filter; 