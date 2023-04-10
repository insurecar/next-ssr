import cn from "classnames";
import styles from "./Product.module.css";
import { ProducProps } from "./Product.props";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";

export const Product = ({
  product,
  className,
  ...props
}: ProducProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <img
          src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
          alt={product.title}
        />{" "}
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>{product.price}</div>
      <div className={styles.credit}>{product.credit}</div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />{" "}
      </div>
      <div className={styles.tags}>
        {product.categories.map((c) => (
          <Tag key={c} color="ghost">
            {c}
          </Tag>
        ))}
      </div>
      <div className={styles.priceTitle}>Price</div>
      <div className={styles.creditTitle}>Credit</div>
      <div className={styles.rateTitle}>{product.reviewCount} reviews</div>
      <div className="className={styles.hr}">
        <hr />
      </div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>Feature</div>
      <div className={styles.advBlock}>
        <div className={styles.advantages}>
          <div>Advantages</div>
          <div className={styles.advantages}>{product.advantages}</div>
        </div>
        <div className={styles.disadvantages}>
          <div>Disadvantages</div>
          <div className={styles.disadvantages}>{product.disadvantages}</div>
        </div>
      </div>
      <div className={styles.hr}>
        <hr />
      </div>
      <div className={styles.actions}>
        <Button appearence="primary">More detail</Button>
        <Button appearence="ghost" arrow="right">
          Read feedback
        </Button>
      </div>
    </Card>
  );
};
