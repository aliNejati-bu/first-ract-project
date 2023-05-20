import './Header.css';
import Container from "../Container/Container";

const Header = () => {
    return (
        <header className='header'>
            <Container>
                <h1 className="header__title">
                    Sample List
                </h1>
                <input type="text" className="input" placeholder="keyword" id="search-input"/>
            </Container>
        </header>
    );
}

export default Header;