import React from "react";
import PropTypes from "prop-types";
import styles from "./PetItem.module.css";

const PetItem = ({
  image,
  name,
  age,
  gender,
  color,
  breed,
  description,
  alt
}) => (
  <>
    <h2 className={styles.itemHead}>All about {name}</h2>
    <div className={styles.wrapp}>
      <img src={image} alt={alt} className={styles.image} />
      <div>
        <p className={styles.text}>
          Age: <span className={styles.data}>{age}</span>
        </p>
        <p className={styles.text}>
          Gender: <span className={styles.data}>{gender}</span>
        </p>
        <p className={styles.text}>
          Color: <span className={styles.data}>{color}</span>
        </p>
        <p className={styles.text}>
          Breed: <span className={styles.data}>{breed}</span>
        </p>
      </div>
    </div>
    <p className={styles.itemDescript}>{description}</p>
  </>
);

PetItem.defaultProps = {
  alt: "Photo pet"
};

PetItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default PetItem;
