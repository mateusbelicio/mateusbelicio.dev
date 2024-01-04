import ContactForm from '../contact-form';

function ContactSection() {
  return (
    <section id="contact" className="pb-20">
      <div className="main-container">
        <div className="main-grid space-y-6 pb-8 md:space-y-0">
          <h2 className="heading-2 md:col-span-5">Contact Me</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
