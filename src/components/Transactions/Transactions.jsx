import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
import './_transactions.scss';
import ContactItem from './ContactItem/ContactItem.jsx'
import { motion } from "framer-motion"

const Contacts = () => {
    
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    
    const [firstNameEdit, setFirstNameEdit] = useState('')
    const [lastNameEdit, setLastNameEdit] = useState('')
    const [mailEdit, setMailEdit] = useState('')
    const [phoneEdit, setPhoneEdit] = useState('')
    const [IdEdit, setIdEdit] = useState()

    const [contacts, setContacts] = useState(getInitialContacts())

    // DELETE CONTACT
    const delContact = id => {
        setContacts([
            ...contacts.filter(el => {
                return el.id !== id
            })
        ])
    }

    // ADDING NEW CONTACT
    const addContactItem = (firstName, lastName, email, phone) => {
        const newContact = {
            id: uuidv4(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
        }
        setContacts([...contacts, newContact])
    }

    const onChangeFN = e => {
        setfirstName(e.target.value)
    }
    const onChangeLN = e => {
        setLastName(e.target.value)
    }
    const onChangeE = e => {
        setEmail(e.target.value)
    }
    const onChangeP = e => {
        setPhone(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(firstName.trim() && lastName.trim() && email.trim() && phone.trim()){
            addContactItem(firstName, lastName, email, phone)
            setfirstName('')
            setLastName('')
            setEmail('')
            setPhone('')
        }else{
            alert('Please write an item')
        }
        setAddNew(false)
    }



    // LOCAL STORAGE
    function getInitialContacts() {
        const temp = localStorage.getItem('contacts')
        const savedContacts = JSON.parse(temp)
        return savedContacts && [
            {id: '1', firstName: 'Marko', lastName: 'Vujanović', email: 'mvuja@gmail.com', phone: '3254325'},
            {id: '2', firstName: 'Marko', lastName: 'Vujanović', email: 'mvuja@gmail.com', phone: '3254325'},
            {id: '3', firstName: 'Marko', lastName: 'Vujanović', email: 'mvuja@gmail.com', phone: '3254325'},
            {id: '4', firstName: 'Marko', lastName: 'Vujanović', email: 'mvuja@gmail.com', phone: '3254325'}
        ]
    }
    useEffect(() => {
        const temp = JSON.stringify(contacts)
        localStorage.setItem('contacts', temp)

    }, [contacts])




    // ADD NEW BUTTON
    const [addNew, setAddNew] = useState(false)
    const addNewMode = {}
    const addNewHandler = () => {
        setAddNew(true)
    }
    const removeForm = () => {
        setAddNew(false)
    }
    if(addNew){
        addNewMode.display = 'block'
    }else{
        addNewMode.display = 'none'
    }



    // EDITING
    const [editing, setEditing] = useState(false)

    const handleEditing = id => {
        setEditing(true)
        contacts.map(el => {
            if(el.id === id){
                setFirstNameEdit(el.firstName)
                setLastNameEdit(el.lastName)
                setMailEdit(el.email)
                setPhoneEdit(el.phone)
                setIdEdit(el.id)
            }
            return el
        })
    }
    const removeEditingForm = () => {
        setEditing(false)
    }
    const viewMode = {}

    if(editing){
        viewMode.display = 'block'
    }else{
        viewMode.display = 'none'
    }

    const setUpdate = (updatedInput, id, type) => {
        setContacts(
            contacts.map(el => {
                if(el.id === id){
                    switch (type) {
                        case 'firstName':
                            el.firstName = updatedInput
                            break;
                        case 'lastName':
                            el.lastName = updatedInput
                            break;
                        case 'mail':
                            el.email = updatedInput
                            break;
                        case 'phone':
                            el.phone = updatedInput
                            break;                    
                        default:
                            break;
                    }
                }
                return el
            })
        )
    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div className="contacts-container">
                <div className="contacts-table-container">
                    <div className="contacts-header">
                        <h2>Transactions</h2>
                        <button onClick={addNewHandler} className="add-contact">Add New</button>
                    </div>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map(el => (
                                    <ContactItem
                                        key={el.id}
                                        contact={el}
                                        deleteContactProps={delContact}
                                        editContactProps={handleEditing}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={addNewMode} className="add-new-container">
                    <div className="add-new-top">
                        <h3>Add new contact</h3>
                        <button onClick={removeForm}>X</button>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <input type="text"
                            placeholder="First Name"
                            value={firstName} 
                            name="firstName"
                            onChange={onChangeFN}
                        />
                        <input type="text"
                            placeholder="Last Name"
                            value={lastName} 
                            name="lastName"
                            onChange={onChangeLN}
                        />
                        <input type="email"
                            placeholder="E-mail"
                            value={email} 
                            name="email"
                            onChange={onChangeE}
                        />
                        <input type="number"
                            placeholder="Phone"
                            value={phone} 
                            name="phone"
                            onChange={onChangeP}
                        />
                        <button className="btn submit">Submit</button>
                    </form>
                </div>

                <div className="edit-form" style={viewMode}>
                    <div className="add-new-top">
                        <h3>Edit contact</h3>
                        <button onClick={removeEditingForm}>X</button>
                    </div>

                    <input type="text"
                        value={firstNameEdit}
                        name="First Name"
                        onChange={e => {
                            setUpdate(e.target.value, IdEdit, 'firstName')
                            setFirstNameEdit(e.target.value)
                        }}
                    />
                    <input type="text"
                        value={lastNameEdit} 
                        name="Last Name"
                        onChange={e => {
                            setUpdate(e.target.value, IdEdit, 'lastName')
                            setLastNameEdit(e.target.value)
                        }}
                    />
                    <input type="email"
                        value={mailEdit} 
                        name="E mail"
                        onChange={e => {
                            setUpdate(e.target.value, IdEdit, 'mail')
                            setMailEdit(e.target.value)
                        }}
                    />
                    <input type="number"
                        value={phoneEdit} 
                        name="Phone"
                        onChange={e => {
                            setUpdate(e.target.value, IdEdit, 'phone')
                            setPhoneEdit(e.target.value)
                        }}
                    />
                    <button onClick={removeEditingForm} className="btn edit-done">Done</button>
                </div>
            </div>
        </motion.div>

    )
}

export default Contacts