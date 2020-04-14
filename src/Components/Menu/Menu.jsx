import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Clock from "../Clock/Clock";
import { withNamespaces } from 'react-i18next';
import i18n from "../../i18n";
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../Redux/actions/auth';

const Menu = ({ t }) => {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const token = useSelector( state => state.auth.token !== null);
    const dispatch = useDispatch()

    let navLinks = (
        <Nav className="ml-auto">
            <NavItem className="mr-auto"><Clock/></NavItem>
            <LinkContainer as={Button}  variant="outline-dark" to="/login" className="mr-2">
                <NavItem>{t('Log in')}</NavItem>
            </LinkContainer>
            <NavItem as={Button} onClick={() => changeLanguage('pl')} variant="outline-info" className="mr-2">PL</NavItem>
            <NavItem as={Button} onClick={() => changeLanguage('en')} variant="outline-info" className="mr-2">EN</NavItem>
        </Nav>
    )

    if (token) {
        navLinks = (
            <>
                <Nav className="mr-auto">
                <LinkContainer as={Button}  variant="outline-dark" to="/stanowiska" className="ml-2">
                    <NavItem>{t('StandsBtn')}</NavItem>
                </LinkContainer>
                <LinkContainer as={Button}  variant="outline-dark" to="/wanny" className="ml-2">
                    <NavItem>{t('BathsBtn')}</NavItem>
                </LinkContainer>
                <LinkContainer as={Button}  variant="outline-dark" to="/archiwum" className="ml-2">
                <NavItem>{t('ArchiveBtn')}</NavItem>
                </LinkContainer>
                <LinkContainer as={Button}  variant="outline-dark" to="/klient" className="ml-2">
                    <NavItem>{t('ClientsBtn')}</NavItem>
                </LinkContainer>
                </Nav>
                <Nav>
                    <NavItem className="mr-2"><Clock/></NavItem>
                    <LinkContainer exact to="/" variant="outline-danger" className="mr-2">
                        <NavItem as={Button}  onClick={() => dispatch(actions.logout())}>{t('Log out')}</NavItem>
                    </LinkContainer>
                    <NavItem as={Button} onClick={() => changeLanguage('pl')} variant="outline-info" className="mr-2">PL</NavItem>
                    <NavItem as={Button} onClick={() => changeLanguage('en')} variant="outline-info" className="mr-2">EN</NavItem>
                </Nav>
            </>
        )
    }

    return (
        <Navbar id="menu" bg="light" expand="md" collapseOnSelect>
            <Navbar.Brand>
                {t('Programs name')}
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                {navLinks}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withNamespaces('Menu')(Menu);
