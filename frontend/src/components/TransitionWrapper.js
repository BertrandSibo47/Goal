// src/components/TransitionWrapper.js
import React, { useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import './TransitionWrapper.css';

const TransitionWrapper = ({ children }) => {
    const location = useLocation();
    const nodeRef = useRef(null);

    return (
        <TransitionGroup component={null}>
            <CSSTransition
                key={location.key}
                nodeRef={nodeRef}
                classNames="slide"
                timeout={300}
                unmountOnExit
            >
                <div ref={nodeRef}>{children}</div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default TransitionWrapper;
