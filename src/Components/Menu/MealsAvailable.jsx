import { useState, useEffect } from 'react';
import Card from '../UI/Card/Card';
import MealItem from './MealItem/MealItem';
import classes from './MealsAvailable.module.css';

const MealsAvailable = (props) => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://hungryknights-01-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json')
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
        }
        fetchMeals();
    }, [])

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