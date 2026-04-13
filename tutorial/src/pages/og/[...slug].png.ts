import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { createElement as h } from 'react';

export const prerender = true;

/** Fetches an Inter font variant as TTF via the Google Fonts CSS API. */
async function loadInterFont(weight: number): Promise<ArrayBuffer> {
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

// Fonts are loaded once and shared across all static paths in the same build.
let fontsPromise: Promise<[ArrayBuffer, ArrayBuffer]> | null = null;
function getFonts() {
  if (!fontsPromise) {
    fontsPromise = Promise.all([loadInterFont(400), loadInterFont(800)]);
  }
  return fontsPromise;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await getCollection('tutorial');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type AnyEntry = { slug: string; data: any };
  const anyEntries = entries as AnyEntry[];

  // Build a slug → title map for parts and chapters from meta.md files
  const metaTitles = new Map<string, string>();
  for (const entry of anyEntries) {
    if (entry.slug.endsWith('/meta') && entry.data.title) {
      metaTitles.set(entry.slug.replace('/meta', ''), entry.data.title as string);
    }
  }

  // Each lesson has a content.md with type "lesson"
  const lessons = anyEntries.filter(
    (e) => e.slug.endsWith('/content') && e.data.type === 'lesson',
  );

  return lessons.map((lesson) => {
    // e.g. "1-fundamentos/1-primeiros-passos/1-ola-mundo/content"
    const lessonSlug = lesson.slug.replace('/content', '');
    const segments = lessonSlug.split('/'); // ["1-fundamentos", "1-primeiros-passos", "1-ola-mundo"]
    const partSlug = segments[0];
    const chapterSlug = segments.slice(0, 2).join('/');

    return {
      params: { slug: lessonSlug },
      props: {
        lessonTitle: lesson.data.title as string,
        chapterTitle: metaTitles.get(chapterSlug) ?? '',
        partTitle: metaTitles.get(partSlug) ?? '',
      },
    };
  });
};

interface Props {
  lessonTitle: string;
  chapterTitle: string;
  partTitle: string;
}

export const GET: APIRoute<Props> = async ({ props }) => {
  const { lessonTitle, chapterTitle, partTitle } = props;
  const [regularData, boldData] = await getFonts();

  const svg = await satori(
    h('div', {
      style: {
        background: '#0d0d16',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'Inter',
        padding: '56px 72px',
        position: 'relative',
      },
    },
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
      // Top row: logo + part name
      h('div', {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
      },
        // Logo
        h('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          },
        },
          h('div', {
            style: {
              background: '#f7df1e',
              color: '#0d0d16',
              fontSize: '22px',
              fontWeight: 800,
              padding: '5px 11px',
              borderRadius: '6px',
              letterSpacing: '-0.02em',
            },
          }, 'JS'),
          h('div', {
            style: {
              fontSize: '26px',
              fontWeight: 800,
              color: '#e2e2f0',
              letterSpacing: '-0.02em',
            },
          }, 'JavaScripto'),
        ),
        // Part name
        partTitle
          ? h('div', {
              style: {
                fontSize: '20px',
                fontWeight: 400,
                color: '#7878a0',
                background: '#12121e',
                border: '1px solid #1e1e30',
                borderRadius: '8px',
                padding: '6px 16px',
              },
            }, partTitle)
          : null,
      ),
      // Center: lesson title
      h('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          flex: '1',
          justifyContent: 'center',
        },
      },
        h('div', {
          style: {
            fontSize: '72px',
            fontWeight: 800,
            color: '#e2e2f0',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
          },
        }, lessonTitle),
      ),
      // Bottom: chapter breadcrumb
      chapterTitle
        ? h('div', {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            },
          },
            h('div', {
              style: {
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#f7df1e',
              },
            }),
            h('div', {
              style: {
                fontSize: '22px',
                fontWeight: 400,
                color: '#7878a0',
              },
            }, chapterTitle),
          )
        : null,
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
