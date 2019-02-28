import React from 'react';

// NO api requests in SearchBar >>> do this in App.js
class SearchBar extends React.Component {
    state = { term: '' }

    onFormSubmit = (event) => { // arrow function BINDS 'this' to SearchBar (otherwise we get 'undefined.state.term')
        event.preventDefault(); // prevents AUTO submit (when user hits 'enter') that would auto-refresh
        this.props.onSubmit(this.state.term) // calls PROPS 'onSubmit' from App.js (not line 15 'onSubmit')
    }

    render() { // happens 1st >>> happens 3rd
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} // happens 4th (shoves what you typed into the input)
                                // 'value' makes this a CONTROLLED input
                            onChange={(e) => this.setState({ term: e.target.value })} // happens 2nd
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;

// when a user types + hits 'enter' 
    // >> onSubmit() [line 15] 
        // >> onFormSubmit() [line 7] 
            // >> this.props.onSubmit [line 9]
                // >> onSearchSubmit [** App.js line 6 **]