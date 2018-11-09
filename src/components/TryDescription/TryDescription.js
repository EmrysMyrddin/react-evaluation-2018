import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Rule from '../Rule'

class TryparDescription extends Component {
    state = {
        query: '',
      }

      static propTypes = {
        rules: PropTypes.array,
        loadRules: PropTypes.func,
      }

      static defaultProps = {
        rules: [],
      }

    constructor (props) {
        super(props)
        this.test = "";
        
     }

     handleInputChange = () => {
        this.setState({
          query: this.search.value
        })
        this.test = this.search.value
      }
      
      filtre = () => {
          return (
            <p></p>
          )
       }

       componentDidMount = () => {
        this.props.loadRules()
      }
     
     render(){
      const { rules } = this.props
      var id = [];
      var title = [];
      var description = [];
      var tags = [];
      var id = [];
        for(var i=0; i <rules.length;i++){
          var obj = rules[i]
          console.log("Name: " + obj.title);
          console.log("Tags: " + obj.tags);
          console.log("Id: " + obj.id);
          console.log("Query: " + this.state.query);
         if(typeof obj.description !== "undefined"){
           if(obj.description.toLowerCase().includes(this.state.query.toLowerCase())){
           id.push(obj.id)
          }
        }
        }
        return (
            <div>
        <form>
            <input
              placeholder="Tri par descriptions (n'affiche pas les rules sans descriptions)"
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
          </form>
            <p></p>                    
            {rules.map(rule => {
                if(id.includes(rule.id)){
                return <Rule key={rule.id} rule={rule} />
                }
            })        
        }
        </div>
        )}
};
export default TryparDescription;
