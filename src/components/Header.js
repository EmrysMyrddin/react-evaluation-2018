import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    }
  }

  changeActiveTab(index) {
    this.setState({activeTab: index});
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand brand">Developers rules</a>
        </div>
    
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li onClick={() => this.changeActiveTab(0)} className={this.state.activeTab === 0? "active": ""}><Link to="/">Home</Link></li>
            <li onClick={() => this.changeActiveTab(1)} className={this.state.activeTab === 1? "active": ""}><Link to="/new">New</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
