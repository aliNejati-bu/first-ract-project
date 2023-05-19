import './Header.css';

function Header() {
    return (
        <header className='header'>
            <div className="container">
                <h1 className="header__title">
                    Sample List
                </h1>
                <input type="text" className="input" placeholder="keyword" id="search-input"/>
            </div>
        </header>
    );
}

export default Header;