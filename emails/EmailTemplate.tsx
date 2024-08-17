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
  subject: string;
  message: string;
}

export const ContactEmail = ({ name, email, subject, message }: EmailProps) => (
  <Html>
    <Head />
    <Preview>
      A fine-grained personal access token has been added to your account
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Img
            src='https://res.cloudinary.com/dmdci86wv/image/upload/fl_preserve_transparency/v1719757310/nav-modified_mgcsq7.jpg?_s=public-apps'
            width='50'
            height='70'
            alt='SBA_LOGO'
            style={logo}
          />
        </Section>
        <Text style={title}>
          <strong>@admin</strong>, a new contact form submission has been
          received.
        </Text>
        <Hr />
        <Section style={detailsSection}>
          <Text style={formDetails}>Form Details</Text>
          <Text style={text}>
            Username : <strong>{name}</strong>
          </Text>
          <Text style={text}>
            Email : <strong>{email}</strong>
          </Text>
          <Text style={text}>
            Subject : <strong>{subject}</strong>
          </Text>
          <Text style={text}>
            Message : <strong>{message}</strong>
          </Text>
        </Section>
        <Hr />
        <Text style={links}>
          <Link href='https://sba-main.vercel.app/' style={link}>
            Website Link
          </Link>{' '}
          ・{' '}
          <Link href='https://sba-main.vercel.app/admin' style={link}>
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

ContactEmail.PreviewProps = {} as EmailProps;

export default ContactEmail;

const main = {
  backgroundColor: '#ffffff',

  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: '500px',
  margin: '0 auto',
  padding: '20px 40px',
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
