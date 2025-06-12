import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActionIcon, Code, Container, CopyButton, Loader, Title, Tooltip, Breadcrumbs, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconCopy, IconCheck } from '@tabler/icons-react';
import { prompts } from '../data/prompts';
import classes from './PromptPage.module.css';

const PromptPage = () => {
  const { id } = useParams<{ id: string }>();
  const prompt = prompts.find((p) => p.id === id);
  const mode = id ? id.split('-')[0] : undefined;

  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!prompt) {
      setLoading(false);
      return;
    }
    fetch(prompt.rawUrl)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => setContent('Failed to load prompt.'))
      .finally(() => setLoading(false));
  }, [prompt]);

  return (
    <Container size="md" my="xl">
      <Breadcrumbs mb="sm" className={classes.breadcrumbs}>
        <Anchor component={Link} to="/" className={classes.breadcrumbLink}>
          Home
        </Anchor>
        {prompt && mode && (
          <Anchor component={Link} to={`/${mode}`} className={classes.breadcrumbLink}>
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </Anchor>
        )}
        <span>{prompt ? prompt.title : 'Not Found'}</span>
      </Breadcrumbs>
      <Title order={1}>{prompt ? prompt.title : 'Not Found'}</Title>
      {loading ? (
        <Loader />
      ) : (
        <div style={{ position: 'relative' }}>
          <Code block className={classes.codeBlock}>{content}</Code>
          <CopyButton value={content}>
            {({ copied, copy }) => (
              <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="left">
                <ActionIcon
                  color={copied ? 'teal' : 'gray'}
                  variant="subtle"
                  onClick={copy}
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                  }}
                >
                  {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </div>
      )}
    </Container>
  );
};

export default PromptPage;
