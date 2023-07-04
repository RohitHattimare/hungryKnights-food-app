import Card from '../UI/Card/Card';
import MealItem from './MealItem/MealItem';
import classes from './MealsAvailable.module.css';
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
    {
        id: 'm5',
        name: 'Palak Paneer',
        description: 'A Healthy Protein filled food',
        price: 19.99,
    }
];

const MealsAvailable = (props) => {
    //Creating list of Meals using map 
    const mealslist = DUMMY_MEALS.map((meal) => {
        return <MealItem
            key={meal.id}
            meals={meal}
        />
    })
    // console.log(mealslist);

    return (
        <section className={classes.meals}>
            <Card >
                <ul >
                    {mealslist}
                </ul>
            </Card>
        </section >
    )
}
export default MealsAvailable;