import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface EmailProps {
  name: string;
  email: string;
  time: string;
  message: string;
  phone: string;
}

export const SendAdminEmail = ({
  name,
  email,
  time,
  message,
  phone,
}: EmailProps) => (
  <Html>
    <Head />
    <Preview>{`New Appointment form submission from ${name}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Link href='https://sunilbhor.com/'>
            <Img
              src='https://res.cloudinary.com/dmdci86wv/image/upload/fl_preserve_transparency/v1725786410/nav_red_ro2bcc.jpg?_s=public-apps'
              width='50'
              height='70'
              alt='SBA_LOGO'
              style={logo}
            />
          </Link>
        </Section>
        <Text style={title}>
          <strong>@admin</strong>, an <strong>Appointment</strong> form
          submission has been received.
        </Text>
        <Hr />
        <Section style={detailsSection}>
          <Text style={text}>
            Name : <strong>{name}</strong>
          </Text>
          <Text style={text}>
            Requested Time : <strong>{time}</strong>
          </Text>
          <Text style={text}>
            Message : <strong>{message}</strong>
          </Text>
          <Text style={text}>
            Email : <strong>{email}</strong>
          </Text>
          <Text style={text}>
            Phone Number : <strong>{phone}</strong>
          </Text>
        </Section>
        <Hr />
        <Text style={links}>
          <Link href='https://sunilbhor.com/' style={link}>
            Website Link
          </Link>{' '}
          ・{' '}
          <Link href='https://sunilbhor.com/admin' style={link}>
            Admin Link
          </Link>
        </Text>

        <Text style={footer}>
          SBA, Inc. Vidya Vikas Circle, Gangapur Road ・Nashik, 422013
        </Text>
      </Container>
    </Body>
  </Html>
);

SendAdminEmail.PreviewProps = {} as EmailProps;

export default SendAdminEmail;

const main = {
  backgroundColor: '#ffffff',

  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: '500px',
  margin: '0 auto',
  padding: '20px 25px',
  backgroundColor: '#ffffff',
  borderRadius: '5px',
  border: 'solid 1px #dedede',
  marginTop: '10px',
};

const detailsSection = {
  textAlign: 'center' as const,
  margin: '40px 0',
};

const header = {
  padding: '20px 0',
  textAlign: 'center' as const,
};

const logo = {
  width: '50',
  height: '70',
};

const title = {
  fontSize: '27px',
  lineHeight: 1.25,
};

const formDetails = {
  fontSize: '26px',
  textAlign: 'center' as const,
  marginBottom: '70px',
};

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'center' as const,
};

const text = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const,
  fontSize: '20px',
};

const button = {
  fontSize: '14px',
  backgroundColor: '#28a745',
  color: '#fff',
  lineHeight: 1.5,
  borderRadius: '0.5em',
  padding: '12px 24px',
  marginTop: '40px',
};

const links = {
  textAlign: 'center' as const,
};

const link = {
  color: '#0366d6',
  fontSize: '12px',
};

const footer = {
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '60px',
};
