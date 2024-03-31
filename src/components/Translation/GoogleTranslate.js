import React, { useEffect, useRef } from "react";

const GoogleTranslate = () => {
  const isMounted = useRef(true);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "auto",
        autoDisplay: false,
        includedLanguages: "en,bn", // Only include English and French
        layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    if (isMounted.current) {
      var addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;

      isMounted.current = false;
    }
  }, []);

  return (
    <div className="pt-5" style={{ textAlign: "center" }}>
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
