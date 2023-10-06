const validateRequiredFields = (fields, user) => {
    for (const field of fields) {
      if (!user[field]) {
        return field;
      }
    }
    return null;
  };

  module.exports = validateRequiredFields;
  