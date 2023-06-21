import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { user, isAuthenticated } = useAuth0();


  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29541.250784340184!2d84.88038107127763!3d22.253113910997712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNational%20Institute%20of%20Technology%2C%20Rourkela%2C%20National%20Institute%20of%20Technology%2C%20Sector%201%2C%20Rourkela%2C%20Odisha!5e0!3m2!1sen!2sin!4v1687314259058!5m2!1sen!2sin"
        width="100%"
        height="400"
        title="google-map"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mbjenoln"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              value={isAuthenticated ? user.name:""}
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              value={isAuthenticated ? user.email:""}
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
