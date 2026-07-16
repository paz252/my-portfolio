export const getTimestamp = () =>
  new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

export const copyText = async (text) => {
  await navigator.clipboard.writeText(text);
};