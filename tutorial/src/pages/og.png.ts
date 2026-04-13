import type { APIRoute } from 'astro';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { createElement as h } from 'react';

export const prerender = true;

/** Fetches an Inter font variant as TTF via Google Fonts CSS API. */
async function loadInterFont(weight: number): Promise<ArrayBuffer> {
  // Request the CSS from Google Fonts using a user-agent that receives TTF/OTF
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`,
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
      },
    },
  ).then((r) => r.text());

  const match = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
  if (!match) throw new Error(`Could not find TTF URL for Inter weight ${weight}`);
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export const GET: APIRoute = async () => {
  const [regularData, boldData] = await Promise.all([
    loadInterFont(400),
    loadInterFont(800),
  ]);

  const svg = await satori(
    h('div', {
      style: {
        background: '#0d0d16',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        fontFamily: 'Inter',
        position: 'relative',
      },
    },
      // Decorative border
      h('div', {
        style: {
          position: 'absolute',
          inset: '0',
          border: '2px solid #1e1e30',
          borderRadius: '0',
          pointerEvents: 'none',
        },
      }),
      // Yellow accent bar top
      h('div', {
        style: {
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '6px',
          background: '#f7df1e',
        },
      }),
      // Logo / wordmark
      h('div', {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        },
      },
        h('div', {
          style: {
            background: '#f7df1e',
            color: '#0d0d16',
            fontSize: '36px',
            fontWeight: 800,
            padding: '8px 16px',
            borderRadius: '8px',
            letterSpacing: '-0.02em',
          },
        }, 'JS'),
        h('div', {
          style: {
            fontSize: '52px',
            fontWeight: 800,
            color: '#e2e2f0',
            letterSpacing: '-0.03em',
          },
        }, 'JavaScripto'),
      ),
      // Tagline
      h('div', {
        style: {
          fontSize: '28px',
          fontWeight: 400,
          color: '#7878a0',
          textAlign: 'center',
          maxWidth: '800px',
        },
      }, 'Programe em português, pense em JavaScript'),
      // Code snippet decoration
      h('div', {
        style: {
          display: 'flex',
          gap: '12px',
          marginTop: '8px',
        },
      },
        ...[
          ['funcao', '#c792ea'],
          ['deixe', '#c792ea'],
          ['retorne', '#c792ea'],
          ['imprima', '#82aaff'],
          ['se', '#c792ea'],
          ['aguarde', '#c792ea'],
        ].map(([word, color]) =>
          h('span', {
            style: {
              background: '#12121e',
              border: '1px solid #1e1e30',
              borderRadius: '6px',
              padding: '4px 12px',
              fontSize: '18px',
              color,
              fontFamily: 'Inter',
            },
          }, word)
        )
      ),
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: regularData, weight: 400, style: 'normal' },
        { name: 'Inter', data: boldData, weight: 800, style: 'normal' },
      ],
    },
  );

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  const pngData = resvg.render().asPng();
  const arrayBuffer = pngData.buffer.slice(
    pngData.byteOffset,
    pngData.byteOffset + pngData.byteLength,
  ) as ArrayBuffer;

  return new Response(arrayBuffer, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
