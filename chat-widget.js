/*
  Simple chat widget for the portfolio.  This script injects a floating
  chat bubble onto your page. When clicked it opens a small chat
  window where visitors can send messages. Responses are handled via
  a lookup table of common questions and answers. This avoids any
  external API calls or token limits, keeping the widget completely
  free to use. You can customise the Q&A pairs in the `responses`
  object below.  If a visitor asks something that isn’t recognised
  the bot will reply with a default message.

  The widget uses a few utility classes from Tailwind CSS loaded
  dynamically.  If you prefer to avoid external dependencies you can
  replace the class names with your own CSS and remove the import at
  the top.
*/

/**
 * A self‑contained chat widget that does not depend on Tailwind for
 * visibility toggling.  When the bubble is clicked the chat
 * window appears; clicking again hides it.  This update replaces
 * the reliance on Tailwind’s `hidden` class and uses inline styles
 * instead, so the widget works even when external CSS isn’t
 * available.  Additionally, the colours and sizing are defined
 * directly within this script to reduce dependency on external
 * frameworks.  You can customise the responses in the `responses`
 * object to fit your needs.
 */
(function() {
  // Insert a basic style block for the widget.  These styles
  // define the appearance of the bubble and the chat window.  The
  // z-index values ensure the widget stays on top of other page
  // elements.
  const style = document.createElement('style');
  style.textContent = `
    .chat-widget-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
    }
    .chat-bubble {
      width: 56px;
      height: 56px;
      background-color: #bf00ff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #fff;
      font-size: 24px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
      transition: background-color 0.2s;
    }
    .chat-bubble:hover {
      background-color: #9d00cc;
    }
    .chat-popup {
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 340px;
      height: 70vh;
      max-height: 70vh;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      display: none;
      flex-direction: column;
      z-index: 10000;
    }
    .chat-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background-color: #0a0a23;
      color: #fff;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    .chat-messages {
      flex: 1;
      padding: 10px;
      overflow-y: auto;
      background-color: #f7f7fa;
    }
    .chat-input-container {
      padding: 10px;
      border-top: 1px solid #eee;
    }
    .chat-input-container input {
      flex: 1;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 6px 8px;
      outline: none;
      font-size: 14px;
    }
    .chat-input-container button {
      margin-left: 8px;
      background-color: #0a0a23;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 7px 12px;
      cursor: pointer;
      font-size: 14px;
    }
    .chat-input-container button:hover {
      background-color: #1a1a33;
    }
    .msg-row {
      display: flex;
      margin-bottom: 8px;
    }
    .msg-row.user {
      justify-content: flex-end;
    }
    .msg-bubble {
      max-width: 75%;
      padding: 6px 10px;
      border-radius: 12px;
      font-size: 14px;
      line-height: 1.4;
      word-break: break-word;
    }
    .msg-bubble.user {
      background-color: #0a0a23;
      color: #fff;
      border-bottom-right-radius: 0;
    }
    .msg-bubble.bot {
      background-color: #e6e6f0;
      color: #000;
      border-bottom-left-radius: 0;
    }
    .chat-footer-info {
      text-align: center;
      font-size: 10px;
      color: #666;
      margin-top: 4px;
    }
  `;
  document.head.appendChild(style);

  // Create container and bubble elements
  const container = document.createElement('div');
  container.className = 'chat-widget-container';
  document.body.appendChild(container);

  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble';
  bubble.innerHTML = `<span>&#128172;</span>`; // speech bubble icon
  container.appendChild(bubble);

  // Create popup
  const popup = document.createElement('div');
  popup.className = 'chat-popup';
  popup.innerHTML = `
    <div class="chat-header">
      <h3 style="margin:0;font-size:14px;font-weight:600;">Chat with Umme's Bot</h3>
      <button id="chat-close" style="background:none;border:none;color:#fff;font-size:16px;cursor:pointer;">&times;</button>
    </div>
    <div class="chat-messages" id="chat-messages"></div>
    <div class="chat-input-container">
      <div style="display:flex;align-items:center;">
        <input type="text" id="chat-input" placeholder="Type your message..." />
        <button id="chat-send">Send</button>
      </div>
      <div class="chat-footer-info">This bot answers a few common questions about the portfolio.</div>
    </div>
  `;
  document.body.appendChild(popup);

  // Responses for known questions
  const responses = {
    hello: "Hello! Thanks for visiting my portfolio.",
    hi: "Hello! Thanks for visiting my portfolio.",
    name: "I'm Umme Athiya, an AI/ML engineer specialising in generative AI.",
    experience: "I have over five years of experience spanning roles at DePaul University, IBM and various research internships.",
    projects: "You can explore my projects below – they include SmartSign, RAGflix, ResumeRadar and more.",
    contact: "Feel free to reach out via the links in the contact section below!"
  };

  const messagesEl = popup.querySelector('#chat-messages');
  const inputEl = popup.querySelector('#chat-input');
  const sendBtn = popup.querySelector('#chat-send');
  const closeBtn = popup.querySelector('#chat-close');

  // Helper to display a message in the chat
  function displayMessage(text, fromUser) {
    const row = document.createElement('div');
    row.className = 'msg-row' + (fromUser ? ' user' : '');
    const bubbleEl = document.createElement('div');
    bubbleEl.className = 'msg-bubble ' + (fromUser ? 'user' : 'bot');
    bubbleEl.textContent = text;
    row.appendChild(bubbleEl);
    messagesEl.appendChild(row);
    // Auto-scroll to bottom
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  // Determine a response based on keywords
  function getResponse(message) {
    const query = message.toLowerCase();
    for (const key in responses) {
      if (query.includes(key)) return responses[key];
    }
    return "I'm sorry, I'm just a simple demo bot. Please explore the site to learn more!";
  }

  // Handle sending a message
  function handleSend() {
    const message = inputEl.value.trim();
    if (!message) return;
    displayMessage(message, true);
    inputEl.value = '';
    setTimeout(() => {
      const reply = getResponse(message);
      displayMessage(reply, false);
    }, 300);
  }
  sendBtn.addEventListener('click', handleSend);
  inputEl.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  // Toggle popup visibility
  function togglePopup() {
    if (popup.style.display === 'none' || popup.style.display === '') {
      popup.style.display = 'flex';
      // Focus input after slight delay to ensure element is visible
      setTimeout(() => inputEl.focus(), 10);
    } else {
      popup.style.display = 'none';
    }
  }
  // Initially hide popup
  popup.style.display = 'none';

  bubble.addEventListener('click', togglePopup);
  closeBtn.addEventListener('click', togglePopup);
})();