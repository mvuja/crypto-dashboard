import React, { useState, useEffect } from "react";
import './_contacts.scss';

const Contacts = () => {
    
    // const [mobileMenu, setMobileMenu] = useState('')

    const links = [
        {
            firstName: 'Marko',
            lastName: 'Vujanovic',
            email: 'vuja@gmail.com',
            phone: '111222333',
        },
        {
            firstName: 'Marko',
            lastName: 'Vujanovic',
            email: 'vuja@gmail.com',
            phone: '111222333',
        },
        {
            firstName: 'Marko',
            lastName: 'Vujanovic',
            email: 'vuja@gmail.com',
            phone: '111222333',
        },
        {
            firstName: 'Marko',
            lastName: 'Vujanovic',
            email: 'vuja@gmail.com',
            phone: '111222333',
        },
    ]


    return (
        <div className="contacts-container">
            <div className="contacts-header">
                <h2>Contacts</h2>
                <button className="add-contact">Add New</button>
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
                        {links.map(link => {
                            return (
                                <tr className='nav-link'>
                                    <td>
                                        {link.firstName}
                                    </td>
                                    <td>
                                        {link.lastName}
                                    </td>
                                    <td>
                                        {link.email}
                                    </td>
                                    <td>
                                        {link.phone}
                                    </td>
                                    <td>
                                        <button>E</button>
                                        <button>D</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Contacts