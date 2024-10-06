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
      /* Account for names that start with lowercase */
      const aValue =
        typeof a[column] === 'string'
          ? (a[column] as string).toLowerCase()
          : a[column];
      const bValue =
        typeof b[column] === 'string'
          ? (b[column] as string).toLowerCase()
          : b[column];

      if (aValue < bValue) return direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return direction === 'asc' ? 1 : -1;
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
          <th>#</th>
          <th
            scope='col'
            onClick={() => sortByCategory('name')}
            className={sortConfig.column === 'name' ? 'active-sort' : ''}
          >
            Game Title
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('author')}
            className={sortConfig.column === 'author' ? 'active-sort' : ''}
          >
            Author
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('votes')}
            className={sortConfig.column === 'votes' ? 'active-sort' : ''}
          >
            Number of Votes
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('overall')}
            className={sortConfig.column === 'overall' ? 'active-sort' : ''}
          >
            Overall Score
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('theme')}
            className={sortConfig.column === 'theme' ? 'active-sort' : ''}
          >
            Theme
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('innovation')}
            className={sortConfig.column === 'innovation' ? 'active-sort' : ''}
          >
            Innovation
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('gameplay')}
            className={sortConfig.column === 'gameplay' ? 'active-sort' : ''}
          >
            Gameplay
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('graphics')}
            className={sortConfig.column === 'graphics' ? 'active-sort' : ''}
          >
            Graphics
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('audio')}
            className={sortConfig.column === 'audio' ? 'active-sort' : ''}
          >
            Audio
          </th>
          <th
            scope='col'
            onClick={() => sortByCategory('controls')}
            className={sortConfig.column === 'controls' ? 'active-sort' : ''}
          >
            Controls
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((entry, index) => {
          return (
            <Entry
              key={entry.name}
              index={
                sortConfig.direction === 'desc'
                  ? index + 1
                  : data.length - index
              }
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
