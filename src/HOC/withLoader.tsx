import React from "react";

const withLoader = (EnhancedComponent: React.ElementType) =>
  function withLoader(props: any) {
    return props.isLoading ? (
      <div style={{ color: "black" }}> Loading... </div>
    ) : (
      <EnhancedComponent {...props} />
    );
  };

export default withLoader;