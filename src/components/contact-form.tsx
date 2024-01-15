'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Input } from '@/components/ui/input';

import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'The name must be at least 2 characters.',
  }),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(500, { message: 'Message must not be longer than 500 characters.' }),
});

export default function ContactForm() {
  const { toast } = useToast();
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = {
      userName: values.name,
      userEmail: values.email,
      message: values.message,
    };

    try {
      await fetch('/api/send' || '', {
        method: 'POST',
        body: JSON.stringify(formData),
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      });

      // methods.reset();

      toast({
        title: 'Message sent successfully!',
        description: 'Your message has been sent and Mateus will answer you soon.',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Failed to send message!',
        description: 'Please try again.',
        variant: 'destructive',
      });
    }
  }

  return (
    <Form {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 md:col-span-7 md:col-start-6"
      >
        <FormField
          control={methods.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Jhon Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  rows={4}
                  maxLength={500}
                  placeholder="How can I help?"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-4">
          <Button
            type="submit"
            variant="secondary"
            disabled={!methods.formState.isValid || methods.formState.isSubmitting}
          >
            {methods.formState.isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
