import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

const SOCIAL_MEDIA_LINKS = [
  {
    name: 'github',
    link: 'https://github.com/MustafaZakaria1',
    Icon: Github,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/mustafa-zakaria-807a6a156/',
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
