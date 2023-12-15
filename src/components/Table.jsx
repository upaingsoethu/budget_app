// component import
import ExpenseItems from "./ExpenseItems"

const Table = ({ expenses }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {
              ["Name", "Amount", "Date"].map((i, index) => (
                <th key={index}>{i}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((expense) => (
              <tr key={expense.id}>
                <ExpenseItems expense={expense}/>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
export default Table