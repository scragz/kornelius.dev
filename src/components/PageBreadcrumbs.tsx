import { Anchor, Breadcrumbs, Container } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './PageBreadcrumbs.module.css';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageBreadcrumbsProps {
  items: BreadcrumbItem[];
}

const PageBreadcrumbs = ({ items }: PageBreadcrumbsProps) => (
  <Container size="md">
    <Breadcrumbs mb="sm" className={classes.breadcrumbs}>
      {items.map((item, index) =>
        item.to ? (
          <Anchor
            key={index}
            component={Link}
            to={item.to}
            className={classes.breadcrumbLink}
          >
            {item.label}
          </Anchor>
        ) : (
          <span key={index}>{item.label}</span>
        ),
      )}
    </Breadcrumbs>
  </Container>
);

export default PageBreadcrumbs;
