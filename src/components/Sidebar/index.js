import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements'

function Sidebar({isOpen,toggle}) {
    return (
        <div>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon>
                    <CloseIcon/>
                </Icon>
                <SidebarMenu>
                    <SidebarLink to='/'>Pizzas</SidebarLink>
                    <SidebarLink to='/'>Desserts</SidebarLink>
                    <SidebarLink to='/'>Full Menu</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/'>Order Now</SidebarRoute>
                </SideBtnWrap>
            </SidebarContainer>
        </div>
    )
}

export default Sidebar
