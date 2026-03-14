import './filters.css'

import type { FilterType } from '../../types/filter';

type Props = {
    filter: FilterType,
    changeFilter: (value: FilterType) => void
}

export function Filters({filter, changeFilter}: Props) {

    return (
        <div className="filters">
            <button className={filter === 'all' ? 'active' : ''} onClick={() => changeFilter('all')}>All</button>
            <button className={filter === 'active' ? 'active' : ''} onClick={() => changeFilter('active')}>Active</button>
            <button className={filter === 'completed' ? 'active' : ''} onClick={() => changeFilter('completed')}>Completed</button>
        </div>
    )
}