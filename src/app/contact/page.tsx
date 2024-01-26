import ContactSection from '@/components/sections/contact';
import GetInTouchSection from '@/components/sections/get-in-touch';

export const metadata = {
  title: 'Contact',
  description:
    'I’d love to hear about what you’re working on and how I could help. Please get in touch and let’s talk',
};

function Contact() {
  return (
    <>
      <GetInTouchSection />
      <ContactSection />
    </>
  );
}

export default Contact;
