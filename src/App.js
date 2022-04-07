import React, { Component } from 'react'
import axios from 'axios'
import "./App.css"
import Card from './components/Card'
class App extends Component {
  //1
  state = {
    data: [],
    loading: true,
    error: false
  }

  // 1. install axios DONE
  // 2. we need to have state = data = [] DONE
  // 3. we need to fetch the starwars data Done
  // 4. we need to display the data that we fetched Done
  // 5. add some Loading 
  // 6. add some error handling

  componentDidMount() {
    axios.get("https://swapi.dev/api/people").then(responseFromApi => {
      // 3
      this.setState({
        data: responseFromApi.data.results,
        loading: false
      })
    }).catch(error => {
      this.setState({
        loading: false,
        error: true
      })
    })
  }

  render() {
    // 2
    // 4
    console.log("state", this.state);



    return (
      <div>
        <h1>Star Wars App</h1>
        {this.state.error ? <h1>"hey our website is down at the moment try again later"</h1> : ""}
        {
          this.state.loading ? <div>Loading.....</div> :
            <div className='container'>
              {
                this.state.data.map(element=> {
                  return (
                    <Card character={element} />
                  )
                })
              }
            </div>
        }

      </div>
    )
  }
}

export default App
