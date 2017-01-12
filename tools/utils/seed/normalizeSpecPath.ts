export const normalizeSpecPath = (path: string = '') => {
  if (path.includes('.ts') || path.includes('spec')) {
    return path;
  }
  return `${path}*[spec].ts`;
};
