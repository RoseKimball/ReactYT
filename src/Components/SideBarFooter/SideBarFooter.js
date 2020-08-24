import React from 'react';
import './SideBarFooter.scss';

export function SideBarFooter() {
    return (
        <React.Fragment>
            <div className='footer-block'>
                <div>About Press</div>
                <div>Creator's Advertise Copyright</div>
                <div>Developers + MyTube</div>
                <div>Legal</div>
            </div>
            <div className='footer-block'>
                <div>Terms Privacy</div>
                <div>Policy &amp; Safety</div>
                <div>Test New Features</div>
            </div>
            <div className='footer-block'>
                <div>All Prices Include VAT</div>
            </div>
        </React.Fragment>
    )
};

export default SideBarFooter;