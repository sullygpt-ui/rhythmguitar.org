import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0f',
          borderRadius: '6px',
        }}
      >
        <svg width="24" height="30" viewBox="0 0 24 30" fill="none">
          <g transform="rotate(15, 12, 15)">
            {/* Headstock */}
            <rect x="8" y="0" width="6" height="6" rx="1" fill="#f59e0b" />
            {/* Tuning pegs */}
            <rect x="5" y="1" width="3" height="1.2" rx="0.5" fill="#f59e0b" />
            <rect x="5" y="3.5" width="3" height="1.2" rx="0.5" fill="#f59e0b" />
            <rect x="14" y="1" width="3" height="1.2" rx="0.5" fill="#f59e0b" />
            <rect x="14" y="3.5" width="3" height="1.2" rx="0.5" fill="#f59e0b" />
            {/* Neck */}
            <rect x="9.5" y="6" width="3" height="10" fill="#f59e0b" />
            {/* Upper bout */}
            <ellipse cx="11" cy="19" rx="7" ry="5" fill="#f59e0b" />
            {/* Lower bout */}
            <ellipse cx="11" cy="26" rx="9.5" ry="5" fill="#f59e0b" />
            {/* Sound hole cutout */}
            <circle cx="11" cy="21" r="2.5" fill="#0a0a0f" />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  )
}
