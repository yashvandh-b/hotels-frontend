import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
import {SubmitButton, BackButton} from 'components/branches/branchComponents'
import { HOTELS, BRANCHES } from 'components/routes/config'
import {useParams, useHistory} from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {hotelLink} from 'components/data-services/links'
import {newHotelBranchAPILink} from 'components/data-services/api-links'
import {notify} from 'components/notification' 

const AddBranch = () => {

    const history = useHistory()
    const {hotel_id} = useParams()
    const [branch, setBranch] = useState({name: '', location: '', manager_name: '', manager_phone: '', hotel_id: parseInt(hotel_id)})
    const inputRef = useRef(null);

    useEffect( () => {
        console.log(branch)
    }, [branch])

    useEffect( () => {
        inputRef.current.focus()
    }, [])

    const onAddBranch = (e) => {
        e.preventDefault()
        console.log(branch)
        axios.post(newHotelBranchAPILink(hotel_id), branch)
        .then(response => {
            console.log(response)
            const branches_path = HOTELS + '/' + hotel_id + BRANCHES
            history.push(branches_path)
            notify("Branch Added Successfully");
        })
        .catch(errors => {
            console.log(errors);
            notify("errors");
        })
    }

    return (
        <div>
            <h1>Add New Branch</h1><br />
            <form>
                <label name="name">
                    Name:
                    <input ref={inputRef} name="name" type="text" value={branch.name} onChange={e => {setBranch({...branch, name: e.target.value})}}/>
                </label><br /><br />

                <label name="location">
                    Location:
                    <input name="location" type="text" value={branch.location} onChange={e => {setBranch({...branch, location: e.target.value})}} />
                </label><br /><br />

                <label name="manager_name">
                    Manager Name:
                    <input name="manager_name" type="text" value={branch.manager_name} onChange={e => {setBranch({...branch, manager_name: e.target.value})}} />
                </label><br /><br />

                <label name="manager_phone">
                    Manager Phone:
                    <input name="manager_phone" type="text" value={branch.manager_phone} onChange={e => {setBranch({...branch, manager_phone: parseInt(e.target.value)})}}/>
                </label><br /><br />
                <SubmitButton type="button" onClick={onAddBranch}> Create Branch </SubmitButton><br /><br />
                <BackButton href={hotelLink(hotel_id)}>Back</BackButton><br /><br />
            </form>

            <Formik
                initialValues={ {name: '', location: '', manager_name: '', manager_phone: '', hotel_id: parseInt(hotel_id)} }
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = '(Name cannot be empty)';
                    } 

                    if (!values.location){
                        errors.location = '(Location cannot be empty)'
                    }

                    if (!values.manager_name) {
                        errors.manager_name = '(Manager Name cannot be empty)';
                    } 

                    if (!values.manager_phone){
                        errors.manager_phone = '(Phone cannot be empty)'
                    }
                    else if (!/^[0-9]+$/.test(values.manager_phone)){
                        errors.manager_phone = '(Phone must contains only numbers)'
                    }
                    else if (values.manager_phone.length !== 10){
                        errors.manager_phone = '(Phone must be in length 10)'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label name="name">Name:</label>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="div"/><br /><br />

                        <label name="location">Location:</label>
                        <Field type="text" name="location" />
                        <ErrorMessage name="location" component="div"/><br /><br />

                        <label name="manager_name">Manager Name:</label>
                        <Field type="text" name="manager_name" />
                        <ErrorMessage name="manager_name" component="div"/><br /><br />

                        <label name="manager_phone">Manager Phone:</label>
                        <Field type="text" name="manager_phone" />
                        <ErrorMessage name="manager_phone" component="div"/><br /><br />
                        
                        
                        <SubmitButton type="submit" disabled={isSubmitting}>
                            Create Branch
                        </SubmitButton><br /><br />
                        <BackButton href={hotelLink(hotel_id)}>Back</BackButton><br /><br />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddBranch;