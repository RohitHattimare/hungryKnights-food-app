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
];

const MealsAvailable = (props) => {
    const mealslist = DUMMY_MEALS.map((meal) => {
        return <li>{meal.name}</li>
    })

    return (
        <section className="meals">
            <ul>
                {mealslist}
            </ul>
        </section>
    )
}
export default MealsAvailable;