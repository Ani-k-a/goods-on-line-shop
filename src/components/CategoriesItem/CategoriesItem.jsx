import css from './CategoriesItem.module.css';

export default function CategoriesItem({ image, title }) {
  return (
    <li className={css.block}>
      <img
        src={`http://localhost:3333${image}`}
        alt={title}
        className={css.img}
      ></img>
      <h3 className={css.title}>{title}</h3>
    </li>
  );
}
