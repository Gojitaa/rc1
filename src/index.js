import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    console.log('List constructed')
    this.state = {
      listId: '123f-6789-3421'
    }
  }

  componentDidMount() {
    console.log('List mount')

    this.setState({ listId: '456f-6789-3421' })
    console.log(this.state.listId)
  }

  shouldComponentUpdate(previousProps, previousState){
    console.log('List shouldUpdate?')

    return this.props.items !== previousProps.items
  }

  render(){
    console.log('List render')
    return <ul>{
      this.props.items.map(item => <li key={item}>{item}</li>)
    }</ul>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7']
    };
  }

  componentDidMount(){
    console.log('App mount')
  }

  render(){
    console.log('App render')
    return <div id='App'>
      <List items={this.state.items}/>
    </div>
  }
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root);
