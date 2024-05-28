import React from 'react'

function Header() {
    return (
        <div className="header-container">
                <div className="header-icon">
                    MOVIECRONY
                </div>
                <div className="header-search">
                    <input type="text" placeholder="Filter over 1,000,000 Movies" />
                </div>
            
        </div>
    )
}

export default Header
