import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Branch from './branch';
import {BranchProvider} from 'components/branches/branchContext';
import {BranchHeader, BackButton} from 'components/branches/branchComponents';
import {branchesAPILink} from 'components/data-services/api-links'
import {hotelsLink} from 'components/data-services/links'



const Branches = () => {

    const {hotel_id} = useParams()
    const [branches, setBranches] = useState([])

    useEffect( () => {
        axios.get(branchesAPILink(hotel_id))
        .then(response => {
            console.log(response)
            setBranches(response.data) 
        })
        .catch(error => {console.log(error)})
    }, [hotel_id])

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
                <BackButton href={hotelsLink()}>Back</BackButton>
        </div>
    );
};

export default Branches;