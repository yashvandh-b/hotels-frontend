import React, {useContext} from 'react'
import {BranchContext} from './context'

const Branch = () => {
    const branch = useContext(BranchContext)
    return (
        <React.Fragment>
            <tr>
                <td>{branch.id}</td>
                <td>{branch.hotel_id}</td>
                <td>{branch.name}</td>
                <td>{branch.location}</td>
                <td>{branch.manager_name}</td>
                <td>{branch.manager_phone}</td>
            </tr>
        </React.Fragment>
    )
}

export default Branch
