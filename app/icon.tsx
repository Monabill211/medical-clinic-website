export function GET() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="16" fill="#0E7D33" />
      <path d="M32 14c-8 0-14 6-14 14 0 11 14 22 14 22s14-11 14-22c0-8-6-14-14-14zm0 19a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" fill="#ffffff"/>
    </svg>
  `;

  return new Response(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
}

export default function handler() {
  return GET();
}
