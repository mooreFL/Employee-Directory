import React from 'react'


const Header = () => {
    const styles = {
        header: {
            backgroundColor: 'darkblue',
            borderBottom: 'solid red',
            height: "100px"
        },
        h1: {
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
        },
        p: {
            color: 'white',
            display: 'flex',
            justifyContent: 'center'
        }
    }
    
    return (
        <div className='header' style={styles.header}>
            <h1 style={styles.h1}>Employee Directory</h1>
            
            <p style={styles.p}>Click the name button to sort alphabetically in ascending or descending order.</p>
        </div>
    )
}

export default Header;
