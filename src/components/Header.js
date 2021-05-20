import React from 'react'


const Header = () => {
    const styles = {
        header: {
            backgroundColor: 'darkblue',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            borderBottom: 'solid red',
            height: "100px"
        }
    }
    
    return (
        <div className='header' style={styles.header}>
            <h1>Employee Directory</h1>
        </div>
    )
}

export default Header;
