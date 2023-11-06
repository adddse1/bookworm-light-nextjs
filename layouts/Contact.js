import config from "@config/config";
import { markdownify } from "@lib/utils/textConverter";
import { useForm, ValidationError } from '@formspree/react';
import React from 'react';
import SuccessMsg from "./components/SuccessMsg";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;
  const { desc } = frontmatter;
  const [state, handleSubmit] = useForm("xpzgnypd");
  if (state.succeeded) {
      return       <SuccessMsg/>

  }

  return (
    <section className="section">
      <div className="container max-w-[700px]">
        {markdownify(title, "h1", "h2 mb-8 text-center")}
        {markdownify(desc, "p", "p mb-8 text-center")}
        
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="name">
              Name
            </label>
            <input
              className="form-input w-full"
              name="name"
              type="text"
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="email">
              Email
            </label>
            <input
              className="form-input w-full"
              name="email"
              type="email"
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="subject">
              Subject
            </label>
            <input
              className="form-input w-full"
              name="subject"
              type="text"
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="message">
              Message
            </label>
            <textarea className="form-textarea w-full" rows="7" />
          </div>
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          <button type="submit" disabled={state.submitting} className="btn btn-outline-primary">Submit Now</button>
        </form>
       
      </div>
    </section>
  );
};

export default Contact;
