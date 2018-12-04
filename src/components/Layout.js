import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import RuleForm from './RuleForm'
import RuleList from './RuleList'
import RuleSearch from './RuleSearch'

const Layout = () => (
  <div>
    <Header />
    <div className="container-fluid">
      <div className="container">
        <Route exact path="/" component={RuleList} />
        <Route exact path="/new" component={RuleForm} />
        <Route exact path="/edit/:id" component={RuleForm} />
        <Route exact path="/search" component={RuleSearch} />
      </div>
    </div>
  </div>
)


export default Layout
