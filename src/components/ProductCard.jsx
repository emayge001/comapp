import ActionButton from "./ActionButton";

const ProductCard = (props) => {
  const styles = {
    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "300px",
      height: "500px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
    },
    img: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "8px",
    },
    price: {
      color: "green",
      fontWeight: "bold",
      fontSize: "1.5rem",
      marginTop: "-1rem",
    },
    desc: {
      color: "black",
      fontSize: "1rem",
      marginTop: "-1rem",
      borderBottom: "1px solid #ccc",
      paddingBottom: "10px",
    },
  };

  return (
    <div style={styles.card}>
      <img
        style={styles.img}
        src={
          props.productImg
        }
        alt="product image"
      />
      <h4>
        {props.productName}
      </h4>
      <p style={styles.desc}>
        {props.description}
      </p>
      <p style={styles.price}>₦ {props.price}</p>
      <ActionButton />
    </div>
  );
};

export default ProductCard;
