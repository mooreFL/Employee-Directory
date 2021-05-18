import React from 'react'


const Header = () => {
    const styles = {
        header: {
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            justifyContent: 'center'
        }
    }
    
    return (
        <div className='header' style={styles.header}>
            <h1>Directory</h1>
        </div>
    )
}

export default Header;
