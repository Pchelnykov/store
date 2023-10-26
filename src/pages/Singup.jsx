import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";
import { db } from "../firebase.config";
import { setDoc, doc } from "firebase/firestore";
import { storage } from "../firebase.config";
import "../styles/login.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";

const Singup = () => {
  const [user, setUser] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [file, setFile] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const singup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + user}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: user,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: user,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      console.log(user);
    } catch (error) {
      toast.error("somting went wrong");
    }
  };

  return (
    <Helmet title="Singup">
      <section>
        <Container>
          <Row>
            <Col className="m-auto text-center" lg="6">
              <h3 className="fs-4 fw-bold">Singup</h3>
              <Form className="auth__form" onSubmit={singup}>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Enter username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </FormGroup>
                <button type="submit" className="buy__btn auth__btn">
                  Singup
                </button>
                <p className="mt-2">
                  Already have an account? <Link to="/login">Login...</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Singup;
