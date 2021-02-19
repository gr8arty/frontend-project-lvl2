import _ from 'lodash';

export default (file1, file2) => {
  const data1 = JSON.parse(file1);
  const data2 = JSON.parse(file2);

  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.union(keys1, keys2).sort();

  const diffArray = [];
  keys.forEach((key) => {
    if (!_.has(data1, key)) {
      diffArray.push(`+ ${key}: ${data2[key]}`);
    } else if (!_.has(data2, key)) {
      diffArray.push(`- ${key}: ${data1[key]}`);
    } else if (data1[key] !== data2[key]) {
      diffArray.push(`- ${key}: ${data1[key]}`);
      diffArray.push(`+ ${key}: ${data2[key]}`);
    } else {
      diffArray.push(`  ${key}: ${data2[key]}`);
    }
  });

  const result = `{\n  ${diffArray.join('\n  ')}\n}`;
  return result;
};
