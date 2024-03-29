import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface EmailProps {
  name?: string;
  userName?: string;
  userEmail?: string;
  message?: string;
}

export const EmailTemplate = ({
  name = 'mateusbelicio',
  userName = 'bukinoshita',
  userEmail = 'bukinoshita@example.com',
  message = `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam culpa repellendus maiores nobis ex non quos maxime placeat voluptatum laudantium cum aperiam at dicta autem, accusantium illo quod numquam voluptas dolorum velit deserunt veniam delectus iure explicabo. 

    Deserunt earum, illo deleniti perspiciatis odit maxime corrupti ipsam culpa tenetur ad quae excepturi voluptate porro adipisci nesciunt amet aut vitae repellat accusantium a delectus. Deserunt veniam optio iure earum dolore nesciunt, quia fugit obcaecati eligendi ducimus facere debitis tenetur odit culpa corporis dicta nam esse mollitia pariatur maxime eum vero excepturi sit?
    
    Minima iste dolorem in ipsa, asperiores nisi. Quibusdam, officia culpa.
  `,
}: EmailProps) => {
  const previewText = 'You received a new message';

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 w-[465px] rounded border border-solid border-neutral-200 p-5">
            <Section className="mt-8">
              <Text className="text-center">
                <span className="box-border inline-block h-12 w-12 rounded-sm bg-[#09090B] p-1 align-middle text-4xl font-extrabold leading-none text-white">
                  M
                </span>
              </Text>
            </Section>
            <Heading className="mx-0 mb-8 mt-4 p-0 text-center text-2xl font-normal text-neutral-950">
              You received a new <strong>message</strong>
            </Heading>
            <Text className="text-sm text-neutral-950">Hello {name},</Text>
            <Text className="text-sm text-neutral-950">
              <strong>{userName}</strong> (
              <Link href={`mailto:${userEmail}`} className="text-blue-600 no-underline">
                {userEmail}
              </Link>
              ) sent you a message via your website.
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-neutral-200" />

            {message.split('\n').map((paragraph, index) => (
              <Text key={index} className="text-sm leading-normal text-neutral-600">
                {paragraph}
              </Text>
            ))}
            <Section className="mb-8 mt-8 text-center">
              <Row align="right" className="float-left w-20">
                <Column>
                  <Button
                    className="rounded bg-[#000000] px-5 py-3 text-center text-xs font-semibold text-neutral-200 no-underline"
                    href={`mailto:${userEmail}`}
                  >
                    Reply
                  </Button>
                </Column>
              </Row>
            </Section>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-neutral-200" />
            <Text className="text-xs leading-normal text-neutral-400">
              This message was intended for <span className="text-neutral-950">{name} </span>.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
