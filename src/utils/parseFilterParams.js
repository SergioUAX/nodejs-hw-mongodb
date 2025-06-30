const parseContactType = (contactType) => {
    const isString = typeof contactType === 'string';
    if (!isString) return;
    const isContactType = (contactType) =>
        ['work', 'home', 'personal'].includes(contactType);

    if (isContactType(contactType)) return contactType;
  };

  const parseIsFavourite = (isFavorite) => {
    const isString = typeof isFavorite === 'string';
    if (!isString) return;
    const isIsFavorite = (isFavorite) =>
        ['true', 'false'].includes(isFavorite);

    if (isIsFavorite(isFavorite)) return isFavorite;
  };

  export const parseFilterParams = (query) => {
    const { contactType, isFavorite } = query;

    const parsedContactType = parseContactType(contactType);
    const parsedIsFavourite = parseIsFavourite(isFavorite);

    return {
        contactType: parsedContactType,
        isFavorite: parsedIsFavourite,
    };
  };
