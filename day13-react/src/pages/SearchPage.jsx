import "./SearchPage.css";
import Card from "../components/Card";

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
                {cards.map(card => (
                    <Card title={card.title} text={card.text}/>
                ))}
            </div>
        </main>
        <footer>&copy; CopyRight @ Logo</footer>
    </div>
  )
}

export default SearchPage