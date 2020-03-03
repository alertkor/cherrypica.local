import React, {useState} from 'react';
import styled from 'styled-components';

const ScrollToTopIcon = require('../../assets/files/icon/ico-m-scroll-top.svg');

const ScrollIconContainer = styled.div`
    display: none;
    position: fixed;
    z-index: 1;
    height: 4rem;
    width: 4rem;
    border-radius: 24px;
    bottom: 0;
    right: 0;
    margin-bottom: 2rem;
    margin-right: 1rem;
    cursor: pointer;
    
    ${({active}) => active && 'display: block;'}
`;

function ScrollToTop() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}


export default function MobileQuickMenu(props) {
    const [active, setActive] = useState(false);
    const [currentSize, setCurrentSize] = useState(document.documentElement.scrollTop);

    return (
        <React.Fragment>
            {window.addEventListener('scroll', () => {
                setCurrentSize(document.documentElement.scrollTop);
                if (currentSize >= 200) {
                    setActive(true);
                } else {
                    setActive(false);
                }
            })}
            <ScrollIconContainer
                active={active}
                onClick={() => ScrollToTop()}>
                <img alt="scroll-top-top" src={ScrollToTopIcon}/>
            </ScrollIconContainer>
        </React.Fragment>
    )
};