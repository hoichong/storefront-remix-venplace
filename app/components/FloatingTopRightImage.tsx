import React from 'react';

/**
 * FloatingTopRightImage
 *
 * A clickable image that sits at the top-right of its nearest positioned ancestor (the container div).
 * - Fully responsive: scales with viewport while keeping a sensible max width.
 * - Accessible: includes alt text and focus-visible outline.
 *
 * Usage:
 *  <div className="container">  // must be position:relative (see style below)
 *    <FloatingTopRightImage
 *      src="/images/promo.png"
 *      href="/promo"
 *      alt="Open the special promotion"
 *    />
 *    { rest of your homepage content }
 *  </div>
 */
export default function FloatingTopRightImage({
  src,
  href = '#',
  alt = '',
  imgWidth = 'min(35vw, 200px)',
  top = '0.75rem',
  right = '0.75rem',
  newTab = false,
}) {
  return (
    <>
      <style>{`
        .floating-container { position: relative; }
        
        .floating-link { 
          position: absolute; 
          inset: ${''};
        }
      `}</style>
      <style>{`

        .floating-image-link {
          position: absolute;
          top: ${top};
          right: ${right};
          display: inline-block;
          text-decoration: none;
          line-height: 0; /* remove inline-gap */
          z-index: 9;
        }

        .floating-image-link:focus-visible {
          outline: 3px solid rgba(0, 0, 0, 0.5);
          outline-offset: 4px;
          border-radius: 12px;
        }

        .floating-image {
          width: ${imgWidth};
          height: auto;
          max-width: 100%;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          display: block;
        }

        @media (min-width: 768px) {
          .floating-image { width: min(22vw, 240px); }
        }

        @media (prefers-reduced-motion: no-preference) {
          .floating-image-link { transition: transform 160ms ease, box-shadow 160ms ease; }
          .floating-image-link:hover { transform: translateY(-2px); }
          .floating-image-link:active { transform: translateY(0); }
        }
      `}</style>

      <a
        className="floating-image-link"
        href={href}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
        aria-label={alt || 'Open link'}
      >
        <img className="floating-image" src={src} alt={alt} />
      </a>
    </>
  );
}
