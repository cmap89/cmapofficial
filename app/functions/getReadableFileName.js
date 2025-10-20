function getReadableFileName(path) {
  if (!path || typeof path !== 'string') {
        return 'Untitled';
    }
  const fileNameWithExt = path.split('/').pop() || '';
  const fileNameWithoutExt = fileNameWithExt.replace(/(\.[a-zA-Z0-9]+)+$/, '');
  return fileNameWithoutExt
    .replace(/[._-]/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
    .trim();
}


export default getReadableFileName;