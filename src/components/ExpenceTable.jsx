const ExpenceTable = ({ products, OnDelete }) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 &&
                    products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                            <td>{product.category}</td>
                            <td>
                                <button
                                    className='btn btn-outline-danger'
                                    type='button'
                                    onClick={() => OnDelete(product.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>
                        $
                        {products.reduce(
                            (total, product) => total + product.price,
                            0
                        )}
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    );
};

export default ExpenceTable;
