import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

    const data = [
        4,
        undefined,
        {label: "Gonna learn", important: true, id: "aegdf"},
        {label: "Gonna learn what are props and state", important: false, id: "agwbd"},
        {label: "That's right", important: false, id: "aegraetrhanetrgdf"},
        {label: "This app is working...", important: false, id: "aeggdsagfdf"}
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data} />
            <PostAddForm/>
        </div>
    )
}

export default App;