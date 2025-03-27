import "./SearchPage.css";

const cards = [
    {
        title: "Invitation",
        text: "Your are invited!",
    },
    {
        title: "Notice",
        text: "Please have a look at it",
    }
];
const SearchPage = () => {
  return (
    <div className="search-page">
        <header>Logo</header>
        <main>
            <h2>Search Here..</h2>
            <div>
                <div>
                    <h3>{cards[0].title}</h3>
                    <p>{cards[0].text}</p>
                </div>
                <div>
                    <h3>{cards[1].title}</h3>
                    <p>{cards[1].text}</p>
                </div>
            </div>
        </main>
        <footer>&copy; CopyRight @ Logo</footer>
    </div>
  )
}

export default SearchPage