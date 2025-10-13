const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    // Parse the incoming data
    const { name, email, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields: name, email, message' })
      };
    }

    // Replace with your EmailJS service ID, template ID, and user ID
    const serviceID = 'your_service_id';
    const templateID = 'your_template_id';
    const userID = 'your_user_id'; // This is your EmailJS public key

    // Prepare the email data
    const emailData = {
      service_id: serviceID,
      template_id: templateID,
      user_id: userID,
      template_params: {
        from_name: name,
        from_email: email,
        to_email: 'your-email@example.com', // Your receiving email
        message: message,
        reply_to: email
      }
    };

    // Send email via EmailJS
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully!' })
      };
    } else {
      const errorText = await response.text();
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `EmailJS error: ${errorText}` })
      };
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Internal server error: ${error.message}` })
    };
  }
};