# EmailJS Setup Instructions

To enable email functionality in your contact form, you need to set up EmailJS:

## 1. Create an EmailJS Account
- Go to [EmailJS](https://www.emailjs.com/)
- Sign up for a free account

## 2. Create an Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions

## 3. Create an Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

## 4. Get Your Credentials
- Service ID: Found in your Email Services section
- Template ID: Found in your Email Templates section
- Public Key: Found in Account > API Keys

## 5. Update Environment Variables
Update the `.env` file with your actual credentials:

```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Form
- Run your development server: `npm run dev`
- Navigate to the contact section
- Fill out the form and submit
- Check your email for the message

## Troubleshooting
- Make sure your .env file is not committed to version control
- Check the browser console for any errors
- Verify your EmailJS credentials are correct
- Ensure your email template variables match the code
