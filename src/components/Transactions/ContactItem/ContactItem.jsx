import React from "react"

const ContactItem = props => {

    // DESTUCTURING
    const {id, firstName, lastName, email, phone} = props.contact

    return <tr className='nav-link' key={id}>
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
                    <button onClick={() => props.editContactProps(id)}>E</button>
                    <button onClick={() => props.deleteContactProps(id)}>D</button>
                </td>
            </tr>
}

export default ContactItem