'use client';
import React, { useState } from 'react';
import { Column } from './column';
import { Row } from './row';
import { theme } from './theme/palette';

interface IAccordionItem {
  title: string;
  content: React.ReactNode;
}

export interface IAccordionItems extends Array<IAccordionItem> {}

const styles = {
  accordion: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '0',
    overflow: 'hidden',
    width: '100%',
  },
  content: {
    backgroundColor: theme.gray[100],
    height: '32px',
    maxHeight: '0',
    overflow: 'hidden',
    padding: '0',
    transition: 'max-height 0.3s',
  },
  header: {
    backgroundColor: theme.common.white,
    borderBottom: `1px solid ${theme.gray[300]}`,
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    cursor: 'pointer',
    display: 'flex',
    height: '32px',
    justifyContent: 'space-between',
    outline: 'none',
    padding: '4px 8px',
    transition: 'background-color 0.3s',
    userSelect: 'none' as any,
    width: '100%',
  },
  hover: {
    header: {
      backgroundColor: theme.common.white,
      border: '0 0 1px 0',
      borderColor: theme.gray[100],
    },
  },
  icon: {
    fontSize: '20px',
  },
  open: {
    content: {
      children: {
        margin: '4px 8px',
      },
      maxHeight: '500px',
    },
    header: {
      backgroundColor: theme.common.white,
    },
  },
};

export function Accordion({
  items,
  width,
}: {
  items: IAccordionItems;
  width?: number;
}): React.ReactElement {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((i) => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  return (
    <Column spacing={2} width={width ?? 350}>
      {items.map((item, index) => (
        <div
          className={openSections.includes(index) ? 'open' : 'closed'}
          key={index}
          style={styles.accordion}
        >
          <button
            aria-controls={`accordion-content-${index}`}
            aria-expanded={openSections.includes(index)}
            style={{
              ...styles.header,
              ...(openSections.includes(index) && styles.open.header),
            }}
            onClick={() => handleToggle(index)}
          >
            <Row justifyContent="space-between">
              <h3>{item.title}</h3>
              <div style={styles.icon}>
                {openSections.includes(index) ? '-' : '+'}
              </div>
            </Row>
          </button>
          <div
            id={`accordion-content-${index}`}
            style={{
              ...styles.content,
              ...(openSections.includes(index) && styles.open.content),
            }}
          >
            <div style={styles.open.content.children}>{item.content}</div>
          </div>
        </div>
      ))}
    </Column>
  );
}
