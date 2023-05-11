import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";

import { Alert, Badge, Button, Col, Form } from "react-bootstrap";
import { UserCtx } from "@/contexts/UserContext";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const { loggedUser, setLoggedUser, logIn } = useContext(UserCtx);

  const [isBusyLoading, setIsBusyLoading] = useState(false);
  const [response, setResponse] = useState<{
    message: string;
    error?: boolean;
  } | null>(null);
  const [userType, setUserType] = useState<UserType>("candidate");

  let [typedEmail, setTypedEmail] = useState("");
  let [typedPassword, setTypedPassword] = useState("");

  function toggleUserType() {
    setUserType((curr) => (curr === "candidate" ? "recruiter" : "candidate"));
  }

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

          <h1>Log in</h1>
          <span>
            As <b>{userType}</b>
            <Badge role="button" bg={"success"} onClick={toggleUserType}>
              Change
            </Badge>
          </span>

          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>

          <Form
            className="d-flex flex-column align-content-center"
            onSubmit={onFormSubmit}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={typedEmail}
                onChange={handleCredentialChange}
              />

              {userType === "recruiter" && (
                <Form.Text className="text-muted">
                  We&apos;ll share your email only with candidates.
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={typedPassword}
                onChange={handleCredentialChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              className="mx-auto col-sm-5"
              variant="primary"
              type="submit"
              disabled={!!loggedUser || isBusyLoading}
            >
              Submit
            </Button>
          </Form>
        </main>
      </Col>
    </>
  );
};

export default LoginPage;
