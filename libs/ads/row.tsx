import React from 'react';

type TJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';
type TAlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch';

interface RowProps {
  children?: React.ReactElement[] | React.ReactNode | string;
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
  spacing?: number;
}

export function Row({
  children,
  justifyContent = 'flex-start',
  alignItems = 'center',
  spacing = 0,
}: RowProps): React.ReactElement {
  const styles: React.CSSProperties = {
    alignItems,
    display: 'flex',
    gap: spacing ? `${spacing}px` : undefined,
    justifyContent,
    width: '100%',
  };

  return <div style={styles}>{children}</div>;
}
