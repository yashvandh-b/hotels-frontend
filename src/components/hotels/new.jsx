import React, { useEffect, useState, useRef } from "react";
import axios from 'axios'
import {SubmitButton, BackButton} from 'components/hotels/hotelComponents'
import {useHistory} from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {hotelsAPILink} from 'components/data-services/api-links';
import {hotelsLink} from 'components/data-services/links';
import {notify} from 'components/notification';

const AddHotel = () => {

    const history = useHistory()
    const [hotel, setHotel] = useState({name: '', phone: '', email: '', user_id: 1})
    const inputRef = useRef(null);

    useEffect( () => {
        console.log(hotel.name, hotel.phone, hotel.email)
    }, [hotel])

    useEffect( () => {
        inputRef.current.focus()
    }, [])


    const onAddHotel = (e) => {
        e.preventDefault()
        console.log(hotel)

            axios.post(hotelsAPILink(), hotel)
            .then((response) => {
                console.log(response);
                const hotel_path = '/hotels/' + response.data.id
                history.push(hotel_path)
                notify("Hotel Added Successfully");
            })
            .catch((errors) => {
                console.log(errors);
                notify("error");
            })
    }

    return (
        <div>
            <h1>Add New Hotel</h1><br />
            <form>
                <label name="name">
                    Name:
                    <input ref={inputRef} name="name" type="text" value={hotel.name} onChange={e => setHotel({...hotel, name: e.target.value})} />
                </label><br /><br />
                <label name="phone">
                    Phone:
                    <input name="phone" type="text" value={hotel.phone} onChange={e => {setHotel({...hotel, phone: parseInt(e.target.value)})}}/>
                </label><br /><br />
                <label name="email">
                    Email:
                    <input name="email" type="text" value={hotel.email} onChange={e => {setHotel({...hotel, email: e.target.value})}} />
                </label><br /><br />
                <SubmitButton type="button" onClick={onAddHotel}> Create Hotel </SubmitButton><br /><br />
                <BackButton href={hotelsLink()}>Back</BackButton><br /><br />
            </form>
            <Formik
                initialValues={{ name: '', phone: '', email: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = '(Email cannot be empty)';
                    } 
                    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = '(Invalid email address)';
                    }

                    if (!values.name){
                        errors.name = '(Name cannot be empty)'
                    }

                    if (!values.phone){
                        errors.phone = '(Phone cannot be empty)'
                    }
                    else if (!/^[0-9]+$/.test(values.phone)){
                        errors.phone = '(Phone must contains only numbers)'
                    }
                    else if (values.phone.length !== 10){
                        errors.phone = '(Phone must be in length 10)'
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

                        <label name="phone">Phone:</label>
                        <Field type="text" name="phone" />
                        <ErrorMessage name="phone" component="div"/><br /><br />
                        
                        <label name="email">Email:</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" /><br /><br />
                        
                        <SubmitButton type="submit" disabled={isSubmitting}>
                            Create Hotel
                        </SubmitButton><br /><br />
                        <BackButton href={hotelsLink()}>Back</BackButton><br /><br />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddHotel;