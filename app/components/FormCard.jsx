import { useForm, ValidationError } from '@formspree/react';
import Button from './Utils/Button';

export default function FormCard({
  title = "",
  description = "",
}) {
  const [state, handleSubmit] = useForm("xyyvpdbp");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (<>
    <div className="form-card">
      <div className="form-desc">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <form className="main-form" onSubmit={handleSubmit}>
        <label htmlFor="first_name">
          First Name
        </label>
        <input
          id="first_name"
          type="text"
          name="first_name"
          required
        />
        <ValidationError
          prefix="First Name"
          field="first_name"
          errors={state.errors}
        />
        <label htmlFor="last_name">
          Last Name
        </label>
        <input
          id="last_name"
          type="text"
          name="last_name"
          required
        />
        <ValidationError
          prefix="Last Name"
          field="last_name"
          errors={state.errors}
        />
        <label htmlFor="phone_number">
          Phone Number
        </label>
        <input
          id="phon_number"
          type="tel"
          name="phone_number"
        />
        <ValidationError
          prefix="Phone Number"
          field="phon_number"
          errors={state.errors}
        />
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button msg="Submit" type="submit" disabled={state.submitting} />
      </form>
    </div>
  </>
  );
}