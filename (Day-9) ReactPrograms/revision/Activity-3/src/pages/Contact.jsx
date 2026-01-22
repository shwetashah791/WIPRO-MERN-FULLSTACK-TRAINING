function Contact() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow p-4">
          <h3 className="mb-3">Contact Us</h3>

          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4"></textarea>
            </div>

            <button className="btn btn-success">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
