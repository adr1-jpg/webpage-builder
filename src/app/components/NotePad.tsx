import React, { useState, useEffect } from "react";
import {
  StickyNote,
  X,
  ChevronDown,
  ChevronUp,
  ChevronRight,
} from "lucide-react";
import { Button } from "@headlessui/react";
import { FaMagic } from "react-icons/fa";
const NotePad = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);



  return (
    <div
      className={`fixed right-0 top-1 flex z-50 transition-all duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-[calc(100%-48px)]"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-12 bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center rounded-l-lg shadow-lg"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-yellow-900" />
        ) : (
          <FaMagic className="w-6 h-6 text-yellow-900" />
        )}
      </button>

      {/* Notepad Content */}
      <div className="w-80 bg-yellow-50 shadow-lg rounded-l-lg border-l border-t border-b border-yellow-200">
        <div className="p-4">
          <div className="flex flex-col justify-between  mb-2">
            <h3 className="text-lg font-semibold text-yellow-900">
              What do you want to build?
            </h3>
            <p>
              Tell us what you're building, and AI will generate your page.
            </p>
          </div>

          <div
            className={`transition-all duration-300 overflow-hidden ${
              isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="relative">
              <textarea
   
              placeholder="Write your page goals here..."
              className="w-full min-h-[45px] max-h-[350px] h-28 p-3 bg-white rounded border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-y"
              />
              <button className="absolute bottom-4 right-2 p-1 bg-yellow-400 hover:bg-yellow-500 rounded-full">
              <ChevronRight className="w-3 h-3" />
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotePad;
