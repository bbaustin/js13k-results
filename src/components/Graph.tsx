import { useState } from 'react';
import { Entry } from './Entry';
import data from '../assets/results.json';

export const Graph = () => {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState<{
    column: keyof EntryData;
    direction: 'asc' | 'desc';
  }>({
    column: 'overall',
    direction: 'desc',
  });

  /**
   *
   * @param column {keyof EntryData} like name, author, innovation, gameplay...
   */
  const sortByCategory = (column: keyof EntryData) => {
    // Determine the sort direction: toggle between ascending and descending
    const direction =
      sortConfig.column === column && sortConfig.direction === 'desc'
        ? 'asc'
        : 'desc';

    /* Copy and sort the data based on the specified column */
    const sortedArray = [...sortedData].sort((a, b) => {
      if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    /* Update the sorted data and sort configuration */
    setSortedData(sortedArray);
    setSortConfig({ column, direction });
  };

  return (
    <table>
      <caption>Js13kGames 2024 Results</caption>
      <thead>
        <tr>
          <th
            scope='col'
            onClick={() => sortByCategory('name')}
          >
            Game Title
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('author')}
          >
            Author
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('votes')}
          >
            Number of Votes
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('overall')}
          >
            Overall Score
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('theme')}
          >
            Theme
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('innovation')}
          >
            Innovation
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('gameplay')}
          >
            Gameplay
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('graphics')}
          >
            Graphics
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('audio')}
          >
            Audio
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('controls')}
          >
            Controls
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((entry) => {
          return (
            <Entry
              key={entry.name}
              {...entry}
            />
          );
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
