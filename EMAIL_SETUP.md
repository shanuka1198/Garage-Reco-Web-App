# Email Setup Guide for Contact Form

The contact form is now configured to send emails using **EmailJS**, a free email service that works directly from the browser without needing a backend server.

## Setup Steps

### 1. Create an EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email

### 2. Add an Email Service
- In the EmailJS dashboard, go to **Email Services**
- Click **Add New Service**
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions for your email provider
- Copy the **Service ID** (you'll need this later)

### 3. Create an Email Template
- Go to **Email Templates** in the dashboard
- Click **Create New Template**
- Use the following template variables in your email body:

```
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}
```

- Save the template and copy the **Template ID**

### 4. Get Your Public Key
- Go to your **Account** settings
- Find your **Public Key** (not the private key!)

### 5. Update the Contact.tsx File

Replace the placeholder values in [src/pages/Contact.tsx](src/pages/Contact.tsx):

```tsx
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');  // Line ~26

// In handleSubmit function (around line 50):
await emailjs.send(
  'YOUR_EMAILJS_SERVICE_ID',
  'YOUR_EMAILJS_TEMPLATE_ID',
  {
    // ... rest of the code
  }
);
```

Replace:
- `YOUR_EMAILJS_PUBLIC_KEY` - Your EmailJS public key from Account settings
- `YOUR_EMAILJS_SERVICE_ID` - Your email service ID
- `YOUR_EMAILJS_TEMPLATE_ID` - Your email template ID

### 6. Test the Form
- Run `npm run dev`
- Go to the Contact page
- Fill out the form and click "Send Message"
- Check if you receive the email at your configured email address

## Features
✅ Form validation
✅ Loading state while sending
✅ Error handling with user-friendly messages
✅ Success message confirmation
✅ Responsive design
✅ No backend server required

## Support
- EmailJS Documentation: https://www.emailjs.com/docs/
- For issues with Gmail: https://www.emailjs.com/docs/tutorial/gmail/
- For issues with other providers: Check the EmailJS docs for your provider

## Security Note
Your EmailJS public key is safe to expose in client-side code. This is intentional in the EmailJS design. The public key can only send emails through your configured service and cannot access your account.
