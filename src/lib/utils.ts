import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const shuffleArray = (a: any) => {
  let arr = [...a];
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const bgByType = (type: string) => {
      switch (type) {
          case 'bg-gray-50':
              return 'bg-gray-50';
          case 'bg-gray-100':
              return 'bg-gray-100';
          case 'bg-gray-200':
              return 'bg-gray-200';
          case 'bg-gray-300':
              return 'bg-gray-300';
          case 'bg-gray-400':
              return 'bg-gray-400';
          case 'bg-gray-500':
              return 'bg-gray-500';
          case 'bg-gray-600':
              return 'bg-gray-600';
          case 'bg-gray-700':
              return 'bg-gray-700';
          case 'bg-gray-800':
              return 'bg-gray-800';
          case 'bg-gray-900':
              return 'bg-gray-900';
          default:
              return 'bg-gray-50';
      }
  };
  
  const colorByType = (type: string) => {
      switch (type) {
          case 'text-white':
              return 'text-white';
          case 'text-black':
              return 'text-black';
          default:
              return 'text-white';
      }
  };
export {
  bgByType,
  colorByType,
  shuffleArray,
  shimmer,
  toBase64,
};
