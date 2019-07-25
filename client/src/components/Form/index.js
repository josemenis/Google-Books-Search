import React from 'react'

// This file exports the Input, TextArea, and FormBtn components

function Form (props) {
  let { q, handleInputChange, handleFormSubmit } = props
  return (
    <form>
      <div className='form-group'>
        <label htmlFor='Query'>
          <strong>Book</strong>
        </label>
        <input
          className='form-control'
          id='Title'
          type='text'
          value={q}
          placeholder='Book Title'
          name='q'
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='pull-right'>
        <button
          onClick={handleFormSubmit}
          type='submit'
          className='btn btn-lg btn-danger float-left'
        >
        Search
        </button>
      </div>
    </form>

  )
}

export default Form
