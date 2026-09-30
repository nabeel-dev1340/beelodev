import { ImageResponse } from 'next/og';
import { revampContent } from './config/site';

export const alt = `Beelodev — ${revampContent.hero.title} ${revampContent.hero.emphasis}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#f6f5f0',
        color: '#242d29',
        padding: 65,
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: 35,
          fontWeight: 700,
          color: '#346747',
        }}
      >
        beelodev.
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 68,
          fontWeight: 600,
          letterSpacing: '-3px',
          lineHeight: 1.08,
          maxWidth: 1000,
        }}
      >
        {revampContent.hero.title} {revampContent.hero.emphasis}
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 23,
          color: '#606a63',
          borderTop: '1px solid #d6dcd2',
          paddingTop: 24,
        }}
      >
        Custom workflows · Connected tools · Useful results
      </div>
    </div>,
    size,
  );
}
