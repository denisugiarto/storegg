import { Meta } from '@storybook/react';
import GameItem, { GameItemProps } from '../../../../components/molecules/GameItem';

export default {
  title: 'Components/Molecules/GameInput',
  component: GameItem,
} as Meta;

function Template(args: GameItemProps) {
  return <GameItem {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  title: 'Super Mechs',
  category: 'Mobile',
  thumbnail: 'Thumbnail-1',
};
