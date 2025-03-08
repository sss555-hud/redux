import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../../redux/pro/CategoryProudct";

const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { category, loading, error } = useSelector((state) => state.product || {});

    useEffect(() => {
        if (id) {
            dispatch(getProduct(id));
        }
    }, [id, dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {category.length > 0 ? (
                <div>
                    {category.map((product) => (
                        <div key={product.id}>
                            <img src={product.image} alt="" />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
};

export default Product;