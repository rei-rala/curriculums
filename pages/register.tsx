import React, { useContext, useEffect, useRef, useState } from "react";
import Head from "next/head";

import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { UserCtx } from "@/contexts/UserContext";
import { useRouter } from "next/router";
import Link from "next/link";

// TODO: Use formik with Yup for the Forms
const RegisterPage = () => {
  const router = useRouter();
  const { userType, toggleUserType, loggedUser } = useContext(UserCtx);

  const userTypeTogglerRef = useRef(null);

  const [isBusyLoading, setIsBusyLoading] = useState(false);
  const [response, setResponse] = useState<{
    message: string;
    error?: boolean;
  } | null>(null);

  let [typedEmail, setTypedEmail] = useState("");
  let [typedPassword, setTypedPassword] = useState("");
  let [typedPasswordConfirm, setTypedPasswordConfirm] = useState("");

  function handleCredentialChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.currentTarget.value;

    if (e.currentTarget.name === "password") {
      setTypedPassword(value);
      return;
    }
    if (e.currentTarget.name === "passwordConfirm") {
      setTypedPasswordConfirm(value);
      return;
    }
    setTypedEmail(value);
  }

  async function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (typedPassword !== typedPasswordConfirm) {
      setResponse({
        message: "No coinciden las contraseñas",
        error: true,
      });
      return;
    }

    new Promise((res) => {
      setIsBusyLoading(true);
      setTimeout(() => {
        res("😊");
      }, 3000);
    })
      .then(() => {
        setResponse({
          message: "Todavia no se puede registrar",
          error: true,
        });
      })
      .finally(() => setIsBusyLoading(false));
  }

  useEffect(() => {
    if (loggedUser) router.push("/cv");
  }, [router, loggedUser]);

  return (
    <>
      <Head>
        <title>Registrarme | Curriculums</title>
        <meta
          name="description"
          content="Register | Find the best candidates here!"
        />
      </Head>
      <Col sm={12} md={6} className="mx-auto">
        <main>
          {!isBusyLoading && response && (
            <Alert variant={response.error ? "danger" : "success"}>
              {response.message}
            </Alert>
          )}

          <h1 className="text-center">Registrarse</h1>

          <p className="lead my-2">
            Registro como{" "}
            <span style={{ color: "var(--accent)" }}>
              <b>{userType}</b>
            </span>
            :{" "}
            <span>
              Podrás{" "}
              {userType === "candidate"
                ? " gestionar tu curriculum y recibirás notificaciones de los reclutadores que quieran contactarse contigo."
                : " visualizar perfiles y dejarles un mensaje a los candidatos que desees."}
            </span>{" "}
            <b role="button" ref={userTypeTogglerRef} onClick={toggleUserType}>
              Cambiar a {userType === "candidate" ? "recruiter" : "candidate"}
            </b>
          </p>

          <Form
            className="d-flex flex-column align-content-center my-3"
            onSubmit={onFormSubmit}
          >
            <input type="hidden" value={userType} />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electronico"
                name="email"
                value={typedEmail}
                onChange={handleCredentialChange}
              />

              {userType === "recruiter" && (
                <Form.Text className="text-muted">
                  Solo se compartirá tu email con los candidatos que contactes.
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                name="password"
                value={typedPassword}
                onChange={handleCredentialChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Reingresa tu contraseña"
                name="passwordConfirm"
                value={typedPasswordConfirm}
                onChange={handleCredentialChange}
              />
            </Form.Group>

            <Container className="d-flex flex-column flex-md-row justify-content-space-between align-items-center">
              <Button
                className="my-1 col-12 col-md-6"
                variant="primary"
                type="submit"
                disabled={!!loggedUser || isBusyLoading}
              >
                Registrarme
              </Button>

              <span className="col-sm-12 my-1 col-12 col-md-6 text-center">
                Si <b>tienes</b> cuenta,{" "}
                <Link href={"/login"}>inicia sesión</Link>
              </span>
            </Container>
          </Form>
        </main>
      </Col>
    </>
  );
};

export default RegisterPage;
