import React, { Component } from 'react'

import { ExampleComponent, TuMadre } from 'piti-react-library'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
        <TuMadre textToDisplay='ja ja ja'/>
      </div>
    )
  }
}
