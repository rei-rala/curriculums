import React, { useContext, useEffect, useRef, useState } from "react";
import Head from "next/head";

import { Alert, Button, Col, Container, Form } from "react-bootstrap";
import { UserCtx } from "@/contexts/UserContext";
import { useRouter } from "next/router";
import AppTooltip from "@/components/AppTooltip/AppTooltip";
import Link from "next/link";


// TODO: Use formik with Yup for the Forms
const LoginPage = () => {
  const router = useRouter();
  const { userType, toggleUserType, loggedUser, setLoggedUser, logIn } =
    useContext(UserCtx);

  const userTypeTogglerRef = useRef(null);

  const [hoveringToggler, setHoveringToggler] = useState(false);
  const [isBusyLoading, setIsBusyLoading] = useState(false);
  const [response, setResponse] = useState<{
    message: string;
    error?: boolean;
  } | null>(null);

  let [typedEmail, setTypedEmail] = useState("");
  let [typedPassword, setTypedPassword] = useState("");

  function handleCredentialChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.currentTarget.value;

    if (e.currentTarget.name === "password") {
      setTypedPassword(value);
      return;
    }
    setTypedEmail(value);
  }

  async function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsBusyLoading(true);

    try {
      logIn({
        email: typedEmail,
        password: typedPassword,
        userType,
      })
        .then((r) => {
          if (r?.user) {
            setResponse({ message: "Successful login. Redirecting..." });
            setLoggedUser(r.user);
            return;
          }

          throw r;
        })
        .catch((e) => {
          setResponse({
            message:
              e.response?.data.message ?? "Unexpected frontend error? XD",
            error: e.status !== 200,
          });
        });
    } catch (e: any) {}

    setIsBusyLoading(false);
  }

  useEffect(() => {
    if (loggedUser) router.push("/cv");
  }, [router, loggedUser]);

  return (
    <>
      <Head>
        <title>Iniciar sesión | Curriculums</title>
        <meta
          name="description"
          content="Log In | Find the best candidates here!"
        />
      </Head>
      <Col sm={12} md={6} className="mx-auto">
        <main>
          {!isBusyLoading && response && (
            <Alert variant={response.error ? "danger" : "success"}>
              {response.message}
            </Alert>
          )}

          <h1 className="text-center">Iniciar sesión</h1>
          <span
            role="button"
            ref={userTypeTogglerRef}
            style={{ color: "var(--accent)" }}
            onClick={toggleUserType}
            onMouseEnter={() => setHoveringToggler(true)}
            onMouseLeave={() => setHoveringToggler(false)}
          >
            As <b>{userType}</b>
            <AppTooltip
              text={"Click para cambiar"}
              show={hoveringToggler}
              targetRef={userTypeTogglerRef}
              placement="top"
            />
          </span>

          <p className="lead my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
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

            <Container className="d-flex flex-column flex-md-row justify-content-space-between align-items-center">
              <Button
                className="my-1 col-12 col-md-6"
                variant="primary"
                type="submit"
                disabled={!!loggedUser || isBusyLoading}
              >
                Iniciar sesion
              </Button>

              <span className="col-sm-12 my-1 col-12 col-md-6 text-center">
                Si <b>no tienes</b> cuenta, <Link href={"/register"}>regístrate</Link>
              </span>
            </Container>
          </Form>
        </main>
      </Col>
    </>
  );
};

export default LoginPage;
