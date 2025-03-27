
const Card = ({name}) => {
    // console.log(abc)
    // console.log(abc.name)
    // const {name} = abc;
    // console.log(name)
    return (
        <div className="card">
            <h3>Hello {name} !</h3>
            <p>Nice to meet you !</p>
        </div>
    )
}

export const Title = "World";
export default Card;

// name doesn't matter