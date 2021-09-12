import Card from '../Ui/Card';
import classes from './AvailableMeal.module.css';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'samosa',
      description: 'IN bihar it is very famous',
      price: 22.99,
    },
    {
      id: 'm2',
     name: 'poha',
      description: 'Good for morning breakfast',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Burger',
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
     const AvailableMeal= ()=>{
         const meallist=DUMMY_MEALS.map(meal => <MealItem key={meal.id}  id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)
         return <section className={classes.meals}>
         <Card>
          <ul>{meallist}</ul>
          </Card>
         </section>

     }


       export default AvailableMeal;
 
       