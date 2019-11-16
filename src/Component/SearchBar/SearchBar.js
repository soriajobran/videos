import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: ''};
        this.onInputchange = this.onInputchange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputchange (e) {
        this.setState({ term: e.target.value});
       
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {

        return(
            <div className="search-bar ui segment" style={{marginTop: '40px'}}>
                <form className="ui form" onSubmit={this.onFormSubmit} >
                    <div className="field" >
                        <input type='text' 
                        value={this.state.term} onChange={this.onInputchange}
                        placeholder="Search Video" />
                    </div>
                    
                </form>
            </div>
            
        );
    }
}

export default SearchBar;