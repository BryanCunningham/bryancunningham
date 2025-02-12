'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './ChatBot.module.css';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatBot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Bryan's AI assistant. Feel free to ask me anything about his work experience and background!"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/bryancunningham/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      console.log({response})
      console.log({data})
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              message.role === 'user' ? styles.userMessage : styles.assistantMessage
            }`}
          >
            {message.content}
          </div>
        ))}
        {isLoading && (
          <div className={`${styles.message} ${styles.assistantMessage}`}>
            <div className={styles.typingIndicator}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Bryan's experience..."
          className={styles.input}
          disabled={isLoading}
        />
        <button 
          type="submit" 
          disabled={isLoading || !input.trim()}
          className={styles.sendButton}
        >
          Send
        </button>
      </form>
    </div>
  );
} 