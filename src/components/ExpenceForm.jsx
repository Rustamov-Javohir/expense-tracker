const ExpenceForm = ({ handleSubmit }) => {
    return (
        <>
            <h1 className='text-center p-3'>Expense Tracker</h1>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <label className='mb-2' htmlFor='#title'>
                    Description
                </label>
                <input
                    id='title'
                    className='form-control mb-3'
                    type='text'
                    name='title'
                />
                <label className='mb-2' htmlFor='#price'>
                    Amount
                </label>
                <input className='form-control mb-3' type='text' name='price' />
                <label className='mb-2' htmlFor='#category'>
                    Category
                </label>
                <select className='form-control' name='category' id='category'>
                    <option value=''></option>
                    <option value='groceries'>Groceries</option>
                    <option value='utilities'>Utilities</option>
                    <option value='entertainment'>Entertainment</option>
                </select>
                <button className='btn btn-primary mt-3' type='submit'>
                    Submit
                </button>
            </form>
        </>
    );
};

export default ExpenceForm;
