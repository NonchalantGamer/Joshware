import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

/**
 * Official GitHub Octocat silhouette mark
 */
export const GithubIcon: React.FC<IconProps> = ({ className = 'w-4 h-4', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size || '100%'}
    height={size || '100%'}
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

/**
 * Official LinkedIn "in" logo
 */
export const LinkedinIcon: React.FC<IconProps> = ({ className = 'w-4 h-4', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size || '100%'}
    height={size || '100%'}
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

/**
 * Official X (formerly Twitter) geometric logo
 */
export const XIcon: React.FC<IconProps> = ({ className = 'w-4 h-4', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size || '100%'}
    height={size || '100%'}
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/**
 * Official WhatsApp logo with communication balloon and phone handset
 */
export const WhatsappIcon: React.FC<IconProps> = ({ className = 'w-4 h-4', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size || '100%'}
    height={size || '100%'}
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.783-1.676-2.084-.176-.3-.019-.463.132-.613.136-.135.301-.351.451-.527.15-.176.201-.3.301-.501.101-.2.05-.376-.025-.527-.075-.15-.677-1.633-.928-2.235-.245-.586-.494-.506-.677-.515l-.577-.01c-.2 0-.527.075-.802.376s-1.054 1.029-1.054 2.509c0 1.48 1.079 2.909 1.23 3.109.15.2 2.122 3.241 5.141 4.545.718.31 1.279.495 1.716.634.721.23 1.377.197 1.896.12.578-.087 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.431-.076-.125-.276-.2-.577-.35zM12.042 2C6.516 2 2.028 6.486 2.028 12.012c0 1.764.46 3.488 1.334 5.006L2 22l5.127-1.344a9.98 9.98 0 004.915 1.282h.004c5.525 0 10.013-4.487 10.013-10.014C22.059 6.486 17.568 2 12.042 2zm0 18.328h-.003a8.31 8.31 0 01-4.238-1.164l-.304-.18-3.148.825.84-3.067-.198-.315a8.307 8.307 0 01-1.273-4.416c0-4.588 3.733-8.32 8.324-8.32 2.223 0 4.313.867 5.884 2.44a8.28 8.28 0 012.436 5.884c0 4.59-3.733 8.324-8.324 8.324z" />
  </svg>
);

/**
 * Official Google Gmail logo (Standard Envelope / M Mark)
 */
export const GmailIcon: React.FC<IconProps> = ({ className = 'w-4 h-4', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size || '100%'}
    height={size || '100%'}
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

/**
 * Multi-color Official Google Gmail Brand Logo
 */
export const GmailColorIcon: React.FC<IconProps> = ({ className = 'w-4 h-4', size, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size || '100%'}
    height={size || '100%'}
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path fill="#4285F4" d="M22 6.5V18c0 1.1-.9 2-2 2h-3V11.5L22 6.5z" />
    <path fill="#34A853" d="M2 6.5L7 11.5V20H4c-1.1 0-2-.9-2-2V6.5z" />
    <path fill="#EA4335" d="M17 4.2H7L12 9.5 17 4.2z" />
    <path fill="#FBBC04" d="M2 6.5C2 5.2 2.9 4.2 4.2 4.2h2.8L2 8.9V6.5z" />
    <path fill="#C5221F" d="M22 6.5C22 5.2 21.1 4.2 19.8 4.2H17l5 4.7V6.5z" />
  </svg>
);
