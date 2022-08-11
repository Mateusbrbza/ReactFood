import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Comida deliciosa, entregue para voce</h2>
      <p>
        Escolha sua refeicao favorita.
      </p>
      <p>
        Todas as suas refeicoes sao cozinhadas com ingredientes de alta quaildade!
      </p>
    </section>
  );
};

export default MealsSummary;