import { Button, Text } from '@chakra-ui/react';
import React from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';

const DownloadCV = () => {
  const handleDownloadCV = () => {
    // Replace 'cv.pdf' with the actual path to your CV file
    const cvUrl = '/assets/pdfs/Mostafa.Amin_CV.pdf';
    window.open(cvUrl, '_blank');
  };

  return (
    <Button onClick={handleDownloadCV} style={{ display: 'flex', alignItems: 'center' }}>
      <IoDocumentTextOutline style={{ marginRight: '0.5rem' }} />
      <Text textStyle='body-16'>Download CV</Text>
    </Button>
  );
};

export default DownloadCV;
