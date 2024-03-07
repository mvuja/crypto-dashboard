import React from "react"
import { useEffect } from "react/cjs/react.development"

const ContactItem = props => {

    // DESTUCTURING
    const {id, name, email, coin, amount} = props.contact


    return <tr className='nav-link' key={id}>
                <td>
                    {name}
                </td>
                <td>
                    <div className="line"></div>
                </td>
                <td>
                    {email}
                </td>
                <td>
                <div className="line"></div>
                </td>
                <td>
                    ${amount ? amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ''}
                </td>
                <td>
                    <div className="line"></div>
                </td>
                <td>
                    {coin}
                </td>
                <td>
                    <button className="edit-btn" onClick={() => props.editContactProps(id)}>
                    <svg className="edit-svg" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_b_156_899)">
                        <circle cx="24.6522" cy="24.6522" r="24.6522" fill="#04040B"/>
                        </g>
                        <path d="M21.9138 25.1087V27.5055C21.9138 27.9467 22.2711 28.3044 22.7127 28.3044H25.1094C25.3232 28.3044 25.5284 28.2185 25.6789 28.0656L33.9942 19.6135C34.4467 19.1606 34.6964 18.5586 34.6964 17.9185C34.6964 17.2784 34.4467 16.6764 33.9942 16.224C33.0588 15.2893 31.5389 15.2893 30.6097 16.2193L22.1525 24.5392C21.9996 24.6894 21.9138 24.8946 21.9138 25.1087ZM23.5116 25.4434L31.7348 17.3536C32.0469 17.0423 32.5524 17.0419 32.8645 17.354C33.0159 17.5046 33.0985 17.7051 33.0985 17.9185C33.0985 18.1319 33.0159 18.3324 32.8598 18.488L24.7747 26.7065H23.5116V25.4434ZM34.6964 24.3098V30.7011C34.6964 32.9036 32.9043 34.6957 30.7018 34.6957H19.517C17.3146 34.6957 15.5225 32.9036 15.5225 30.7011V19.5163C15.5225 17.3139 17.3146 15.5218 19.517 15.5218H25.9083C26.3499 15.5218 26.7072 15.8795 26.7072 16.3207C26.7072 16.7619 26.3499 17.1196 25.9083 17.1196H19.517C18.1954 17.1196 17.1203 18.1947 17.1203 19.5163V30.7011C17.1203 32.0228 18.1954 33.0978 19.517 33.0978H30.7018C32.0235 33.0978 33.0985 32.0228 33.0985 30.7011V24.3098C33.0985 23.8686 33.4559 23.5109 33.8975 23.5109C34.3391 23.5109 34.6964 23.8686 34.6964 24.3098Z" fill="white"/>
                        <defs>
                        <filter id="filter0_b_156_899" x="-4" y="-4" width="57.3047" height="57.3044" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImage" stdDeviation="2"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_156_899"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_156_899" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                    </button>

                    <button className="del-btn" onClick={() => props.deleteContactProps(id)}>
                    <svg className="del-svg" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25.3485" cy="24.6522" r="24.6522" fill="#04040B"/>
                        <path d="M27.9375 30.5122C28.3225 30.5122 28.6347 30.2 28.6347 29.815V22.8427C28.6347 22.4577 28.3225 22.1454 27.9375 22.1454C27.5525 22.1454 27.2402 22.4577 27.2402 22.8427V29.815C27.2402 30.2 27.5525 30.5122 27.9375 30.5122Z" fill="white"/>
                        <path d="M23.0566 30.5122C23.4416 30.5122 23.7538 30.2 23.7538 29.815V22.8427C23.7538 22.4577 23.4416 22.1454 23.0566 22.1454C22.6716 22.1454 22.3594 22.4577 22.3594 22.8427V29.815C22.3594 30.2 22.6716 30.5122 23.0566 30.5122Z" fill="white"/>
                        <path d="M28.2858 16.9163C28.6709 16.9163 28.9831 16.604 28.9831 16.219C28.9831 15.834 28.6709 15.5218 28.2858 15.5218H22.708C22.323 15.5218 22.0107 15.834 22.0107 16.219C22.0107 16.604 22.323 16.9163 22.708 16.9163H28.2858Z" fill="white"/>
                        <path d="M17.8271 17.6135C17.4421 17.6135 17.1299 17.9257 17.1299 18.3107C17.1299 18.6957 17.4421 19.0079 17.8271 19.0079H18.5243V31.837C18.5243 33.4127 19.8073 34.6957 21.383 34.6957H29.6104C31.186 34.6957 32.469 33.4128 32.469 31.837V19.0079H33.1662C33.5513 19.0079 33.8635 18.6957 33.8635 18.3107C33.8635 17.9257 33.5513 17.6135 33.1662 17.6135H31.7718H19.2216H17.8271ZM31.0745 19.0079V31.837C31.0745 32.6458 30.4191 33.3012 29.6104 33.3012H21.383C20.5742 33.3012 19.9188 32.6458 19.9188 31.837V19.0079H31.0745Z" fill="white"/>
                    </svg>
                    </button>
                </td>
            </tr>
}

export default ContactItem