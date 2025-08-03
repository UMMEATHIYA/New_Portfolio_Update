/*
  Chat widget that responds to user questions using a simple local
  knowledge base.  The knowledge base is stored in a JSON file
  (`knowledge-base.json`) consisting of question/answer pairs.
  When the user sends a message the script searches for the entry
  with the most words in common with the question and returns the
  corresponding answer.  If no adequate match is found, a default
  fallback response is used.

  This approach avoids any external API calls or costs, making it
  suitable for offline or static websites.  To extend the bot’s
  knowledge simply add more entries to `knowledge-base.json`.

  How to use:
    1. Place `knowledge-base.json` and this file in the same
       directory as your `index.html`.
    2. Include `<script src="chat-widget-kb.js" defer></script>`
       at the end of your HTML body.

  Note: The matching algorithm is very basic – it splits the user
  message into words and counts overlap with each question.  For
  production use you might consider integrating a fuzzy search
  library like Fuse.js for better matching.
*/

(function() {
  // Define the knowledge base directly in the script.  If you
  // wish to expand the bot’s knowledge simply add more objects to
  // this array.  Each entry should have a `question` and `answer`.
  const knowledgeBase = [
    {
      question: 'tell me about umme',
      answer: 'Umme Athiya is an AI/ML engineer based in Chicago with over five years of experience. She specialises in large language models, generative AI and building scalable ML systems.'
    },
    {
      question: 'what is llm',
      answer: 'LLM stands for Large Language Model – a type of neural network trained on vast amounts of text to understand and generate human‑like language.'
    },
    {
      question: 'what projects have you worked on',
      answer: 'Some of my highlighted projects include SmartSign (ASL to text translation), RAGflix (movie scene retrieval using language models), ResumeRadar (resume assistant with OCR), DeepArt (neural style transfer) and SentimentScope (real‑time sentiment dashboard).'
    },
    {
      question: 'how can i contact you',
      answer: 'You can get in touch via email (uathiya4@gmail.com), my personal website (ummeathiya.com), LinkedIn or GitHub – links are provided in the contact section.'
    },
    {
      question: 'where did you study',
      answer: 'I earned my M.S. in Computer Science (AI) from DePaul University in Chicago and my B.E. in Information Science from Don Bosco Institute of Technology.'
    },
    {
      question: 'what are your skills',
      answer: 'I work with Python, Java, C++, SQL, generative AI libraries, PyTorch, TensorFlow, MLflow, Docker, Kubernetes and many other tools. You can explore the Skills section for more details.'
    },
    {
      question: 'hello',
      answer: 'Hello! Thanks for visiting my portfolio. Feel free to ask me about my projects, experience or contact details.'
    },
    {
      question: 'hi',
      answer: 'Hello! Thanks for visiting my portfolio. Feel free to ask me about my projects, experience or contact details.'
    }
  ];

  // Find the best matching answer from the knowledge base
  function findAnswer(message, knowledgeBase) {
    const words = message.toLowerCase().split(/\s+/).filter(Boolean);
    let bestScore = 0;
    let bestAnswer = null;
    for (const entry of knowledgeBase) {
      const qWords = entry.question.toLowerCase().split(/\s+/);
      let score = 0;
      for (const w of words) {
        if (qWords.includes(w)) score++;
      }
      if (score > bestScore) {
        bestScore = score;
        bestAnswer = entry.answer;
      }
    }
    // If match is weak (less than one word in common) return null
    return bestScore > 0 ? bestAnswer : null;
  }

  // Create style definitions for the widget
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
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
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

  // Create DOM elements
  const container = document.createElement('div');
  container.className = 'chat-widget-container';
  document.body.appendChild(container);
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble';
  bubble.innerHTML = `<span>&#128172;</span>`;
  container.appendChild(bubble);
  const popup = document.createElement('div');
  popup.className = 'chat-popup';
  popup.innerHTML = `
    <div class="chat-header">
      <h3 style="margin:0;font-size:14px;font-weight:600;">Ask Umme's Bot</h3>
      <button id="chat-close" style="background:none;border:none;color:#fff;font-size:16px;cursor:pointer;">&times;</button>
    </div>
    <div class="chat-messages" id="chat-messages"></div>
    <div class="chat-input-container">
      <div style="display:flex;align-items:center;">
        <input type="text" id="chat-input" placeholder="Ask a question..." />
        <button id="chat-send">Send</button>
      </div>
      <div class="chat-footer-info">This bot uses a small local knowledge base.</div>
    </div>
  `;
  document.body.appendChild(popup);

  const messagesEl = popup.querySelector('#chat-messages');
  const inputEl = popup.querySelector('#chat-input');
  const sendBtn = popup.querySelector('#chat-send');
  const closeBtn = popup.querySelector('#chat-close');

  // Display messages
  function displayMessage(text, fromUser) {
    const row = document.createElement('div');
    row.className = 'msg-row' + (fromUser ? ' user' : '');
    const b = document.createElement('div');
    b.className = 'msg-bubble ' + (fromUser ? 'user' : 'bot');
    b.textContent = text;
    row.appendChild(b);
    messagesEl.appendChild(row);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  // The knowledge base array defined above is used directly.  No
  // asynchronous loading is needed when the data is embedded.

  // Handle sending message
  function handleSend() {
    const text = inputEl.value.trim();
    if (!text) return;
    displayMessage(text, true);
    inputEl.value = '';
    setTimeout(() => {
      const answer = findAnswer(text, knowledgeBase);
      const response = answer || "I'm sorry, I'm just a demo bot. Please explore the site to learn more!";
      displayMessage(response, false);
    }, 300);
  }
  sendBtn.addEventListener('click', handleSend);
  inputEl.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  // Toggle popup display
  function togglePopup() {
    if (popup.style.display === 'none' || popup.style.display === '') {
      popup.style.display = 'flex';
      setTimeout(() => inputEl.focus(), 10);
    } else {
      popup.style.display = 'none';
    }
  }
  popup.style.display = 'none';
  bubble.addEventListener('click', togglePopup);
  closeBtn.addEventListener('click', togglePopup);
})();