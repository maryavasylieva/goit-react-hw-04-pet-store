import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";
import pets from "../assets/pets.json";
import PetItem from "../Components/PetItem";
import styles from "../Pages.module.css";

const getPetObj = (arr, id) => arr.find((el) => el.id === id);

const PetPages = ({ match, history }) => {
  const { id } = match.params;
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        type="button"
        onClick={() => history.push("/pets")}
      >
        Return
      </button>
      <PetItem {...getPetObj(pets, id)} />
    </div>
  );
};

PetPages.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired
};

export default PetPages;
