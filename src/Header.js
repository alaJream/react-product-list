import './Header.css'

function Header(props) {
    // const title = props.title
    // const productCount = props.productCount
    // const categoryCount = props.categoryCount
    const { title, productCount, categoryCount } = props
    return (
        <div className="Header">
            <h1>{title}</h1>
            <p>Products Count: {productCount}</p>
            <p>Category Count: {categoryCount}</p>
        </div>
    )
}

export default Header