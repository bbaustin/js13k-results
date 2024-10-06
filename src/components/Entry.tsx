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
}: EntryData) => {
  return (
    <tr>
      <th scope='row'>{name}</th>
      <td>{author}</td>
      <td>{votes}</td>
      <td>{overall}</td>
      <td>{theme}</td>
      <td>{innovation}</td>
      <td>{gameplay}</td>
      <td>{graphics}</td>
      <td>{audio}</td>
      <td>{controls}</td>
    </tr>
  );
};
