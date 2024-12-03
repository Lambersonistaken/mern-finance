import React from 'react'
import "./financial-record.css"

const FinancialRecordForm = () => {
  return (
    <div className='form-container'>
      <form>
        <div className="form-field">
            <label>Description:</label>
            <input type="text" required className='input' />
        </div>
        <div className="form-field">
            <label>Amount:</label>
            <input type="text" required className='input' />
        </div>
        <div className="form-field">
            <label>Category:</label>
            <select required className='input'>
                <option value="">Select a category</option>
                <option value="Food">Food</option>
                <option value="Rent">Rent</option>
                <option value="Salary">Salary</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div className="form-field">
            <label>Payment method:</label>
            <select required className='input'>
                <option value="">Select a payment method</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Cash">Cash</option>
                <option value="Bank Transfer">Bank Transfer</option>
            </select>
        </div>
        <button type='submit' className='button'>
            Add Record
        </button>
      </form>
    </div>
  )
}

export default FinancialRecordForm
