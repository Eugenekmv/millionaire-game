import React, { createContext, useState } from 'react'

type ContextProps = {
    isMenuOpen: boolean
    toggleMenuMode: () => void
}

interface Props {
    children: JSX.Element
}

export const MenuContext = createContext<ContextProps>({
    isMenuOpen: false,
    toggleMenuMode: () => null,
})

const NavState: React.FC<Props> = ({ children }) => {
    const [isMenuOpen, toggleMenu] = useState<boolean>(false)

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen)
    }

    return <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>{children}</MenuContext.Provider>
}

export default NavState
