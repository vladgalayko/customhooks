import React from 'react';
import { useRef } from 'react';
import useHover from '../hooks/useHover';

const Hover = () => {
    const ref = useRef()
    const isHovering = useHover(ref)
    
    return (
        <div ref={ref} style={{width: 200, height: 200, background: isHovering ? 'red' : 'blue'}}>
            
        </div>
    );
};

export default Hover;