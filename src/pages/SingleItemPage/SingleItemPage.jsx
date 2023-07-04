import { useParams } from 'react-router-dom';
import css from './SingleItemPage.module.css';

export default function SingleItemPage() {
  const id = useParams;

  return (
    <div className={css.container}>
      <div className={css.block}>One page Item</div>
    </div>
  );
}
