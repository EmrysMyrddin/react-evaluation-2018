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
  let rulesSorted = []

  if(rules.filter(rule => display(rule, choose, search)).length > 0)
  {
    rulesSorted = rules.filter(rule => display(rule, choose, search))
  }
  else
  {
    rulesSorted = rules
  }

  dispatch({
    type: RULES_LOADED,
    payload: {
      rules: rulesSorted,
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
  rule.tags.shift();
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
