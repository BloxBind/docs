// components/DiscordEmbed.tsx

import React from 'react';

interface DiscordEmbedProps {
  author?: {
    name: string;
    iconUrl?: string;
    url?: string;
  };
  title?: string;
  description?: string;
  fields?: { name: string; value: string; inline?: boolean }[];
  imageUrl?: string;
  thumbnailUrl?: string;
  footer?: {
    text: string;
    iconUrl?: string;
  };
  buttons?: { label: string; style: 'primary' | 'secondary' | 'danger'; onClick?: () => void }[];
  color?: string; // Hex color for the left border
}

const DiscordEmbed: React.FC<DiscordEmbedProps> = ({
  author,
  title,
  description,
  fields,
  imageUrl,
  thumbnailUrl,
  footer,
  buttons,
  color = '#5865F2',
}) => {
  return (
    <div className="border-l-4 p-4 rounded-md bg-gray-800 text-white max-w-lg" style={{ borderColor: color }}>
      {/* Author Section */}
      {author && (
        <div className="flex items-center mb-3">
          {author.iconUrl && <img src={author.iconUrl} alt="Author Icon" className="w-8 h-8 rounded-full mr-2" />}
          {author.url ? (
            <a href={author.url} className="text-sm font-semibold text-blue-400 hover:underline">
              {author.name}
            </a>
          ) : (
            <span className="text-sm font-semibold">{author.name}</span>
          )}
        </div>
      )}

      {/* Title */}
      {title && <div className="mb-2 text-xl font-bold text-gray-200">{title}</div>}

      {/* Description */}
      {description && <div className="text-gray-300 mb-4">{description}</div>}

      {/* Fields */}
      {fields && fields.length > 0 && (
        <div className="mb-4 grid gap-2">
          {fields.map((field, index) => (
            <div
              key={index}
              className={`text-sm p-2 bg-gray-700 rounded ${field.inline ? 'inline-block mr-2' : 'block'}`}
            >
              <div className="font-semibold text-gray-400">{field.name}</div>
              <div className="text-gray-300">{field.value}</div>
            </div>
          ))}
        </div>
      )}

      {/* Thumbnail */}
      {thumbnailUrl && <img src={thumbnailUrl} alt="Thumbnail" className="w-16 h-16 rounded float-right ml-4 mb-2" />}

      {/* Image */}
      {imageUrl && (
        <div className="mb-4">
          <img src={imageUrl} alt="Embed Image" className="rounded-md" />
        </div>
      )}

      {/* Footer */}
      {footer && (
        <div className="flex items-center text-gray-500 text-sm mt-2">
          {footer.iconUrl && <img src={footer.iconUrl} alt="Footer Icon" className="w-4 h-4 mr-2 rounded-full" />}
          <span>{footer.text}</span>
        </div>
      )}

      {/* Buttons */}
      {buttons && buttons.length > 0 && (
        <div className="mt-3 space-x-2">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className={`px-4 py-1 rounded ${
                button.style === 'primary'
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : button.style === 'secondary'
                  ? 'bg-gray-600 hover:bg-gray-700'
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DiscordEmbed;
