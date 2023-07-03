import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';
function MealItemForm(props) {
    const inputHanle = () => {
        console.log('Button Presses !!!')
    }
    const input = { type: 'number', id: 'ammount', min: '1', max: '8', step: '1', defaultValue: '1' };
    return (
        <form className={classes.form}>
            <Input label="Amount" input={input} />
            <button onClick={inputHanle}>+ Add</button>
        </form>
    );
}

export default MealItemForm;