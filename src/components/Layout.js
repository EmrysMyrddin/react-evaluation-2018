import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header'
import RuleForm from './RuleForm'
import RuleList from './RuleList'
import TryTag from './TryTag'
import TryName from './TryName'
import TryLike from './TryLike'
import TryDescription from './TryDescription'



const Layout = () => (
  <div>
    <Header />
    <div className="container-fluid">
      <div className="container">
      <Route exact path="/" component={RuleList} />
        <Route exact path="/new" component={RuleForm} />
        <Route exact path="/edit/:id" component={RuleForm} />
        <Route exact path="/tri" component={TryTag} />
        <Route exact path="/triname" component={TryName} />
        <Route exact path="/trilike" component={TryLike} />
        <Route exact path="/tridescription" component={TryDescription} />
      </div>
    </div>
  </div>
)


export default Layout
