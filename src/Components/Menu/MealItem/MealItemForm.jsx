import classes from './MealItemForm.module.css';
function MealItemForm(props) {
    return (
        <form className={classes.form}>
            <input type="number" min="1" max="8" />
            <button>+ Add</button>
        </form>
    );
}

export default MealItemForm;