function regexExt(path: string) {
  // var regex = new RegExp(/\.[0-9a-z]+$/, 'i');
  return path.match(/\.[0-9a-z]+$/i);
}

function isScss(path: string) {
  let regExtResult = regexExt(path);
  return regExtResult && regExtResult[0] === '.scss';
}

export { isScss, regexExt };
