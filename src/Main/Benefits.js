import access from "../images/icon-access-anywhere.svg";
import security from "../images/icon-security.svg";
import collaboration from "../images/icon-collaboration.svg";
import file from "../images/icon-any-file.svg";

const Benefits = () => {
  return (
    <section className="benefits">
      <ul>
        <li>
          <img src={access} alt="" />
          <h2>Access your files, anywhere</h2>
          <p>
            The ability to use a smartphone, tabet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </li>
        <li>
          <img src={security} alt="" />
          <h2>Security you can trust</h2>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </li>
        <li>
          <img src={collaboration} alt="" />
          <h2>Real-time collaboration</h2>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </li>
        <li>
          <img src={file} alt="" />
          <h2>Store any type of file</h2>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securelyy stored and
            shared.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Benefits;
