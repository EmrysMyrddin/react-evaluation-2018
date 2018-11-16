import React from 'react';
import PropTypes from 'prop-types';
import LikeBtn from './LikeBtn'

class Rule extends React.Component {

  state = { folded: false}


  onTitleClick = () => {
    this.setState({
      folded: !this.state.folded
    })
  }

  static propTypes = {
    rule: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.description,
      likes: PropTypes.number,
      dislikes: PropTypes.number,
      tags: PropTypes.arrayOf(PropTypes.string)

    }).isRequired
  }

  render(){
    const { folded } = this.state
    const {rule } = this.props
      return(
        
        <div className="panel panel-primary">
          <div className="panel-heading" role="presentation" onClick={this.onTitleClick}>
            {rule.title}
            <i className={`pull-right glyphicon glyphicon-chevron-${folded? 'down' : 'up'}`} />
          </div>
          <div className={`panel-body  ${folded ? 'hidden' : ''}`} >
            <p>{rule.description}</p>
          </div>
          <div className="panel-footer">
            <div className="btn-toolbar">
              {rule.tags.map(tag => (
                <span key={tag} className="badge">{tag}</span>
              ))}
              <div className="btn-group btn-group-xs pull-right">
                <a className="btn btn-primary" title="Update">
                  <i className="glyphicon glyphicon-pencil" />
                </a>
              </div>
              <div className="btn-group btn-group-xs pull-right">
                <LikeBtn defaultValue={rule.likes} type='like' />
                <LikeBtn defaultValue={rule.dislikes} type='dislike' />
              </div>
            </div>
          </div>
        </div>)



  }
}

export default Rule
