import { EntryData } from './Graph';

export const Entry = ({
  name,
  author,
  votes,
  overall,
  theme,
  innovation,
  gameplay,
  graphics,
  audio,
  controls,
  index,
}: EntryProps) => {
  return (
    <tr>
      <th
        scope='row'
        className='not-bold'
      >
        {index}
      </th>
      <td className='bold'>{name}</td>
      <td>{author}</td>
      <td>{votes}</td>
      <td>{overall.toFixed(2)}</td>
      <td>{theme.toFixed(2)}</td>
      <td>{innovation.toFixed(2)}</td>
      <td>{gameplay.toFixed(2)}</td>
      <td>{graphics.toFixed(2)}</td>
      <td>{audio.toFixed(2)}</td>
      <td>{controls.toFixed(2)}</td>
    </tr>
  );
};

type EntryProps = EntryData & { index: number };
