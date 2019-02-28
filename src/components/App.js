import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
    state = {
        images: []
    }

    onSearchSubmit = async (term) => { // needed to convert this to arrow function to bind 'this'.setState (otherwise error)
        // 'GET' to an API 
        const response = await unsplash.get('/search/photos', {
            params: { query: term }, // 1st param = address, 2nd = object w/ custom options for REQ
        })
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar
                    onSubmit={this.onSearchSubmit}
                />
                <ImageList 
                    images={this.state.images}
                />
            </div>
        );
    }
}

export default App;

// 'async' @ line 10 && 'await' @ line 12 ==== take the places of promise (.then() => {})