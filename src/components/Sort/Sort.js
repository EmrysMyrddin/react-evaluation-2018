import React from 'react'
import { func, string } from 'prop-types'
import { connect } from 'react-redux'
import { rulesSort } from '../../store/actions/rules'

let choose = "title"
let sort = "increasing"

const Sort = ({ onChange }) => (
  <div>
    <form>
      Trier dans :
    <select style={{margin: "10px"}} name="choose" onChange={onChange}>
      <option value="title">Titre</option>
      <option value="opinionDown">Avis négatif</option>
      <option value="opinionUp">Avis positif</option>
    </select>
    par ordre :
    <select style={{margin: "10px"}} name="sort" onChange={onChange}>
      <option value="increasing">Croissant</option>
      <option value="decreasing">Décroissant</option>
    </select>
    </form>
  </div>
)

Sort.propTypes = {
  onChange: func
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => {

      if(event.target.value === "increasing" || event.target.value === "decreasing")
      {
        sort = event.target.value
      }
      else
      {
        choose = event.target.value
      }
      dispatch(rulesSort(choose, sort))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sort)

//export default Sort
