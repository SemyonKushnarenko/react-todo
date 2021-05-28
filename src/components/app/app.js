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
            4,
            undefined,
            {label: "Gonna learn", important: true, id: "aegdf"},
            {label: "Gonna learn what are props and state", important: false, id: "agwbd"},
            {label: "That's right", important: false, id: "aegraetrhanetrgdf"},
            {label: "This app is working...", important: false, id: "aeggdsagfdf"}
        ]
    }

    maxId = 1;

    deleteItem = (id) => {
        this.setState(({data}) => {

            const newData = data.filter((elem) => {
                if (typeof(elem) === "object" && elem.hasOwnProperty('id')) { 
                    return elem.id !== id
                }
            });

            return {
                data: newData
            };
        });
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        };

        this.setState(({data}) => {
            const newData = [...data, newItem];
            return {
                data: newData
            }
        });
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

        return (
            <App>
                <AppHeader/>
                <SearchPanelDiv>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </SearchPanelDiv>
                <PostList data={data} onDelete={this.deleteItem}/>
                <PostAddForm onAdd={this.addItem}/>
            </App>
        )
    }
}