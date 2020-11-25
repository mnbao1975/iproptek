import { useState, useEffect } from "react";
import { Auth, Storage, API } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { v4 as uuid } from "uuid";
import { Header } from "../components";
import { Button } from "../components";
import { createProduct } from "../graphql/mutations";
import styles from "../styles/CreateProduct.module.css";

/* Initial state to hold form input, saving state */
const initialState = {
  title: "",
  description: "",
  image: {},
  file: "",
  price: 0,
  saving: false,
};

function CreateProduct() {
  /* 1. Create local state with useState hook */
  const [formState, updateFormState] = useState(initialState);

  /* 2. onChangeText handler updates the form state when a user types into a form field */
  function onChangeText(e) {
    e.persist();
    updateFormState((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  }

  /* 3. onChangeFile handler will be fired when a user uploads a file  */
  function onChangeFile(e) {
    e.persist();
    if (!e.target.files[0]) return;
    const image = {
      fileInfo: e.target.files[0],
      name: `${e.target.files[0].name}_${uuid()}`,
    };
    updateFormState((currentState) => ({
      ...currentState,
      file: URL.createObjectURL(e.target.files[0]),
      image,
    }));
  }

  /* 4. Save the product  */
  async function save() {
    try {
      const { title, description, price, image } = formState;
      if (!title || !description || !price || !image.name) return;
      updateFormState((currentState) => ({ ...currentState, saving: true }));
      const productId = uuid();
      const productInfo = {
        title,
        description,
        price,
        image: formState.image.name,
        id: productId,
      };

      await Storage.put(formState.image.name, formState.image.fileInfo);
      await API.graphql({
        query: createProduct,
        variables: { input: productInfo },
      });
      updateFormState((currentState) => ({ ...currentState, saving: false }));
    } catch (err) {
      console.log("error: ", err);
    }
  }
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Access the user session on the client
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log("User: ", user);
        setUser(user);
      })
      .catch((err) => setUser(null));
  }, []);
  return (
    <>
      <Header />
      <div className={styles.containerStyle}>
        <input
          placeholder="Product title"
          name="title"
          className={styles.inputStyle}
          onChange={onChangeText}
        />
        <input
          placeholder="Price"
          name="price"
          className={styles.inputStyle}
          onChange={onChangeText}
        />
        <input
          placeholder="Description"
          name="description"
          className={styles.inputStyle}
          onChange={onChangeText}
        />
        <input type="file" onChange={onChangeFile} />
        {formState.file && (
          <img
            className={styles.imageStyle}
            alt="preview"
            src={formState.file}
          />
        )}
        <Button title="Create New Product" onClick={save} />
        <Button
          type="cancel"
          title="Cancel"
          onClick={() => updateOverlayVisibility(false)}
        />
        {formState.saving && (
          <p className={styles.savingMessageStyle}>Saving product...</p>
        )}
      </div>
    </>
  );
}

export default withAuthenticator(CreateProduct);
