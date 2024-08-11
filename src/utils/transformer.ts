type CamelCase<S extends string> = S extends `${infer T} ${infer U}`
  ? `${Lowercase<T>}${Capitalize<CamelCase<U>>}`
  : Lowercase<S>;

type TransformKeysToCamelCase<T> = {
  [K in keyof T as CamelCase<Extract<K, string>>]: T[K];
};

// Function to convert a string to camelCase
const toCamelCase = <S extends string>(str: S): CamelCase<S> => {
  return str.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  }) as CamelCase<S>;
};

// Function to transform object keys to camelCase
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const transformKeysToCamelCase = <T extends Record<string, any>>(
  obj: T
): TransformKeysToCamelCase<T> => {
  const newObj = {} as TransformKeysToCamelCase<T>;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = toCamelCase(key as string) as keyof TransformKeysToCamelCase<T>;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      newObj[newKey]! = obj[key];
    }
  }
  return newObj;
};
