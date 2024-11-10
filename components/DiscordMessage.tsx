// components/DiscordMessage.tsx

import React from 'react';

interface Author {
  name: string;
  avatarUrl: string;
  isBot?: boolean;
  roleBadge?: string;
}

interface DiscordMessageProps {
  author: Author;
  messageContent: string;
  timestamp?: string;
  replyTo?: {
    author: Author;
    messageContent: string;
  };
  slashCommand?: string;
  isSlashCommandReply?: boolean;
}

const DiscordMessage: React.FC<DiscordMessageProps> = ({
  author,
  messageContent,
  timestamp,
  replyTo,
  slashCommand,
  isSlashCommandReply = false,
}) => {
  return (
    <div className="flex items-start p-2 space-y-1 bg-[#23272A] rounded-lg">
      <img src={author.avatarUrl} alt={`${author.name}'s avatar`} className="w-10 h-10 rounded-full mr-3" />

      <div className="flex flex-col">
        {replyTo && (
          <div className="flex items-center text-sm text-gray-400 mb-1 pl-10 border-l-2 border-gray-600">
            <span className="mr-2">@{replyTo.author.name}</span>
            <span>{replyTo.messageContent}</span>
          </div>
        )}
        {slashCommand && isSlashCommandReply && (
          <div className="flex items-center text-sm text-gray-500 mb-1 italic">
            <span className="text-blue-400 mr-1">{author.name}</span>
            used <span className="text-blue-500 bg-blue-900 px-1 py-0.5 rounded-md mx-1">/{slashCommand}</span>
          </div>
        )}
        <div>
          <div className="flex items-center space-x-1">
            <span className="text-sm font-semibold text-gray-200">{author.name}</span>
            {author.roleBadge && (
              <span className="px-1 py-0.5 bg-yellow-500 text-xs text-black font-bold rounded-md">{author.roleBadge}</span>
            )}
            {author.isBot && <span className="px-2 py-0.5 bg-blue-500 text-xs text-white font-bold rounded-md">APP</span>}
            {timestamp && <span className="text-xs text-gray-500">{timestamp}</span>}
          </div>
          <p className="text-sm text-gray-300 mt-1">{messageContent}</p>
        </div>
      </div>
    </div>
  );
};

export default DiscordMessage;
