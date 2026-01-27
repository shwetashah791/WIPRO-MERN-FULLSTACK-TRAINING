function withAuth(Component) {
  return function Wrapped(props) {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (!isLoggedIn) {
      return <h2 style={{ textAlign: "center" }}>❌ Not Authorized</h2>;
    }
    return <Component {...props} />;
  };
}

export default withAuth;
