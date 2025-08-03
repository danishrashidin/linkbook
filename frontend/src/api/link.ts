export const getPreview = async (url: string) => {
  const data = await fetch("/api/preview-link", {
    method: "POST",
    body: JSON.stringify({
      url,
    }),
  });
  return await data.json();
};
