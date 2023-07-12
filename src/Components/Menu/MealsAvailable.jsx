import { useState, useEffect } from 'react';
import Card from '../UI/Card/Card';
import MealItem from './MealItem/MealItem';
import classes from './MealsAvailable.module.css';

const MealsAvailable = (props) => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true)
            const response = await fetch('https://hungryknights-01-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json')
            if (!response.ok) {
                throw new Error('Something went wrong While Getting Menu')
            }
            const fetchedMeals = await response.json()
            const Meals = [];
            for (let key in fetchedMeals) {
                Meals.push({
                    id: key,
                    name: fetchedMeals[key].name,
                    description: fetchedMeals[key].description,
                    price: fetchedMeals[key].price
                })
            }
            // console.log('Meals After Transformation', Meals)
            setMeals(Meals)
            setIsLoading(false)
        }
        fetchMeals().catch((error) => {
            setIsLoading(false)
            setError(error.message)
        })
    }, [])

    if (isLoading) {
        return <section>
            <p className={classes.mealsLoading}> Loading... </p>
        </section >
    }
    if (error) {
        return <section>
            <p className={classes.mealsError}> Failed To Fetch Menu </p>
        </section >
    }
    const mealList = meals.map((meal) => {
        return <MealItem
            key={meal.id}
            meals={meal}
        />
    })

    return (
        <section className={classes.meals}>
            <Card >
                <ul >
                    {mealList}
                </ul>
            </Card>
        </section >
    )
}
export default MealsAvailable;