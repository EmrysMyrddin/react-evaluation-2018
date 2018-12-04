import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searched: ''
        }
    }

    handleChange(searched) {
        this.setState({searched: searched.target.value})
    }

    render() {
        return ( 
        <div className = "search form-inline" >
            <input className = "form-control" placeholder="Title" type = "text" onChange = {this.handleChange.bind(this)} ></input> 
            <button onClick = {() => this.props.onSearch(this.state.searched)} className = "btn btn-default" > Chercher </button>
        </div>
        )
    }
}

export default Search;