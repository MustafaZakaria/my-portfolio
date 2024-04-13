import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import { SocialMediaLink } from '@/constants/socialMedia';
import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

const SOCIAL_MEDIA_LINKS = [
  {
    name: 'github',
    link: SocialMediaLink.Github,
    Icon: Github,
  },
  {
    name: 'linkedin',
    link: SocialMediaLink.Linkedin,
    Icon: LinkedIn,
  },
];
const SocialMedia = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Flex gap='.25rem' alignItems='center'>
      {SOCIAL_MEDIA_LINKS.map(({ Icon, name, link }, index) => (
        <Flex
          cursor='pointer'
          key={name}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link target='_blank' href={link}>
            <Icon fill={hoveredIndex === index ? 'purple' : '#A6ADBB'} />
          </Link>
        </Flex>
      ))}
    </Flex>
  );
};

export default SocialMedia;
