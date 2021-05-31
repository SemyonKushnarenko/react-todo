import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import styled from 'styled-components';

export default class App extends Component {
    state = {
        data: [
            {label: "Gonna learn", important: true, like: false, id: "aegdf"},
            {label: "Gonna learn what are props and state", important: false, like: false, id: "agwbd"},
            {label: "That's right", important: false, like: false, id: "aegraetrhanetrgdf"},
            {label: "This app is working...", important: false, like: false, id: "aeggdsagfdf"}
        ]
    }

    maxId = 1;

    deleteItem = (id) => {
        this.setState(({data}) => {
            const newData = data.filter(elem => elem.id !== id);
            return {
                data: newData
            };
        });
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            like: false,
            id: this.maxId++
        };

        this.setState(({data}) => {
            const newData = [...data, newItem];
            return {
                data: newData
            }
        });
    }

    onToggle = (id, whatIsToggled) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const notToggledItem = data[index];
            const toggledItem = {...notToggledItem, [whatIsToggled]: !notToggledItem[whatIsToggled]};

            const newData = [...data.slice(0, index), toggledItem, ...data.slice(index + 1)];
            return {
                data: newData
            }
        });
    }

    onToggleImportant = (id) => {
        this.onToggle(id, 'important');
    } 

    onToggleLiked = (id) => {
        this.onToggle(id, 'like');
    }

    render() {
        const App = styled.div`
            margin: 0 auto;
            max-width: 800px;
        `,
        SearchPanelDiv = styled.div`
            display: flex;
        `;

        const {data} = this.state;

        const liked = data.filter(elem => elem.like).length;
        const count = data.length; 

        return (
            <App>
                <AppHeader
                    liked={liked}
                    count={count}/>
                <SearchPanelDiv>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </SearchPanelDiv>
                <PostList 
                    data={data}
                    onDelete={this.deleteItem}
                    onToggleLiked={this.onToggleLiked}
                    onToggleImportant={this.onToggleImportant}
                    />
                <PostAddForm onAdd={this.addItem}/>
            </App>
        )
    }
}