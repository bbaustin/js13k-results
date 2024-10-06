import data from '../assets/results.json';
import { Entry } from './Entry';

export const Graph = () => {
  return (
    <table>
      <thead>
        <tr>
          <th scope='col'>Title</th>
          <th scope='col'>Author</th>
          <th scope='col'>Number of Votes</th>
          <th scope='col'>Overall Score</th>
          <th scope='col'>Theme</th>
          <th scope='col'>Innovation</th>
          <th scope='col'>Gameplay</th>
          <th scope='col'>Graphics</th>
          <th scope='col'>Audio</th>
          <th scope='col'>Controls</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => {
          return <Entry {...entry} />;
        })}
      </tbody>
    </table>
  );
};

export interface EntryData {
  name: string;
  author: string;
  votes: number; // max: Infinity
  overall: number; // max: 30?
  theme: number; // max: 5
  innovation: number; // max: 5
  gameplay: number; // max: 5
  graphics: number; // max: 5
  audio: number; // max: 5
  controls: number; // max: 5
}
