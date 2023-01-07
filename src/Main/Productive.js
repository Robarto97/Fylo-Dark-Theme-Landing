import arrow from "../images/icon-arrow.svg";
import productive from "../images/illustration-stay-productive.png";
const Productive = () => {
  return (
    <section className="productive">
      <div className="img-wrapper">
        <img src={productive} alt="" />
      </div>
      <div className="text">
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <button>
          See how Fylo works <img src={arrow} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Productive;
