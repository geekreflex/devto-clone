export const autoGrow = (e) => {
  e.target.style.height = '5px';
  e.target.style.height = e.target.scrollHeight + 'px';
};

export const noNewline = (e) => {
  if (e.keyCode === 13 && !e.shiftKey) {
    e.preventDefault();
  }
};
