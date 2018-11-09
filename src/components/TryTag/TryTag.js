import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Rule from '../Rule'

class Test extends Component {
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
          for(var j=0; j <= obj.tags.length; j++){
            if(this.state.query==obj.tags[j]){
            console.log("COUCOU");
            title.push(obj.title)
            description.push(obj.description)
            tags.push(obj.tags[j])
            id.push(obj.id)
            }
            if(obj.tags==this.state.query){
              id.push(obj.id)
            }
          }
        }
        /*var data = [];
        var title = [];
        var description = [];
        var tags = [];
        var id = [];

        id.push("1");
        for(var i = 0; i < data.length; i++) {
            var obj = data[i];
            console.log("Name: " + obj.title);
            console.log("Tags: " + obj.tags);
            console.log("Id: " + obj.id);
            console.log("Query: " + this.state.query);
            for(var j=0; j < obj.tags.length; j++){
            if(this.state.query==obj.tags[j]){
            console.log("COUCOU");
            title.push(obj.title)
            description.push(obj.description)
            tags.push(obj.tags[j])
            id.push(obj.id)
            }
          }
          if(this.state.query==obj.tags){
            console.log("COUCOU");
            title.push(obj.title)
            description.push(obj.description)
            tags.push(obj.tags)
            id.push(obj.id)
            }
        }
        console.log(id)*/
        return (
            <div>
        <form>
            <input
              placeholder="Tri par tag"
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
export default Test;
