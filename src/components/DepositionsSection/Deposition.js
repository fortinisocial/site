import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Article = styled.article`
  img {
    mask: url('/images/depositions/avatar-mask.svg');
    object-fit: cover;
  }

  scroll-snap-align: center;
  text-align: center;
  font-weight: 500;
  flex-basis: 100%;
  flex-shrink: 0;
  line-height: 2;

  p {
    font-weight: 500;
    color: #174f86;

    &:first-of-type {
      margin-top: 0;
    }
  }

  .author {
    margin: 0;
    font-style: normal;
    font-size: 1.2rem;
    color: #232323;
  }

  .author-info {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 500;
    font-style: normal;
    color: #6a6363;
    line-height: 1.4;
  }
`;
export default function Deposition({
  photoURL,
  photoLabel,
  children,
  authorName,
  authorInfo,
  onScroll,
}) {
  const depositionRef = useRef(null);

  useEffect(() => {
    function handleObserver(observer) {
      const [observerEntry] = observer;
      const isFirstElement = !observerEntry.target.previousElementSibling;
      const isLastElement = !observerEntry.target.nextElementSibling;
      if (isFirstElement || isLastElement) {
        onScroll?.({
          ...(isFirstElement && { arrowLeft: !observerEntry.isIntersecting }),
          ...(isLastElement && {
            arrowRight: !observerEntry.isIntersecting,
          }),
        });
      }
    }

    const observer = new IntersectionObserver(handleObserver, {
      root: document.getElementById('#depositions-container'),
      rootMargin: '200px',
      threshold: 0.75,
    });

    observer.observe(depositionRef.current);

    return () => observer.disconnect();
  }, [onScroll]);

  return (
    <Article ref={depositionRef}>
      <img
        src={photoURL}
        alt={photoLabel}
        width={175}
        height={175}
        loading="lazy"
      />
      <p>{children}</p>
      <p className="author">{authorName}</p>
      <p className="author-info">{authorInfo}</p>
    </Article>
  );
}
