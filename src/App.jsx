import { useState } from "react";
import { ExpenceFillter, ExpenceForm, ExpenceTable } from "./components";

const App = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const [title, price, category] = evt.target.elements;

        const newProduct = {
            id: products.length + 1,
            title: title.value.trim(),
            price: price.value.trim(),
            category: category.value.trim(),
        };

        setProducts([...products, newProduct]);

        title.value = null;
        price.value = null;
        category.value = null;
        title.focus();
    };

    const visibleProducts = category
        ? products.filter((product) => product.category === category)
        : products;

    return (
        <div className='container'>
            <div className='row'>
                <ExpenceForm handleSubmit={handleSubmit} />
                <ExpenceTable
                    products={visibleProducts}
                    OnDelete={(id) =>
                        setProducts(
                            products.filter((product) => product.id !== id)
                        )
                    }
                />
                <ExpenceFillter
                    onChange={(category) => setCategory(category)}
                />
            </div>
        </div>
    );
};

export default App;
