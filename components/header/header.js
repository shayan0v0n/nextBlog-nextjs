import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Link from 'next/link'
import headerStyle from "./header.module.scss"

const header = () => {
    return (
        <header>
            <Navbar className={headerStyle.headerNavbar}  expand="md">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Item>
                            <Link href="/" passHref>
                                <Nav.Link>صفحه اصلی</Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link href="/blogs" passHref>
                                <Nav.Link>مقالات</Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link href="/content-creator" passHref>
                                <Nav.Link>مقاله نویسان</Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link href="/new-blogs" passHref>
                                <Nav.Link>ساخت مقاله جدید</Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link href="/contact-us" passHref>
                                <Nav.Link>ارتباط با ما</Nav.Link>
                            </Link>
                        </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand>نکست بلاگ</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    )
}

export default header;