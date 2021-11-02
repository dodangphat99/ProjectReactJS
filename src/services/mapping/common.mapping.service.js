export const mapHeadersConfigQuery = () => {
  const jwt = localStorage.getItem("user");

  return {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };
};
