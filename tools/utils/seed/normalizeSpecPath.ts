export const normalizeSpecPath = (path: string = '') => {
  console.log('path',path)
  if (path.includes('.ts') || path.includes('spec')) {
    return path;
  }
  return `${path}*[spec].ts`;
};
