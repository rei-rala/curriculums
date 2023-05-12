import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { UserCtx } from "@/contexts/UserContext";
import { Button, Form } from "react-bootstrap";

interface ContactFormProps {
  alias: string;
  fullName: string;
}

const ContactForm: ExtendedFC<ContactFormProps> = ({ fullName, alias }) => {
  const router = useRouter();
  const { loggedUser } = useContext(UserCtx);
  const [message, setMessage] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  async function submitHandler(e: React.SyntheticEvent) {
    e.preventDefault();

    new Promise((res) => {
      setIsBusy(true);
      setTimeout(() => {
        res("😉");
      }, 2000);
    })
      .then(() => alert("Mensaje enviado"))
      .finally(() => setIsBusy(false));
  }

  if (!loggedUser) {
    return (
      <>
        <hr />
        <p className="text-center">
          Puedes contactarte con {fullName || alias}{" "}
          <Link href={`/login?callbackUrl=${router.asPath}`}>
            iniciando sesión
          </Link>{" "}
          o{" "}
          <Link href={`/register?callbackUrl=${router.asPath}`}>
            registrandote
          </Link>
        </p>
      </>
    );
  }

  if (!alias) return null;
  if (loggedUser.userType !== "recruiter" || loggedUser.alias === alias || !loggedUser.validatedEmail) {
    return null;
  }

  const recruiterEmail = loggedUser?.email;

  return (
    <fieldset disabled={isBusy}>
      <hr />
      <Form onSubmit={submitHandler}>
        <h4>Contactar a {fullName || alias}</h4>

        <div className="my-2">
          <Form.Group className="mb-3">
            <Form.Label>Tu email</Form.Label>
            <Form.Control value={recruiterEmail} disabled={true} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              type="fieldset"
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
            />
          </Form.Group>
        </div>
        <div className="d-flex justify-content-center">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </fieldset>
  );
};

export default ContactForm;
