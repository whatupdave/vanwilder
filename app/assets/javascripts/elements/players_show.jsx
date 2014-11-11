var PlayersShow = React.createClass({
  render: function() {
    return <div className="container px2">
      <header className="py3 mb3 border-bottom" onClick={this.handleClick}>
        <h1 className="avenir md-h1 lg-h1 caps m0">
          <a href="/">Home</a> >
          @whatupdave
        </h1>
      </header>
    </div>
  }
})

window.PlayersShow = PlayersShow
