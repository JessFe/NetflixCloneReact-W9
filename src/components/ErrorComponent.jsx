import React from "react";
import { Button } from "react-bootstrap";

const ErrorComponent = ({ errorMessage, onRetry }) => (
  <div className="text-center my-4">
    <p className="text-light mb-3">{errorMessage}</p>
    <Button onClick={onRetry} variant="outline-danger">
      Reload
    </Button>
  </div>
);

export default ErrorComponent;
