export const autoGrow = (e) => {
  e.target.style.minHeight = '5px';
  e.target.style.minHeight = e.target.scrollHeight + 'px';
};

export const noNewline = (e) => {
  if (e.keyCode === 13 && !e.shiftKey) {
    e.preventDefault();
  }
};

export const truncate = (str, n) => {
  return str.length > n ? str.slice(0, n - 1) + '...' : str;
};
