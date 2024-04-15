import styles from './styles.module.scss';

export const BioCard = ({ title, href, variant = 'default' }) => {
  return (
    <li className={styles.linkCard} data-variant={variant}>
      <a href={href}>{title}</a>
    </li>
  );
};
