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

interface ColumnProps {
  children?: React.ReactElement[] | React.ReactNode | string;
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
  spacing?: number;
  width?: number;
}

export function Column({
  children,
  justifyContent = 'flex-start',
  alignItems = 'center',
  spacing = 0,
  width,
}: ColumnProps): React.ReactElement {
  const styles: React.CSSProperties = {
    alignItems,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing ? `${spacing}px` : undefined,
    height: '100%',
    justifyContent,
    width: width ? width : '100%',
  };

  return <div style={styles}>{children}</div>;
}
