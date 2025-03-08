import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countryFetch } from '../redux/user/userSlice'


function About() {

    const dispatch = useDispatch()
    const {country, loading, error} = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(countryFetch())
    }, [dispatch])

    console.log(country);
    

  return (
    <div>
      About
    </div>
  )
}

export default About
