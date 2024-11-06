const getCurrentDateInFormat = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

export default getCurrentDateInFormat;
