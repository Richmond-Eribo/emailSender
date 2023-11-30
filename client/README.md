# Mail Sender - Client

This is the frontend of the mail sending provider. it is currently under
development.

## Setting up the project

1. Open a terminal in the project root.
2. Navigate to the client folder: `cd client`
3. Create a .env file in the client folder using the .env.example file as a
   reference: `cp .env`
4. Replace `VITE_AXIOS_BASE_URL` in the .env file with the URL of your deployed
   backend.

## Description of the UI for the mail sender

The main page is a simple email interface that allows you to send an email to
one or more recipients. It has the following features:

1. To: A text box where you can enter the email addresses of the recipients,
   separated by commas.
2. Choose templates: A drop-down menu where you can choose a pre-written email
   template, `under developmment`
3. Choose Recipient: shows a pop-up window that allows you to add a recipient to
   your mailing list. You can enter the name, email, company, and role of the
   recipient, and then click on the “Add Recipient” button. You can also close
   the window by clicking on the “Close” button.
4. Send Mail: A button that will send the email to the recipients using the
   selected template.
