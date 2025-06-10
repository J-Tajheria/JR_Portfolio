'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/assets/assets';

export default function Chat({ isDarkMode }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      // Add AI response
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{opacity: 0}} 
      whileInView={{opacity:1}} 
      transition={{duration:1}}
      className="w-full px-[12%] py-10 scroll-mt-20"
      id="chat"
    >
      <motion.h4 
        initial={{opacity: 0, y: -20}} 
        whileInView={{opacity:1, y:0}} 
        transition={{duration:0.5, delay:0.3}}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Let's Chat
      </motion.h4>
      <motion.h2 
        initial={{opacity: 0, y: -20}} 
        whileInView={{opacity:1, y:0}} 
        transition={{duration:0.5, delay:0.5}}
        className="text-center text-5xl font-Ovo mb-12"
      >
        Ask Me Anything
      </motion.h2>

      <motion.div 
        initial={{opacity: 0}} 
        whileInView={{opacity:1}} 
        transition={{duration:0.5, delay:0.7}}
        className="max-w-2xl mx-auto"
      >
        <div className={`rounded-lg shadow-lg p-4 mb-4 h-[400px] overflow-y-auto relative
          ${isDarkMode ? 'bg-darkHover/30 border border-white/50' : 'bg-white'}`}>
          {messages.length === 0 ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`w-full h-full ${isDarkMode ? 'text-white/30' : 'text-gray-300'}`}
                  >
                    <path
                      d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex space-x-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${
                            isDarkMode ? 'bg-white/50' : 'bg-gray-400'
                          }`}
                          animate={{
                            y: [0, -4, 0],
                          }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-white/50' : 'text-gray-500'}`}>
                  Start a conversation...
                </p>
              </motion.div>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.role === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-black/80 text-white dark:bg-transparent dark:border-[0.5px] dark:border-white/50 dark:hover:bg-darkHover'
                      : isDarkMode 
                        ? 'bg-darkHover/50 text-white/80'
                        : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className={`text-center ${isDarkMode ? 'text-white/80' : 'text-gray-500'}`}>
              Thinking...
            </div>
          )}
        </div>
        <motion.form 
          initial={{opacity: 0, y: 20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration:0.5, delay:0.9}}
          onSubmit={handleSubmit} 
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about my experience..."
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md
              ${isDarkMode 
                ? 'bg-darkHover/30 border-white/90 text-white placeholder-white/50' 
                : 'bg-white border-gray-400 text-gray-800'}`}
          />
          <motion.button
            whileHover={{scale: 1.05}}
            type="submit"
            disabled={isLoading}
            className={`py-3 px-8 rounded-full flex items-center justify-between gap-2
              ${isDarkMode
                ? 'bg-transparent border-[0.5px] border-white/50 text-white hover:bg-darkHover'
                : 'bg-black/80 text-white hover:bg-black'} 
              disabled:opacity-50 duration-500`}
          >
            Send
            <Image 
              src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} 
              alt="send" 
              className="w-4"
            />
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
} 