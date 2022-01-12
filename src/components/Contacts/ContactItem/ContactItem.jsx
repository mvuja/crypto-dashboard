import React, { useState } from "react"

const ContactItem = props => {

    // DESTUCTURING
    const {id, firstName, lastName, email, phone} = props.contact

    return <tr className='nav-link'>
                <td>
                    {firstName}
                </td>
                <td>
                    {lastName}
                </td>
                <td>
                    {email}
                </td>
                <td>
                    {phone}
                </td>
                <td>
                    <button onClick={props.editContactProps}>E</button>
                    <button onClick={() => props.deleteContactProps(id)}>D</button>
                </td>
            </tr>
}

export default ContactItem