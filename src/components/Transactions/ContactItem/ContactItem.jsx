import React from "react"

const ContactItem = props => {

    // DESTUCTURING
    const {id, name, email, coin, amount} = props.contact

    return <tr className='nav-link' key={id}>
                <td>
                    {name}
                </td>
                <td>
                    {email}
                </td>
                <td>
                    {amount}
                </td>
                <td>
                    {coin}
                </td>
                <td>
                    <button onClick={() => props.editContactProps(id)}>E</button>
                    <button onClick={() => props.deleteContactProps(id)}>D</button>
                </td>
            </tr>
}

export default ContactItem