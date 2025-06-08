import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Code, Container, Loader } from '@mantine/core';
import PromptHeader from '../components/PromptHeader';
import { prompts } from '../data/prompts';
import classes from './PromptPage.module.css';

const PromptPage = () => {
  const { id } = useParams<{ id: string }>();
  const prompt = prompts.find((p) => p.id === id);

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
    <>
      <PromptHeader />
      <Container size="md" my="xl">
        <h2>{prompt ? prompt.title : 'Not Found'}</h2>
        {loading ? (
          <Loader />
        ) : (
          <Code block className={classes.codeBlock}>{content}</Code>
        )}
      </Container>
    </>
  );
};

export default PromptPage;
