import { Box, Group, ActionIcon, Anchor, Tooltip } from '@mantine/core';
import { IconBrandGithub, IconDownload } from '@tabler/icons-react';
import classes from '../App.module.css';
import HeroSection from '../components/HeroSection';
import WorkflowOverview from '../components/WorkflowOverview';
import PromptsShowcase from '../components/PromptsShowcase';
import OtherFeatures from '../components/OtherFeatures';
import CTASection from '../components/CTASection';

const LandingPage = () => {
  const githubUrl = 'https://github.com/scragz/kornelius';
  const downloadUrl =
    'https://github.com/scragz/kornelius/releases/download/v0.1.12/kornelius-0.1.12.vsix';

  return (
    <>
      <Box className={classes.fixedIcons}>
        <Group gap="sm">
          <Tooltip label="View on GitHub" withArrow position="bottom-end">
            <Anchor href={githubUrl} target="_blank" rel="noopener noreferrer">
              <ActionIcon variant="transparent" size="lg" className={classes.iconLink}>
                <IconBrandGithub size={28} />
              </ActionIcon>
            </Anchor>
          </Tooltip>
          <Tooltip label="Get Extension" withArrow position="bottom-end">
            <Anchor href={downloadUrl} target="_blank" rel="noopener noreferrer">
              <ActionIcon variant="transparent" size="lg" className={classes.iconLink}>
                <IconDownload size={28} />
              </ActionIcon>
            </Anchor>
          </Tooltip>
        </Group>
      </Box>

      <HeroSection />
      <WorkflowOverview />
      <PromptsShowcase />
      <OtherFeatures />
      <CTASection />
    </>
  );
};

export default LandingPage;
