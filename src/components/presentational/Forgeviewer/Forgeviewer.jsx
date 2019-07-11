import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import ForgeViewer from "react-forge-viewer";

const Forgeviewer = ({ token }) => {
  const forge = useRef(null);
  const [view, setview] = useState(null);

  const handleViewerError = error => {
    // console.log("Error loading viewer.");
  };

  const handleDocumentLoaded = (doc, viewables) => {
    if (viewables.length === 0) {
      // console.error("Document contains no viewables.");
    } else {
      forge.current && setview(viewables[0]);
    }
  };

  const handleDocumentError = (viewer, error) => {
    // console.log("Error loading a document");
  };

  const handleModelLoaded = (viewer, model) => {
    // console.log("Loaded model:", model);
  };

  const handleModelError = (viewer, error) => {
    // console.log("Error loading the model.");
  };

  const handleTokenRequested = onAccessToken => {
    console.log("Token requested by the viewer.");
    if (onAccessToken) {
      onAccessToken(token.access_token, token.expires_in);
    }
  };

  return (
    <ForgeViewer
      ref={forge}
      urn="dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLmk1X1ZYS3B1U1Jxdk9GVVZDcWd5bnc_dmVyc2lvbj0z"
      view={view}
      headless={false}
      onViewerError={handleViewerError}
      onTokenRequest={handleTokenRequested}
      onDocumentLoad={handleDocumentLoaded}
      onDocumentError={handleDocumentError}
      onModelLoad={handleModelLoaded}
      onModelError={handleModelError}
    />
  );
};

const mapStateToProps = ({ type }) => ({
  token: type.forgeToken
});

export default connect(mapStateToProps)(Forgeviewer);
