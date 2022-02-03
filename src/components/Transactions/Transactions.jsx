import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
import './_transactions.scss';
import ContactItem from './ContactItem/ContactItem.jsx'
import { motion } from "framer-motion"
import { Select, SelectOption } from 'reaselct';

import Cleave from 'cleave.js/react';

import plus from '../../assets/add-new.svg';
import blueCircle from '../../assets/blue-circle-tran.png';
import yellowCircle from '../../assets/yellow-circle-tran.png';
import closeFormImg from '../../assets/close-form.svg';



const Contacts = props => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    // const [lastName, setLastName] = useState('')
    const [amount, setAmount] = useState('')
    
    const [nameEdit, setNameEdit] = useState('')
    const [mailEdit, setMailEdit] = useState('')
    // const [lastNameEdit, setLastNameEdit] = useState('')
    const [amountEdit, setAmountEdit] = useState('')
    const [coinEdit, setCoinEdit] = useState('')
    const [IdEdit, setIdEdit] = useState()

    const [contacts, setContacts] = useState(getInitialContacts())

    // ADD NEW COIN
    const [chosenCurrency, setChosenCurrency] = useState('BTC')


    // DELETE CONTACT
    const delContact = id => {
        setContacts([
            ...contacts.filter(el => {
                return el.id !== id
            })
        ])
    }

    // ADDING NEW CONTACT
    const addContactItem = (name, email, amount, coin) => {
        const newContact = {
            id: uuidv4(),
            name: name,
            email: email,
            // lastName: lastName,
            amount: amount,
            coin: coin,
        }
        setContacts([...contacts, newContact])
    }

    const onChangeName = e => {
        setName(e.target.value)
    }
    const onChangeEmail = e => {
        setEmail(e.target.value)
    }
    // const onChangeLN = e => {
    //     setLastName(e.target.value)
    // }
    const onChangeAmount = e => {
        setAmount(e.target.value)
    }
    const onChangeCoin = e => {
        setChosenCurrency(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(name.trim() && email.trim() && amount.trim()){
            addContactItem(name, email, amount, chosenCurrency)
            setName('')
            setEmail('')
            // setLastName('')
            setAmount('')
            setChosenCurrency('BTC')
        }else{
            alert('Please write an item')
        }
        setAddNew(false)
    }



    // LOCAL STORAGE
    function getInitialContacts() {
        const temp = localStorage.getItem('contacts')
        const savedContacts = JSON.parse(temp)
        return savedContacts || [
            {id: uuidv4(), name: 'Enoch Davies', email: 'enoch.davies@gmail.com', amount: '32543', coin: 'BTC'},
            {id: uuidv4(), name: 'Ivo Mcneill', email: 'ivo.mcneill@hotmail.com', amount: '554951', coin: 'ETH'},
            {id: uuidv4(), name: 'Marco Reus', email: 'marco.reus11@bvb.com', amount: '24441', coin: 'BTC'},
            {id: uuidv4(), name: 'Siana Whelan', email: 'siana.whelan@gmail.com', amount: '325818', coin: 'ADA'},
            {id: uuidv4(), name: 'Dawood Forrest', email: 'dawood@gmail.com', amount: '9192', coin: 'SOL'},
        ]
    }
    useEffect(() => {
        const temp = JSON.stringify(contacts)
        localStorage.setItem('contacts', temp)

    }, [contacts])




    // ADD NEW BUTTON    
    
    const [addNew, setAddNew] = useState(false)
    const [editing, setEditing] = useState(false)
    
    // const addNewMode = {}
    // const viewMode = {}
    const [addNewMode, setAddNewMode] = useState('block')
    const [viewMode, setViewMode] = useState('block')
    const addNewHandler = () => {
        setAddNew(true)
    }
    const removeForm = () => {
        setAddNew(false)
    }
    useEffect(() => {
        if(addNew){
            setAddNewMode('block')
            setEditing(false)
        }else{
            setAddNewMode('none')
        }
    }, [addNew]);




    // EDITING

    const handleEditing = id => {
        setEditing(true)
        contacts.map(el => {
            if(el.id === id){
                setNameEdit(el.name)
                setMailEdit(el.email)
                setAmountEdit(el.amount)
                setCoinEdit(el.coin)
                setIdEdit(el.id)
            }
            return el
        })
    }
    const removeEditingForm = () => {
        setEditing(false)
    }

    useEffect(() => {
        if(editing){
            setViewMode('block')
            setAddNew(false)
        }else{
            setViewMode('none')
        }
    }, [editing]);

    const setUpdate = (updatedInput, id, type) => {
        setContacts(
            contacts.map(el => {
                if(el.id === id){
                    switch (type) {
                        case 'name':
                            el.name = updatedInput
                            break;
                        case 'mail':
                            el.email = updatedInput
                            break;
                        // case 'lastName':
                        //     el.lastName = updatedInput
                        //     break;
                        case 'amount':
                            el.amount = updatedInput
                            break;
                        case 'coin':
                            el.coin = updatedInput
                            console.log('djesi')
                            break;
                        default:
                            break;
                    }
                }
                return el
            })
        )
    }

    const currencies = [
        'BTC', 'ETH',
        'BNB', 'USDT',
        'SOL', 'ADA',
        'XRP', 'LUNA',
        'DOT'
    ]

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div className="contacts-container">

            <img className="blue-circle" src={blueCircle} alt="blue circle" />
            <img className="yellow-circle" src={yellowCircle} alt="yellow circle" />

                <div className="contacts-table-container">
                    <div className="contacts-header">
                        <h2>Transactions</h2>
                        <button onClick={addNewHandler} className="add-contact">
                        <img className="add-new" src={plus} alt="plus"/>
                            Add New
                        </button>
                    </div>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>&nbsp;</th>
                                    <th>Email</th>
                                    <th>&nbsp;</th>
                                    <th>Amount</th>
                                    <th>&nbsp;</th>
                                    <th>Coin</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                contacts ?
                                    contacts.map(el => (
                                        <ContactItem
                                            key={el.id}
                                            contact={el}
                                            deleteContactProps={delContact}
                                            editContactProps={handleEditing}
                                        />
                                    ))
                                    :
                                    ''
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={{display: addNewMode}} className="add-new-container">
                    <div className="add-new-top">
                        <h3>Add new contact</h3>
                        <button onClick={removeForm}>
                            <img src={closeFormImg} alt="close form" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <input className="add-new-input" type="text"
                            placeholder="Name"
                            value={name} 
                            name="Name"
                            onChange={onChangeName}
                        />
                        <input className="add-new-input" type="email"
                            placeholder="E-mail"
                            value={email} 
                            name="email"
                            onChange={onChangeEmail}
                        />
                        {/* <input className="add-new-input" type="number"
                            placeholder="Amount"
                            value={amount} 
                            name="amount"
                            onChange={onChangeAmount}
                        /> */}
                        <Cleave className="add-new-input"
                            placeholder="Amount"
                            value={amount}
                            name="amount"
                            onChange={onChangeAmount}
                            options={{ 
                                numeral: true,
                                numeralThousandsGroupStyle: 'thousand'
                            }}
                        />
                        {/* <input type="text"
                            placeholder="Coin"
                            value={lastName} 
                            name="lastName"
                            onChange={onChangeLN}
                        /> */}
                        <div className="coin-select-wrapper">
                            <Select
                                value={chosenCurrency}
                                onChange={setChosenCurrency}
                                filterable={false}
                                clearable={false}
                                style={{width: '100%'}}
                                >
                                {currencies.map( (el, i) => (<SelectOption key={i} value={el}>{el}</SelectOption>))}
                            </Select>
                        </div>

                        <button className="btn submit">Submit</button>
                    </form>
                </div>

                <div className="edit-form" style={{display: viewMode}} >
                    <div className="add-new-top">
                        <h3>Edit contact</h3>
                        <button onClick={removeEditingForm}>
                            <img src={closeFormImg} alt="close form" />
                        </button>
                    </div>

                    <div className="contact-form">
                        <input className="edit-input" type="text"
                            value={nameEdit}
                            name="Name"
                            onChange={e => {
                                setUpdate(e.target.value, IdEdit, 'name')
                                setNameEdit(e.target.value)
                            }}
                        />
                        <input className="edit-input" type="email"
                            value={mailEdit} 
                            name="E mail"
                            onChange={e => {
                                setUpdate(e.target.value, IdEdit, 'mail')
                                setMailEdit(e.target.value)
                            }}
                        />
                        {/* <input className="edit-input" type="number"
                            value={amountEdit} 
                            name="Amount"
                            onChange={e => {
                                setUpdate(e.target.value, IdEdit, 'amount')
                                setAmountEdit(e.target.value)
                            }}
                        /> */}
                        <Cleave className="edit-input"
                            value={amountEdit}
                            name="amount"
                            onChange={e => {
                                setUpdate(e.target.value, IdEdit, 'amount')
                                setAmountEdit(e.target.value)
                            }}
                            options={{ 
                                numeral: true,
                                numeralThousandsGroupStyle: 'thousand'
                            }}
                        />

                        <div className="coin-select-wrapper">
                            <Select
                                value={coinEdit}
                                onChange={e => {
                                    setUpdate(e, IdEdit, 'coin')
                                    setCoinEdit(e)
                                }}
                                filterable={false}
                                clearable={false}
                                >
                                {currencies.map( (el, i) => (<SelectOption key={i} value={el}>{el}</SelectOption>))}
                            </Select>
                        </div>
                        <button onClick={removeEditingForm} className="btn edit-done">Done</button>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}

export default Contacts