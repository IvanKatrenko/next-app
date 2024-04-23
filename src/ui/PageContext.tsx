'use client';

import { Modal, Flash, Accordion, AccordionRow } from '@/ui';
import styles from './style.module.scss';
import { useState } from 'react';
import Notifications from '@/components/Notifications';
import { NotificationsProvider } from '@/context/notificationsContext';
import Header from '@/components/Header';

export const PageContent = () => {
  const [accordionId, setAccordionId] = useState<string>('');
  const accordionClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.target as HTMLButtonElement;
    const id = btn.id;
    setAccordionId(id && id !== accordionId ? id : '');
  };

  const [flash, setFlash] = useState<boolean>(false);
  const openFlash = () => setFlash(true);
  const closeFlash = () => setFlash(false);

  const [modal, setModal] = useState<boolean>(false);
  const toggleModal = () => setModal((s) => !s);

  return (
    <div>

      <Header />
      

      <NotificationsProvider>
        <h1 className={styles.title}>Notifications</h1>
        <p className={styles.description}>Notifications component</p>
        <Notifications />
      </NotificationsProvider>

      <section className={styles.section}>
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
      </section>

      <section className={styles.section}>
        <h1>Accordion</h1>
        <h3>Otwarty: {accordionId}</h3>
        <Accordion className={styles.accordion}>
          <AccordionRow
            id="a_1"
            title="Pierwszy tytuł"
            isOpen={accordionId === 'a_1'}
            handleClick={accordionClickHandler}
          >
            Treść numer jeden
          </AccordionRow>
          <AccordionRow
            id="a_2"
            title="Drugi tytuł"
            isOpen={accordionId === 'a_2'}
            handleClick={accordionClickHandler}
          >
            Treść numer dwa
          </AccordionRow>
          <AccordionRow
            id="a_3"
            title="Trzeci tytuł"
            isOpen={accordionId === 'a_3'}
            handleClick={accordionClickHandler}
          >
            Treść numer trzy
          </AccordionRow>
        </Accordion>
      </section>
    </div>
  );
};