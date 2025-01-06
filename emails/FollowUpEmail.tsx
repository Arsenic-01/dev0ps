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

interface FollowUpEmailProps {
  name: string;
  time: string;
  message: string;
  type: string;
}

export const FollowUpEmail = ({
  name,
  time,
  message,
  type,
}: FollowUpEmailProps) => (
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
          Hi there 👋! <strong>{name}</strong> your appointment has been{' '}
          {type === 'success' ? 'Scheduled' : 'Cancelled'}
        </Text>
        <Hr />
        <Section style={detailsSection}>
          <Text style={text}>
            {type === 'success' ? 'Scheduled Time : ' : 'Cancelled Time : '}{' '}
            <strong>{time}</strong>
          </Text>
          <Text style={text}>
            {type === 'success'
              ? 'Venue : Regd. Office: 8, First Floor, Rambaug Society, Vidya Vikas Circle, Gangapur Road, Nashik-422013'
              : null}
          </Text>
          <Text style={text}>
            {type !== 'success' ? `Cancellation Reason : ${message}` : null}
          </Text>
        </Section>
        <Hr />
        <Text style={links}>
          <Link href='https://sunilbhor.com/' style={link}>
            Website Link
          </Link>
        </Text>
        <Text style={footer}>
          SBA, Inc. Vidya Vikas Circle, Gangapur Road ・Nashik, 422013
        </Text>
      </Container>
    </Body>
  </Html>
);

FollowUpEmail.PreviewProps = {} as FollowUpEmailProps;

export default FollowUpEmail;

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
