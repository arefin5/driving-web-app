
export const singleImageUpload = async (formData, setMyImageUrl) => {
  const imageBaseUrl = `https://backend.driveshikhun.com/api/v1/upload/single-image-upload`;

  console.log("LE", formData);
  console.log("LE 2", setMyImageUrl);

  fetch(imageBaseUrl, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Data: ", data);
      if (data.status === "success") {
        console.log("Response:", data);
        setMyImageUrl(data.url);
      }
    });
};
