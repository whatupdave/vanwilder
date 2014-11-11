// var superagent = require('superagent')

var Home = React.createClass({
  getInitialState: function() {
    return { count: 0 }
  },

  render: function() {
    return <div className="container px2">
      <header className="py3 mb3 border-bottom" onClick={this.handleClick}>
        <h1 className="avenir md-h1 lg-h1 caps m0">Oh yeah! {this.state.count}</h1>
      </header>

      <div>
        <a href="/p/whatupdave">@whatupdave</a>
      </div>
    </div>
  },

  handleClick: function() {
    this.setState({count: this.state.count + 1})
  }
})

window.Home = Home
