import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {income, expenses, balance} = moneyDetails

  return (
    <div className="details-container">
      <div className="type-container balance-container">
        <div className="image-container">
          <img
            className="money-details-img"
            alt="balance"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          />
        </div>
        <div className="money-container">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balance}</p>
        </div>
      </div>
      <div className="type-container income-container">
        <div className="image-container">
          <img
            className="money-details-img"
            alt="income"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          />
        </div>
        <div className="money-container">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {income}</p>
        </div>
      </div>
      <div className="type-container expenses-container">
        <div className="image-container">
          <img
            className="money-details-img"
            alt="expenses"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          />
        </div>
        <div className="money-container">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
