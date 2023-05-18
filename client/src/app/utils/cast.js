export function toNumberField(array, fieldName) {
  return array.map(item => ({...item, [fieldName]: Number(item[fieldName])}))
};
