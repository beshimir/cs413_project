import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
 
    // hardcoded trues again, since we have no api so it works
  const user = true;
  const jwt = true;

  const shouldRedirect = !(user || jwt);
  console.log("[ProtectedRoute]", { shouldRedirect });

  return !shouldRedirect ? <Route>{children}</Route> : <Redirect to="/login" />;
};

export default ProtectedRoute;
