"use client";

import { Modal, Flash, Accordion, AccordionRow } from "@/ui";
import styles from "./style.module.scss";
import { useState } from "react";

export const PageContent = () => {
  const [accordionId, setAccordionId] = useState<string>("");
  const accordionClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget as HTMLButtonElement;
    const id = btn.id;
    setAccordionId(id && id !== accordionId ? id : "");
  };

  const [flash, setFlash] = useState<boolean>(false);
  const openFlash = () => setFlash(true);
  const closeFlash = () => setFlash(false);

  const [modal, setModal] = useState<boolean>(false);
  const toggleModal = () => setModal((s) => !s);

  return (
    <div>
      {/* <section className={styles.section}>
        <h1>Flash</h1>
        <button onClick={openFlash}>Dodaj flash</button>
        {flash ? (
          <Flash
            title="Tytuł"
            message="Wiadomość flash"
            handleClose={closeFlash}
          />
        ) : null}
      </section>

      <section className={styles.section}>
        <h1>Modal</h1>
        <button onClick={toggleModal}>Otwórz modal</button>
        <Modal isOpen={modal} handleClose={toggleModal}>
          <h3>Modal title</h3>
          <p>Jakaś treść</p>
        </Modal>
      </section> */}

      <section className={styles.section}>
        <h1>Accordion</h1>
        <h3>Otwarty: {accordionId}</h3>
        <Accordion className={styles.accordion}>
          <AccordionRow
            id="a_1"
            title="What is the difference between a UI and UX Designer?"
            isOpen={accordionId === "a_1"}
            handleClick={accordionClickHandler}
          >
            Treść numer jeden
          </AccordionRow>
          <AccordionRow
            id="a_2"
            title="How to become a UI designer?"
            isOpen={accordionId === "a_2"}
            handleClick={accordionClickHandler}
          >
            Treść numer dwa
          </AccordionRow>
          <AccordionRow
            id="a_3"
            title="What is the best UI design tool?"
            isOpen={accordionId === "a_3"}
            handleClick={accordionClickHandler}
          >
            Treść numer trzy
          </AccordionRow>
          <AccordionRow
            id="a_4"
            title="What is the best place to learn Figma?"
            isOpen={accordionId === "a_4"}
            handleClick={accordionClickHandler}
          >
            Treść numer four
          </AccordionRow>
          <AccordionRow
            id="a_5"
            title="Should designers code?"
            isOpen={accordionId === "a_5"}
            handleClick={accordionClickHandler}
          >
            Treść numer five
          </AccordionRow>
        </Accordion>
      </section>
    </div>
  );
};
