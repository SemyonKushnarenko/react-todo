import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import styled from 'styled-components';

export default class App extends Component {
    filterData = (
        data = [
            {label: "Make new posts", important: false, like: false, id: "aegdf"},
            {label: "Tap on the star to make post important", important: true, like: false, id: "agwbd"},
            {label: "Double tap to like", important: false, like: true, id: "aegraetrhanetrgdf"},
            {label: "Add new posts", important: true, like: true, id: "aeggdsagfdf"},
            {label: "Search post you need", important: true, like: true, id: "aeggdsff"}
        ]
    ) => {
        const newData = data.filter(item => typeof(item) === 'object');
        const checkedData = newData.filter(item => item.hasOwnProperty('id', 'label', 'important', 'like'));
        return checkedData;
    }

    state = {
        data: this.filterData([
            4,
            undefined,
            {label: "Make new posts", important: false, like: false, id: "aegdf"},
            {label: "Tap on the star to make post important", important: true, like: false, id: "agwbd"},
            {label: "Double tap to like", important: false, like: true, id: "aegraetrhanetrgdf"},
            {label: "Add new posts", important: true, like: true, id: "aeggdsagfdf"},
            {label: "Search post you need", important: true, like: true, id: "aeggdsff"}
        ]),
        term: '',
        filter: 'all'
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
        if (body !== '') {
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
    //поиск строки term в каждом отдельном items[i], и возврат перебранного массива
    searchItems = (items, term) => {
        return items.filter(item => item.label.indexOf(term) > -1);
    }

    filterItems = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else if (filter === 'all') {
            return items;
        }
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const App = styled.div`
            margin: 0 auto;
            max-width: 800px;
        `,
        SearchPanelDiv = styled.div`
            display: flex;
        `;

        const {data, term, filter} = this.state;

        const liked = data.filter(elem => elem.like).length;
        const count = data.length; 

        const visiblePosts = this.filterItems(this.searchItems(data, term), filter);

        return (
            <App>
                <AppHeader
                    liked={liked}
                    count={count}/>
                <SearchPanelDiv>
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                        term={term}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </SearchPanelDiv>
                <PostList 
                    visiblePosts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleLiked={this.onToggleLiked}
                    onToggleImportant={this.onToggleImportant}
                    />
                <PostAddForm onAdd={this.addItem}/>
            </App>
        )
    }
}