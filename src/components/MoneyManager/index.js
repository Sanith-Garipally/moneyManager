import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    history: [],
  }

  handleTransactionDelete = id => {
    this.setState(prevState => ({
      history: prevState.history.filter(object => object.id !== id),
    }))
  }

  handleFormInputs = e => {
    if (e.target.id === 'title') {
      this.setState({titleInput: e.target.value})
    } else if (e.target.id === 'amount') {
      this.setState({amountInput: e.target.value})
    } else {
      this.setState({optionId: e.target.value})
    }
  }

  formSubmit = e => {
    e.preventDefault()
    const {titleInput, amountInput, optionId, history} = this.state
    const displayType = transactionTypeOptions.filter(
      object => object.optionId === optionId,
    )
    const newTransaction = {
      id: uuidv4(),
      titleInput,
      amountInput,
      optionId: displayType[0].displayText,
    }
    this.setState({
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
      history: [...history, newTransaction],
    })
  }

  render() {
    const {titleInput, amountInput, optionId, history} = this.state
    let moneyDetails = history.reduce(
      (prev, curr) => {
        if (curr.optionId === 'Income') {
          // eslint-disable-next-line no-param-reassign
          prev.income += parseInt(curr.amountInput)
          return prev
        }
        // eslint-disable-next-line no-param-reassign
        prev.expenses += parseInt(curr.amountInput)
        return prev
      },
      {income: 0, expenses: 0},
    )
    moneyDetails = {
      ...moneyDetails,
      balance: moneyDetails.income - moneyDetails.expenses,
    }
    return (
      <div className="bg-container">
        <div className="content-container">
          {/* Header */}
          <div className="header">
            <h1 className="head-1">Hi, Richard</h1>
            <p className="para-1">
              Welcome back to your <span className="span-1">Money Manager</span>
            </p>
          </div>
          {/* Money Details Section */}
          <MoneyDetails moneyDetails={moneyDetails} />
          {/* form and history */}
          <div className="fh-container">
            <div className="form-container">
              <h1 className="head-2">Add Transaction</h1>
              <form className="transaction-form" onSubmit={this.formSubmit}>
                <div className="form-item">
                  <label htmlFor="title">TITLE</label>
                  <input
                    onChange={this.handleFormInputs}
                    value={titleInput}
                    type="text"
                    placeholder="TITLE"
                    id="title"
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="amount">AMOUNT</label>
                  <input
                    onChange={this.handleFormInputs}
                    value={amountInput}
                    type="text"
                    placeholder="AMOUNT"
                    id="amount"
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="type">TYPE</label>
                  <select
                    onChange={this.handleFormInputs}
                    id="type"
                    value={optionId}
                  >
                    <option value={transactionTypeOptions[0].optionId}>
                      {transactionTypeOptions[0].displayText}
                    </option>
                    <option value={transactionTypeOptions[1].optionId}>
                      {transactionTypeOptions[1].displayText}
                    </option>
                  </select>
                </div>

                <div>
                  <button className="add-btn" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div className="history-container">
              <h1 className="head-2">History</h1>
              <ul className="list-container">
                <li className="list-item-heading">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                  <p>{}</p>
                </li>
                {history.map(object => (
                  <TransactionItem
                    key={object.id}
                    item={object}
                    handleTransactionDelete={this.handleTransactionDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
