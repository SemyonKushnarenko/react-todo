import React, {Component} from 'react';

import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'like', label: 'Liked'}
    ]

    render() {

		const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
			const clazz = filter === name ? 'btn-info' : 'btn-outline-secondary'
			return (
				<button type='button'
				 	className={`btn ${clazz}`}
					key={name}
					onClick={() => onFilterSelect(name)}>
					{label}</button>
			)
		});

        return (
            <div className="btn-group">
                    {buttons}
            </div>
        )
    }
}