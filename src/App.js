import Footer from "./componnets/Footer/Footer";
import Header from "./componnets/Header/Header";
import Main from "./componnets/Main/Main";
import styles from "./App.module.css";


 

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
