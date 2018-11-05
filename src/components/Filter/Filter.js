import React from 'react'

const Filter = ({search, optionChange, filter}) => {
  return (<form className="form-group">
    <label htmlFor="search">Search by:</label><br></br>
    <div className="radio-panel">
      <input type="radio" id="title" name="choice_filter" value="title" checked={filter.type === 'title'} onChange={optionChange}/>
      <label htmlFor="title">Title</label>

      <input type="radio" id="likes" name="choice_filter" value="likes" checked={filter.type === 'likes'} onChange={optionChange}/>
      <label htmlFor="likes">Likes</label>

      <input type="radio" id="dislikes" name="choice_filter" value="dislikes" checked={filter.type === 'dislikes'} onChange={optionChange}/>
      <label htmlFor="dislikes">Dislikes</label>

      <input type="radio" id="tags" name="choice_filter" value="tags" checked={filter.type === 'tags'} onChange={optionChange} />
      <label htmlFor="tags">Tags</label>
    </div>
    <input type="text" placeholder={`${filter.type} ${filter.type === 'likes' || filter.type === 'dislikes' ? 'greater than': ''}...`} id="search" className="form-control" onChange={search}/>
</form>)
};
// `/edit/${createdRule.id}`
export default Filter
