import React from 'react';

const User = props => {
  let data = props.info;
  let filteredData = {};
  Object.keys(data).forEach(key => {
    if (data[key]) {
      filteredData[key] = data[key];
    }
  });

  return (
    <ul className="list-group">
        { Object.keys(filteredData).map((key, index) => {
        return (
          <li className="list-group-item" key={ index }>
            { key }: {data[key]}
          </li>
        );
      }) }
    </ul>
  );
};

export default User;