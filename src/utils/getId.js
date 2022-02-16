function getId(array, prefix = '', stack = false) {
  let lastItemId;

  if (stack) {
    lastItemId = array[0]?.id ?? '';
  } else {
    lastItemId = array?.length > 0 ? array[array.length - 1]?.id : '';
  }

  const lastItemIdNumber = lastItemId
    ? Number(lastItemId.substring(prefix.length))
    : 0;

  return `${prefix}${lastItemIdNumber + 1}`;
}

export { getId };
