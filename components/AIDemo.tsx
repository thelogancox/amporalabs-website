"use client";

import { useState, useEffect, useRef } from "react";
import { Zap, Sparkles, CheckCircle2, Bot } from "lucide-react";

interface Message {
  id: number;
  type: "user" | "ai";
  text: string;
}

const demoConversations = [
  {
    user: "What size wire for a 100A subpanel 150ft away?",
    ai: "For 100A at 150ft: Use #1/0 AWG copper or #3/0 AWG aluminum to account for voltage drop. Per NEC 310.16 and 215.2(A)(4).",
  },
  {
    user: "Can I use a 20A breaker on 14 AWG?",
    ai: "No - code violation. Per NEC 240.4(D)(3): 14 AWG is limited to 15A max. Use 12 AWG wire or a 15A breaker.",
  },
  {
    user: "Derating for 9 conductors in conduit?",
    ai: "Per NEC Table 310.15(C)(1): 9 conductors require 70% derating. Reference: 4-6 = 80%, 7-9 = 70%, 10-20 = 50%.",
  },
];

export default function AIDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTypingAI, setIsTypingAI] = useState(false);
  const [displayedAIText, setDisplayedAIText] = useState("");
  const [completedDemos, setCompletedDemos] = useState<number[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(0);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, displayedAIText]);

  const runDemo = (index: number) => {
    if (isTypingAI || completedDemos.includes(index)) return;

    const convo = demoConversations[index];

    // Add user message immediately
    const userMsgId = ++messageIdRef.current;
    setMessages((prev) => [...prev, { id: userMsgId, type: "user", text: convo.user }]);

    // Start AI typing after brief delay
    setTimeout(() => {
      setIsTypingAI(true);
      setDisplayedAIText("");

      let aiCharIndex = 0;
      const typeInterval = setInterval(() => {
        if (aiCharIndex <= convo.ai.length) {
          setDisplayedAIText(convo.ai.slice(0, aiCharIndex));
          aiCharIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTypingAI(false);
          setDisplayedAIText("");

          const aiMsgId = ++messageIdRef.current;
          setMessages((prev) => [...prev, { id: aiMsgId, type: "ai", text: convo.ai }]);
          setCompletedDemos((prev) => [...prev, index]);
        }
      }, 15);
    }, 400);
  };

  const resetDemo = () => {
    setMessages([]);
    setCompletedDemos([]);
    setDisplayedAIText("");
  };

  return (
    <section id="explore" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ampora-500/10 border border-ampora-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-ampora-400" />
              <span className="text-sm text-ampora-300 font-medium">Live Demo</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-white">AI That Speaks</span>
              <br />
              <span className="gradient-text">Electrician</span>
            </h2>

            <p className="text-lg text-white/50 mb-8 leading-relaxed">
              Watch Ampora answer real electrical questions with NEC-backed responses.
              Tap a topic in the chat to see it in action.
            </p>

            <div className="space-y-3">
              {["NEC code references", "Calculation breakdowns", "Safety considerations", "Best practices"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ampora-500" />
                  <span className="text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Chat Demo */}
          <div className="bg-[#0a0014] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-ampora-500/10">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-white/10 bg-gradient-to-r from-ampora-900/50 to-transparent">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ampora-500 to-ampora-700 flex items-center justify-center shadow-lg shadow-ampora-500/30">
                <Zap className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-white">AMPORA AI</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400">Online</span>
                </div>
              </div>
              {messages.length > 0 && (
                <button
                  onClick={resetDemo}
                  className="text-xs text-ampora-400 hover:text-ampora-300 transition-colors"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Chat Messages */}
            <div ref={chatRef} className="h-[420px] sm:h-[380px] overflow-y-auto p-4 space-y-4">
              {/* Welcome + Suggested Questions */}
              {messages.length === 0 && (
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ampora-500 to-ampora-700 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3">
                      <p className="text-sm text-white/80">
                        Hey! I&apos;m your AI electrical assistant. Tap a question below to see me in action.
                      </p>
                    </div>
                  </div>

                  {/* Question buttons inside chat */}
                  <div className="pl-11 space-y-2">
                    <p className="text-xs text-white/40 mb-2">Try asking about:</p>
                    {demoConversations.map((convo, i) => (
                      <button
                        key={i}
                        onClick={() => runDemo(i)}
                        disabled={isTypingAI}
                        className="w-full text-left p-3 rounded-xl bg-ampora-500/10 border border-ampora-500/30 hover:bg-ampora-500/20 hover:border-ampora-500/50 transition-all text-sm text-white/90 disabled:opacity-50"
                      >
                        {convo.user}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Messages */}
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.type === "user" ? "justify-end" : ""}`}
                >
                  {message.type === "ai" && (
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ampora-500 to-ampora-700 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`rounded-2xl px-4 py-3 max-w-[85%] ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-ampora-600 to-ampora-500 rounded-tr-sm"
                        : "bg-white/5 border border-white/10 rounded-tl-sm"
                    }`}
                  >
                    <p className={`text-sm ${message.type === "user" ? "text-white" : "text-white/80"}`}>
                      {message.text}
                    </p>
                  </div>
                </div>
              ))}

              {/* AI Typing */}
              {isTypingAI && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ampora-500 to-ampora-700 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-white/80">
                      {displayedAIText}
                      <span className="inline-block w-2 h-4 bg-ampora-400 ml-1 animate-pulse" />
                    </p>
                  </div>
                </div>
              )}

              {/* More questions after conversation */}
              {messages.length > 0 && !isTypingAI && completedDemos.length < demoConversations.length && (
                <div className="pl-11 space-y-2 pt-2">
                  <p className="text-xs text-white/40">Ask another question:</p>
                  {demoConversations.map((convo, i) => (
                    !completedDemos.includes(i) && (
                      <button
                        key={i}
                        onClick={() => runDemo(i)}
                        className="w-full text-left p-3 rounded-xl bg-ampora-500/10 border border-ampora-500/30 hover:bg-ampora-500/20 hover:border-ampora-500/50 transition-all text-sm text-white/90"
                      >
                        {convo.user}
                      </button>
                    )
                  ))}
                </div>
              )}
            </div>

            {/* Input Area (decorative) */}
            <div className="p-4 border-t border-white/10 bg-black/30">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 opacity-60">
                <span className="flex-1 text-sm text-white/40">Ask about electrical codes...</span>
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
