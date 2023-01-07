import { useRef, useState } from "react";

const Access = () => {
  const inputRef = useRef();
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    const currValue = inputRef.current.value;
    const regex = /^\w+([.-_]?\w+)*@\w+([.]?\w+)*(.\w{2,3})+$/g;
    if (currValue === "" || currValue === null || !currValue.match(regex)) {
      setIsError(true);
    } else {
      setIsError(false);
      inputRef.current.value = "";
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <section className="access">
      <h2>Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="form-group">
        <div className="input">
          <input
            ref={inputRef}
            onKeyDown={handleKey}
            type="text"
            placeholder="email@example.com"
          />
          <p className={`error ${isError ? "show" : ""}`}>
            Please enter a valid email address
          </p>
        </div>
        <button onClick={handleClick}>Get Started For Free</button>
      </div>
    </section>
  );
};

export default Access;
