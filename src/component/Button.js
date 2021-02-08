import React, {Component} from 'react';
import styles from 'styled-components'
export const ButtonContainer = styles.button`
text-transform:capitalize;
font-size: 1.4em;
background:transparent;
border:0.05em solid var(--lightBlue);
color:var(--lightBlue);
border-radius:0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover {
    background: var(--lightBlue);
    color:var(--mainBlue);
}
&:focus {
    outline: none;
}
`