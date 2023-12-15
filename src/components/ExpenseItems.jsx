import { formatCurrency, formatDateToLocaleString } from "../helper"

const ExpenseItems = ({expense}) => {
  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocaleString(expense.createdAt)}</td>
    </>
  )
}

export default ExpenseItems