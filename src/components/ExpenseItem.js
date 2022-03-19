import "./ExpenseItem.css";

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>19 March 2022</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">283.4</div>
            </div>
        </div>
    )
}

export default ExpenseItem;