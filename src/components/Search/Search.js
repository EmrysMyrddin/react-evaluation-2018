import React from 'react'
import { func, string } from 'prop-types'
import { connect } from 'react-redux'
import { rulesSearch } from '../../store/actions/rules'

export let choose = "all"

const Search = ({ onChangeSearch }) => (
  <div>
    <form>
      Rechercher par :
    <select style={{margin: "10px"}} name="choose" onChange={onChangeChoose}>
      <option value="all" selected="true">Tout</option>
      <option value="title">Titre</option>
      <option value="description">Description</option>
      <option value="tag">Tag</option>
      <option value="opinionDown">Avis négatif</option>
      <option value="opinionUp">Avis positif</option>
    </select>
    <input style={{margin: "10px"}} type="text" name="search" id="search" size="20" onChange={onChangeSearch} />
    </form>
  </div>
)

Search.propTypes = {
  onChangeSearch: func
}

const onChangeChoose = (event) => {
  choose = event.target.value
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSearch: (event) => dispatch(rulesSearch(choose,event.target.value)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search)

//export default Search
