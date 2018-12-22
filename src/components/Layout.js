import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import Filter from './FilterComponent/Filter'
import RuleForm from './RuleForm'
import RuleList from './RuleList'

const Layout = () => (
  <div>
    <Header />
    <Route exact path="/" component={Filter} />
    <div className="container-fluid">
      <div className="container">
        <Route exact path="/" component={RuleList} />
        <Route exact path="/new" component={RuleForm} />
        <Route exact path="/edit/:id" component={RuleForm} />
      </div>
    </div>
  </div>
)


export default Layout