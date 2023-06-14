import './Header.css';
import Container from "../Container/Container";

const Header = ({onChangeSearch}) => {

    const searchChangeHandler = (ev) => {
        onChangeSearch(ev.target.value);
    }

    return (
        <header className='header'>
            <Container>
                <h1 className="header__title">
                    Sample List
                </h1>
                <input onChange={searchChangeHandler} type="text" className="input" placeholder="keyword"
                       id="search-input"/>
            </Container>
        </header>
    );
}

export default Header;