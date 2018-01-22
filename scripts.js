// Movies data
var movies = [{
  id: 1,
  title: 'Plump Fiction',
  desc: 'Comedy',
  img: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Plump_Fiction.jpg/215px-Plump_Fiction.jpg'
}, {
  id: 2,
  title: 'Kill Bill',
  desc: 'Kinda different',
  img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTczMGFiOWItMjA3Mi00YTU5LWIwMDgtYTEzNjRkNDkwMTE2XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg'
}, {
  id: 3,
  title: 'Natural Born Killers',
  desc: 'Mad cool',
  img: 'https://upload.wikimedia.org/wikipedia/en/1/19/NBKillaz.jpg'
}, {
  id: 4,
  title: 'Hydrozagadka',
  desc: 'Another level',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Quotation_from_film_%27Hydrozagadka%27_advertising_XXXIV_Polish_Film_Festival_in_Gdynia_2009_-_1.jpg/800px-Quotation_from_film_%27Hydrozagadka%27_advertising_XXXIV_Polish_Film_Festival_in_Gdynia_2009_-_1.jpg'
}];

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  render: function() {
    return (React.createElement('li', {},
      React.createElement(MovieTitle, {
        title: this.props.movie.title
      }),
      React.createElement(MovieDescription, {
        desc: this.props.movie.desc
      }),
      React.createElement(MovieImage, {
        img: this.props.movie.img
      })
    ));
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('h2', {}, this.props.title);
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('p', {}, this.props.desc);
  }
});

var MovieImage = React.createClass({
  propTypes: {
    img: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('img', {
      src: this.props.img
    });
  }
});

var moviesElements = movies.map(function(movie) {
  return (React.createElement(Movie, {
    key: movie.id,
    movie: movie
  }))
});

var MovieList = React.createClass({
  render: function() {
    return (React.createElement('ul', {}, moviesElements))
  }
});

var element = React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement(MovieList, {})
);

ReactDOM.render(element, document.getElementById('app'));