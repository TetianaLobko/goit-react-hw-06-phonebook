import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Container from "./components/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./App.module.css";

const App = () => {
  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>

      <Filter />
      <ContactList />
      <ToastContainer autoClose={2000} />
    </Container>
  );
};

export default App;
