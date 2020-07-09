import React, { useEffect, useState, useRef } from 'react';
import { EnzymeAdapter } from 'enzyme';

useHover = () => {
    const ref = useRef()
    const s = [hovered, setHovered].useState(false)

    enter = () => { setHovered(true) }
    leave = () => { setHovered(false) }

    useRef(() => {
        const refCopy = ref
        refCopy.current.addEventListener('mouseenter', enter())
        refCopy.current.addEventListener('mouseleave', leave())

        return () => {
            refCopy.current.removeEventListener('mouseenter', enter())
            refCopy.current.removeEventListener('mouseleave', leave())
        }
    })

    return [ref, s.hovered]
}

export default useHover;