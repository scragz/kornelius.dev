import React from 'react';
import { Image, Box } from '@mantine/core';
import classes from './Diagram.module.css'; // Import styles for this component

interface DiagramProps {
  src: string;
  alt: string;
}

const Diagram: React.FC<DiagramProps> = ({ src, alt }) => {
  return (
    <Box className={classes.diagramBox}>
      <Image
        src={src}
        alt={alt}
        className={classes.diagramImage}
        radius="sm"
      />
    </Box>
  );
};

export default Diagram;
