import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet';
import { Textarea } from './ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'The name must be at least 2 characters.'
  }),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(500, { message: 'Message must not be longer than 500 characters.' })
});

function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = {
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      template_params: values
    };

    try {
      await fetch(import.meta.env.VITE_EMAILJS_API_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }
      });

      form.reset();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <Sheet>
          <div className="flex flex-col items-center gap-5">
            <SheetTrigger asChild>
              <Button size="lg" rounded="full">
                Let's chat
              </Button>
            </SheetTrigger>
            <p className="relative flex items-start gap-4 text-center before:absolute before:left-0 before:top-1/2 before:hidden before:h-4 before:w-4 before:flex-shrink-0 before:-translate-x-[200%] before:-translate-y-1/2 before:rounded-full before:bg-emerald-500 sm:before:block">
              Available for projects for October 2023 and beyond
            </p>
          </div>

          <SheetContent side="left" className="w-full pt-16 sm:w-3/4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Jhon Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="jhon@doe.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          className="h-[35ch] resize-none"
                          maxLength={500}
                          placeholder="Some message..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-end gap-4">
                  <SheetClose asChild>
                    <Button
                      type="reset"
                      onClick={() => form.reset()}
                      variant="secondary"
                      disabled={form.formState.isSubmitting}
                    >
                      Cancel
                    </Button>
                  </SheetClose>
                  <Button
                    type="submit"
                    disabled={!form.formState.isValid || form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? 'Submitting' : 'Submit'}
                  </Button>
                </div>
              </form>
            </Form>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}

export default ContactSection;
