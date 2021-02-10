import React, { useState } from 'react';
import Style from '../style/TitleStyle';

interface Props {
  categoryName: string;
}

const CategoryTitle: React.FC = ({ categoryName }: Props) => {
  let plusTitle: String = '';
  if (categoryName === 'Computer') {
    plusTitle = ' Science';
  }
  return (
    <Style>
      {categoryName}
      {plusTitle}
    </Style>
  );
};

export default CategoryTitle;
