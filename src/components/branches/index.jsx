import React, {useEffect, useState} from 'react';
import Branch from './branch';
import axios from 'axios';
import {BranchProvider} from './context'
import {BranchHeader} from './branchComponents'
import { useParams } from 'react-router-dom';


const Branches = () => {

    const {hotel_id} = useParams()
    const [branches, setBranches] = useState([])
    const link = 'http://127.0.0.1:3000/hotels/' + hotel_id + '/branches'

    useEffect( () => {
        axios.get(link)
        .then(response => {
            console.log(response)
            setBranches(response.data) 
        })
        .catch(error => {console.log(error)})
    }, [link])

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
                </div>}
        </div>
    );
};

export default Branches;