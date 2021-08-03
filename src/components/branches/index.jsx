import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Branch from './branch';
import {BranchProvider} from 'components/branches/branchContext';
import {BranchHeader, BackButton} from 'components/branches/branchComponents';
import {LOCALHOST, API_LOCALHOST, HOTELS, BRANCHES} from 'components/routes/config'



const Branches = () => {

    const {hotel_id} = useParams()
    const [branches, setBranches] = useState([])
    const branch_link = API_LOCALHOST + HOTELS + '/' + hotel_id + BRANCHES
    const hotel_link = LOCALHOST + HOTELS + '/' + hotel_id

    useEffect( () => {
        axios.get(branch_link)
        .then(response => {
            console.log(response)
            setBranches(response.data) 
        })
        .catch(error => {console.log(error)})
    }, [branch_link])

    return (
        <div>
            {branches.length === 0 ? <p>No Branches</p>  : 
                <div>
                    <h1>Available Branches</h1>
                    <table>
                        <BranchHeader />
                        <tbody>
                            {branches.map(branch => <BranchProvider key={branch.id} value={branch}><Branch key={branch.id} /></BranchProvider>)}
                        </tbody>
                    </table>
                </div>}<br />
                <BackButton href={hotel_link}>Back</BackButton>
        </div>
    );
};

export default Branches;