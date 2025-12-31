import { faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGraduationCap,faAward} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface SocialLinks {
  link: string;
  label: string;
  customSvgPath?: string;
  icon: IconDefinition;
}


export const social_links: SocialLinks []= [
  {
    link: 'https://www.linkedin.com/jens-kohl/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/JensKohl',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://scholar.google.de/citations?user=M3vi8zEAAAAJ&hl=de',
    label: 'Google Scholar',
    customSvgPath: "M12 2L1 9l11 7 9-5.74V17h2V9L12 2zM18.17 12L12 15.91 5.83 12 12 8.09 18.17 12zM12 18.04c-2.42 0-4.38-1.96-4.38-4.38h2c0 1.31 1.07 2.38 2.38 2.38s2.38-1.07 2.38-2.38h2c0 2.42-1.96 4.38-4.38 4.38z",
    icon: faGraduationCap, // Fallback icon
  },
  {
    link: 'mailto:jens.kohl@gmx.de',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://www.credly.com/users/jens-kohl',
    label: 'Credly',
    icon: faAward,
  },
];

