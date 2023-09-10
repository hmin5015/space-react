const apiRequest = async (url = '', optionsObj = null, errMessage = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error('Please reload the app');
  } catch (error) {
    errMessage = error.message;
  } finally {
    return errMessage;
  }
}

export default apiRequest;