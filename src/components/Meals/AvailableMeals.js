import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Comidinha japonesa hmmm.',
    price: 29.99,
  },
  {
    id: 'm2',
    name: 'nuggets',
    description: 'nao sei o que dizer.',
    price: 15.5,
  },
  {
    id: 'm3',
    name: 'Smash burguer',
    description: 'hamburguer americano',
    price: 20.99,
  },
  {
    id: 'm4',
    name: 'comida verde',
    description: 'Saudavel e verde.',
    price: 18.99,
  },
  {
    id: 'm5',
    name: 'Miojo',
    description: 'Saudavel... acho.',
    price: 1.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;