import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.props.onUpdateSearch(term);
        e.target.value = term;
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Search posts..."
                autoFocus="autoFocus"
                value={this.props.term}
                onChange={this.onUpdateSearch}
            />
        )
    }
}