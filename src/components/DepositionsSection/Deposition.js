import styled from 'styled-components';

const Article = styled.article`
  img {
    mask: url('/images/depositions/avatar-mask.svg');
    object-fit: cover;
  }

  scroll-snap-align: center;
  text-align: center;
  font-weight: 400;
  flex-basis: 100%;
  flex-shrink: 0;
  line-height: 2;

  p {
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
    font-weight: 400;
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
}) {
  return (
    <Article>
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
