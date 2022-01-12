import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
import './_contacts.scss';
import ContactItem from './ContactItem/ContactItem.jsx'

const Contacts = () => {
    
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

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
        return savedContacts || []
    }
    useEffect(() => {
        console.log('djesi2')

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

    const handleEditing = () => {
        setEditing(true)
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

    const setUpdate = (updatedTitle, id) => {
        console.log(id)
        setContacts(
            contacts.map(el => {
                if(el.id === id){
                    el.title = updatedTitle
                }
                return el
            })
        )
    }




    return (
        <div className="contacts-container">
            <div className="contacts-table-container">
                <div className="contacts-header">
                    <h2>Contacts</h2>
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
                    value={contacts.firstName} 
                    name="title"
                    onChange={e => {
                        setUpdate(e.target.value, contacts.id)
                    }}
                />
                {/* <input type="text"
                    value={contacts.lastName} 
                    name="title"
                    onChange={e => {
                        setUpdate(e.target.value, e.id)
                    }}
                />
                <input type="email"
                    value={contacts.email} 
                    name="title"
                    onChange={e => {
                        setUpdate(e.target.value, e.id)
                    }}
                />
                <input type="number"
                    value={contacts.phone} 
                    name="title"
                    onChange={e => {
                        setUpdate(e.target.value, e.id)
                    }}
                /> */}
                <button className="btn edit-done">Submit</button>
            </div>
        </div>
    )
}

export default Contacts