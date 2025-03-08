import React, {useEffect} from 'react'
import "./Category.css"
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../redux/category/CategorySlice'

function Category() {
    const {category, loading, error} = useSelector((state) => state.list)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])

    console.log(category);
    
  return (
    <div className='category'>
      {
        category.map((item) => (
            <div key={item.id} className='item-category'>
                <img src={item.image} alt="" />
                    <h1>{item.name}</h1>
                    <p>{item.slug}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Category
