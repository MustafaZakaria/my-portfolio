import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import DownloadCV from '../DownloadCV';
import SocialMedia from '../common/SocialMedia';

const MyProfile = () => {
  return (
    <Flex maxW='56.25rem' mt={{ base: '2rem', md: '3rem' }}>
      <Flex alignItems='center' gap='1rem' flexDir={{ base: 'column', md: 'row' }}>
        <Flex borderWidth={2} overflow='hidden' borderRadius='100%' maxW='12.5rem' maxH='12.5rem'>
          <Image
            src='/assets/images/profile/profile-pic.webp'
            width={200}
            height={200}
            alt='profile picture'
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        </Flex>
        <Flex maxW='27.875rem' flexDir='column'>
          <Text color='primary1'>Hi, I&apos;m</Text>
          <Text textStyle='h6-primary' fontWeight={700} color='primary1'>
            Mustafa Zakaria
          </Text>
          <Flex py='0.5rem'>
            <SocialMedia />
          </Flex>
          <Text color='primary1'>
            Passionate full-stack developer with 4 years of experience in the field. I specialize in building robust and
            scalable web and mobile applications using various technologies and frameworks.
          </Text>
          <Flex mt='1.5rem'>
            <DownloadCV />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MyProfile;
