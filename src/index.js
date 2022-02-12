import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import useFetch from './useFetch'
import './index.css';

const List = ({ items }) => {
  return <ul></ul>
}

const App = () => {
  /**
    TODO: invoke useFetch here to get some data
          when loading => display ...loading
          when error => display <Error />
          when data => dispay <List />

    location to use: https://api.thecatapi.com/v1/breeds
    headers to support: 'x-api-key': <API_KEY>

    example: useFetch('https://api.com/v1/endpoint', {'custom-header': 'MyHeader'})
  */
  const dummyData = ['item1', 'item2']

  return <div id='app'>
    <List items={dummyData}/>
  </div>
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root);
