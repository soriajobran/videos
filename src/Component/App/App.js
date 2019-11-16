import React from 'react';
import youtube from '../youtube';
import SearchBar from '../SearchBar/SearchBar';
import VideoDetail from '../VideoDetail/VideoDetail';
import VideoList from '../VideoList/VideoList'

class App extends React.Component {
  state = { videos: [], selectedVideo: '' };

  componentDidMount() {

    const search = ['buildings', 'love', 'flowers', 'trees', 'sunset'];
    const randomSearch = Math.floor(Math.random() * search.length)
    const submitSearch = search[randomSearch];

    this.onTermSubmit(submitSearch);
  }

  onTermSubmit = async (term) => {
   const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items.length && response.data.items[0]
    })
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  render() {
    return (
      <div className="ui container" >
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect}
              videos={this.state.videos} />
            </div>
            
          </div>
        </div>
      </div>
      
    );
  }
  
}

export default App;
