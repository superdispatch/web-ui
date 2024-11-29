import { ColorV2 } from '@superdispatch/ui';
import { CSSProperties, forwardRef, ReactNode } from 'react';

export interface PlaceholderProps {
  code?: string;
  text?: ReactNode;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}

export const Placeholder = forwardRef<HTMLDivElement, PlaceholderProps>(
  ({ code, text, width = 'auto', height = 'auto' }, ref) => (
    <div
      ref={ref}
      style={{
        width,
        height,
        backgroundColor: ColorV2.Silver200,
        border: `2px solid ${ColorV2.Silver500}`,
      }}
    >
      {code ? (
        <strong
          style={{
            color: ColorV2.Dark100,
            padding: '8px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <pre style={{ margin: 0 }}>{code}</pre>
        </strong>
      ) : text ? (
        <strong
          style={{
            color: ColorV2.Dark100,
            padding: '8px',
            width: '100%',
            height: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {text}
        </strong>
      ) : (
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <line
            x2="100%"
            y2="100%"
            strokeWidth="2px"
            stroke={ColorV2.Silver400}
          />
          <line
            x1="100%"
            y2="100%"
            strokeWidth="2px"
            stroke={ColorV2.Silver400}
          />
        </svg>
      )}
    </div>
  ),
);
