import './index.css'

const TransactionItem = props => {
  const {item, handleTransactionDelete} = props
  const {id, titleInput, amountInput, optionId} = item
  const deleteTransaction = () => {
    handleTransactionDelete(id)
  }
  return (
    <li className="list-item">
      <div>
        <hr />
      </div>
      <div className="history-details-container">
        <p>{titleInput}</p>
        <p>Rs {amountInput}</p>
        <p>{optionId}</p>
        <button
          className="delete-history-btn"
          type="button"
          data-testid="delete"
          onClick={deleteTransaction}
        >
          <img
            className="delete-img"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
