import * as fetch from '../../fetch'

export const RULES_LOADED = 'RULES_LOADED'
export const DO_LIKE = 'DO_LIKE'
export const DO_DISLIKE = 'DO_DISLIKE'
export const UPDATE_RULE = 'UPDATE_RULE'
export const ADD_RULE = 'ADD_RULE'
export const DELETE_RULE = 'DELETE_RULE'

export const rulesLoaded = () => async (dispatch) => {
  const res = await fetch.get('/rest/rules')
  const rules = await res.json()
  rules.map(rule => {
    if(rule.tags.length>0 && (rule.tag === undefined || rule.tag === ""))
    rule.tag = "#"+rule.tags.join("#")
  })

  dispatch({
    type: RULES_LOADED,
    payload: {
      rules,
    },
  })
}

const display = (rule, choose, search) => {

  if(choose === "title")
  {
    const title = rule.title != null && rule.title != "" && rule.title.toLowerCase().includes(search.toLowerCase())
    return title
  }
  else if(choose === "description")
  {
    const description = rule.description != null && rule.description != "" && rule.description.toLowerCase().includes(search.toLowerCase())
    return description
  }
  else if(choose === "tag")
  {
    const tag = rule.tags.filter(tag => tag != null && tag != "" && tag.toLowerCase().includes(search.toLowerCase())).length > 0
    return tag
  }
  else if(choose === "opinionDown")
  {
    const opinionDown = rule.dislikes >= Number.parseInt(search, 10)
    return opinionDown
  }
  else if(choose === "opinionUp")
  {
    const opinionUp = rule.likes >= Number.parseInt(search, 10)
    return opinionUp
  }
  else
  {
    const title = rule.title != null && rule.title != "" && rule.title.toLowerCase().includes(search.toLowerCase())
    const description = rule.description != null && rule.description != "" && rule.description.toLowerCase().includes(search.toLowerCase())
    const tag = rule.tags.filter(tag => tag != null && tag != "" && tag.toLowerCase().includes(search.toLowerCase())).length > 0
    const opinionDown = rule.dislikes >= Number.parseInt(search, 10)
    const opinionUp = rule.likes >= Number.parseInt(search, 10)

    return description || title || tag || opinionDown || opinionUp
  }
}

export const rulesSearch = (choose, search) => async (dispatch) => {
  const res = await fetch.get('/rest/rules')
  const rules = await res.json()
  rules.map(rule => {
    if(rule.tags.length>0 && (rule.tag === undefined || rule.tag === ""))
    rule.tag = "#"+rule.tags.join("#")
  })
  let rulesFilters = []

  if(rules.filter(rule => display(rule, choose, search)).length > 0)
  {
    rulesFilters = rules.filter(rule => display(rule, choose, search))
  }
  else
  {
    rulesFilters = rules
  }

  dispatch({
    type: RULES_LOADED,
    payload: {
      rules: rulesFilters,
    },
  })
}

const compare = (ruleA, ruleB, increasing) => {
  if (ruleA < ruleB) return increasing ? -1 : 1;
  else if (ruleA > ruleB) return increasing ? 1 : -1;
  else return 0;
}

export const rulesSort = (choose, order) => async (dispatch) => {
  const res = await fetch.get('/rest/rules')
  const rules = await res.json()

  if(choose === "title")
  {
    rules.sort((ruleA, ruleB) => compare(ruleA.title, ruleB.title, order === "increasing" ? true : false))
  }
  else if(choose === "opinionDown")
  {
    rules.sort((ruleA, ruleB) => compare(ruleA.dislikes, ruleB.dislikes, order === "increasing" ? true : false))
  }
  else if(choose === "opinionUp")
  {
    rules.sort((ruleA, ruleB) => compare(ruleA.likes, ruleB.likes, order === "increasing" ? true : false))
  }

  dispatch({
    type: RULES_LOADED,
    payload: {
      rules,
    },
  })
}

export const doLike = id => async (dispatch) => {
  await fetch.post(`/rest/rules/${id}/likes`)

  dispatch({
    type: DO_LIKE,
    payload: {
      id,
    },
  })
}

export const doDislike = id => async (dispatch) => {
  await fetch.post(`/rest/rules/${id}/dislikes`)

  dispatch({
    type: DO_DISLIKE,
    payload: {
      id,
    },
  })
}

export const updateRule = rule => async (dispatch) => {
  rule.tags = rule.tag.split("#")
  const result = await fetch.put(`/rest/rules/${rule.id}`, rule)
  const updatedRule = await result.json()

  dispatch({
    type: UPDATE_RULE,
    payload: {
      rule: updatedRule,
    },
  })

  return updatedRule
}

export const addRule = rule => async (dispatch) => {
  rule.tags = rule.tag.split("#")
  const result = await fetch.post('/rest/rules', rule)
  const createdRule = await result.json()

  dispatch({
    type: ADD_RULE,
    payload: {
      rule: createdRule,
    },
  })

  return createdRule
}

export const deleteRule = id => async (dispatch) => {
  const result = await fetch.del(`/rest/rules/${id}`)
  const deletedRule = await result.json()

  dispatch({
    type: DELETE_RULE,
    payload: {
      rules: deletedRule,
    },
  })

  return deletedRule
}
