import React, {useContext} from 'react'
import { BranchContext } from 'components/branches/branchContext'
import { DeleteButton } from 'components/branches/branchComponents'
import axios from 'axios'
import {deleteBranchLink} from 'components/data-services/api-links';

const Branch = () => {
    const branch = useContext(BranchContext)

    const DeleteBranch = (e) => {
        console.log(branch)
        axios.delete(deleteBranchLink(branch.id))
        .then( (response) => {
            console.log(response)
        })
        .catch( (errors) => {
            console.log(errors)
        })
    }

    return (
        <React.Fragment>
            <tr>
                <td>{branch.id}</td>
                <td>{branch.hotel_id}</td>
                <td>{branch.name}</td>
                <td>{branch.location}</td>
                <td>{branch.manager_name}</td>
                <td>{branch.manager_phone}</td>
                <td><DeleteButton onClick={DeleteBranch} >Delete</DeleteButton> </td>
            </tr>
        </React.Fragment>
    )
}

export default Branch
