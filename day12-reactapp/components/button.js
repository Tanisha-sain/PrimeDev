export const Button = ({ children, color }) => {
    console.log(children)
    return (
        <button className={color}>{children}</button>
    )
}